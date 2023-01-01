import { useRef } from 'react';
import Container from '../components/global/Container';
import supabase from '../supabase/client';

function Auth() {
  const emailRef = useRef();

  const sendMagicLink = async function (e) {
    e.preventDefault();

    const email = emailRef.current.value;
    const redirectTo = 'https://infobox-movie.netlify.app/';

    await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: redirectTo,
      },
    });

    emailRef.current.value = '';
  };

  return (
    <>
      <section aria-label='singnup page' className='mt-24'>
        <Container>
          <div className='flex justify-center'>
            <div className='flex flex-col items-center gap-6 md:w-2/4'>
              <h2 className='text-3xl font-bold'>Sign Up</h2>
              <button
                type='button'
                className='mt-12 w-full rounded-md bg-google px-8 py-3 font-bold text-slate-50 hover:shadow-md'
              >
                Sign up with your Google account
              </button>
              <p>or</p>
              <form action='' className='w-full'>
                <div className='flex flex-col gap-4'>
                  <div>
                    <label htmlFor='email' className='sr-only'>
                      Enter your email address
                    </label>
                    <input
                      type='email'
                      className='w-full rounded-md border py-2 px-4'
                      name='email'
                      id='email'
                      placeholder='getyour@magiclink.com'
                      ref={emailRef}
                    />
                  </div>
                  <button
                    type='submit'
                    className='w-full rounded-md bg-slate-800 px-8 py-3 font-bold text-slate-50 hover:shadow-md'
                    onClick={sendMagicLink}
                  >
                    Send magic link
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Auth;
