import { useRouteError } from 'react-router-dom';

function ErrorPage() {
  const error = useRouteError();

  console.log(error);

  return (
    <>
      <section aria-label={`page ${error.statusText}`}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>{error.statusText || error.message}</p>
      </section>
    </>
  );
}

export default ErrorPage;
