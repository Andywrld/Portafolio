import { createRoot } from 'react-dom/client';
import './styles/index.css';
import App from './App.tsx';

// Enable JS-gated reveal styles (no-JS renders stay fully visible).
document.documentElement.classList.add('js');

createRoot(document.getElementById('root')!).render(<App />);
