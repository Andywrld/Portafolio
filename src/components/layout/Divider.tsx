import { Container } from './Container';

/** Hairline between movements. The only separator the page uses. */
export const Divider = () => (
  <Container className='my-9'>
    <hr className='border-0 border-t border-border' />
  </Container>
);
