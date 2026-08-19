import { useEffect, useState } from 'react';

export type GitHubProfile = {
  avatarUrl: string;
  htmlUrl: string;
  publicRepos: number;
  followers: number;
};

type State = {
  data: GitHubProfile | null;
  /** True until the first resolution, so the avatar can hold its shape. */
  loading: boolean;
};

const cacheKey = (user: string) => `gh-profile:${user}`;

/** Anything shaped wrong is treated as a miss rather than trusted. */
const readCache = (user: string): GitHubProfile | null => {
  try {
    const raw = sessionStorage.getItem(cacheKey(user));
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GitHubProfile;
    return typeof parsed?.avatarUrl === 'string' ? parsed : null;
  } catch {
    return null;
  }
};

/**
 * Reads the public GitHub profile so the portrait and the counters follow the
 * account instead of a checked-in copy.
 *
 * The unauthenticated API allows 60 requests per hour per IP, so the result is
 * cached for the session. Every failure path — rate limit, offline, blocked
 * storage — resolves to `null`, and the caller falls back to the bundled
 * portrait. The header must never depend on the network to render.
 */
export const useGitHubProfile = (user: string): State => {
  const [state, setState] = useState<State>(() => {
    const cached = readCache(user);
    return { data: cached, loading: cached === null };
  });

  useEffect(() => {
    if (state.data) return;

    const controller = new AbortController();

    fetch(`https://api.github.com/users/${user}`, {
      signal: controller.signal,
      headers: { Accept: 'application/vnd.github+json' },
    })
      .then((response) => {
        if (!response.ok) throw new Error(`GitHub responded ${response.status}`);
        return response.json();
      })
      .then((json) => {
        const profile: GitHubProfile = {
          avatarUrl: json.avatar_url,
          htmlUrl: json.html_url,
          publicRepos: json.public_repos ?? 0,
          followers: json.followers ?? 0,
        };
        try {
          sessionStorage.setItem(cacheKey(user), JSON.stringify(profile));
        } catch {
          // Storage blocked (private mode): serve this session from memory.
        }
        setState({ data: profile, loading: false });
      })
      .catch((error) => {
        if (error.name === 'AbortError') return;
        // Rate-limited or offline: the caller renders the bundled portrait.
        setState({ data: null, loading: false });
      });

    return () => controller.abort();
    // Re-running on `state.data` would refetch after every success.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return state;
};
