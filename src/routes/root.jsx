import { Outlet } from 'react-router-dom';
import Container from '../components/global/Container';
import Nav from '../components/Nav';

function Root() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main id='main-content' tabIndex={-1}>
        <Outlet />
      </main>
      <footer>
        <Container>
          <div className='py-8 text-center'>
            <p>&copy; 2022 Alen Demirov</p>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Root;
