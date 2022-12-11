import { BookmarkIcon, FilmIcon, HomeIcon, TvIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
import Container from './global/Container';

function Nav() {
  return (
    <nav id='primary'>
      <Container>
        <div className='item-center my-4 flex justify-between rounded-md bg-slate-100 py-6 px-4'>
          <h1>InfoBox</h1>
          <ul className='flex items-center gap-4'>
            <li>
              <NavLink to={'/'}>
                <span>
                  <HomeIcon className='w-6' />
                </span>
                <span className='sr-only'>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/movies'}>
                <span>
                  <FilmIcon className='w-6' />
                </span>
                <span className='sr-only'>Movies</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'tv'}>
                <span>
                  <TvIcon className='w-6' />
                </span>
                <span className='sr-only'>Tv Series</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/bookmark'}>
                <span>
                  <BookmarkIcon className='w-6' />
                </span>
                <span className='sr-only'>Bookmark</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
}

export default Nav;
