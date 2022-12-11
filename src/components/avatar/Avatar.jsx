import { Link } from 'react-router-dom';

function Avatar() {
  return (
    <div>
      {/* <img
        className='w-8 rounded-full object-cover'
        src='https://via.placeholder.com/250'
        alt=''
      /> */}
      <Link to={'/auth'}>Login</Link>
    </div>
  );
}

export default Avatar;
