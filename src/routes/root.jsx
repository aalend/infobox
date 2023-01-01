import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import Container from '../components/global/Container';
import Nav from '../components/Nav';
import { signInWithOtp } from '../features/auth/auth-slice';
import supabase from '../supabase/client';

function Root() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

  useEffect(() => {
    const getCurrentUser = async function () {
      try {
        const { error, data: user } = await supabase.auth.getUser();

        if (error) throw new Error(error.message);

        dispatch(signInWithOtp(user));
      } catch (error) {
        console.log(error);
      }
    };

    getCurrentUser();
  }, [isAuth]);

  useEffect(() => {
    const hasLocalStorageUser = localStorage.getItem('sb-bzoiwduubxaqodnlegop-auth-token');

    if (!hasLocalStorageUser) return;

    dispatch(signInWithOtp(hasLocalStorageUser));
  }, []);

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
