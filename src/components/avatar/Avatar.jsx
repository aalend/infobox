import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signOut } from '../../features/auth/auth-slice';
import supabase from '../../supabase/client';

function Avatar() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);

  const logOutUser = async function () {
    await supabase.auth.signOut();

    dispatch(signOut());
  };

  return (
    <div className='flex items-center gap-4'>
      {isAuth ? (
        <button type='button' onClick={logOutUser}>
          Sign out
        </button>
      ) : (
        <Link to={'/auth'}>Login</Link>
      )}
    </div>
  );
}

export default Avatar;
