import Container from '../components/global/Container';
import {Outlet} from "react-router-dom";

export default function Root() {
  return (
    <>
      <header>
        <Container>
          <h1>Infobox</h1>
        </Container>
      </header>
      <main id='main-content' tabIndex={-1}>
          <Outlet />
      </main>
      <footer>
        <Container></Container>
      </footer>
    </>
  );
}
