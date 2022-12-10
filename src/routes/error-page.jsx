import { useRouteError } from 'react-router-dom';
import Container from '../components/global/Container';

export default function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  return (
    <>
      <section aria-label={`page ${error.statusText}`}>
        <Container>
          <h1>Oops!</h1>
          <p>Sorry, an unexpected error has occurred.</p>
          <p>{error.statusText || error.message}</p>
        </Container>
      </section>
    </>
  );
}
