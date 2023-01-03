import { useEffect, useState } from 'react';
import supabase from '../supabase/client.js';
import Container from '../components/global/Container';
import Grid from '../components/global/Grid';
import MediaItem from '../components/global/MediaItem';
import { useSelector } from 'react-redux';
import { signOut } from '../features/auth/auth-slice.js';
import { useDispatch } from 'react-redux';

function Bookmarks() {
  const dispatch = useDispatch();
  const { user: user } = useSelector(state => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBookmarks = async function () {
      try {
        setIsLoading(false);

        const { data, error } = await supabase
          .from('bookmarks')
          .select('*')
          .eq('user_id', user.id);
        if (error) throw new Error(error.message);
        setData(data);
      } catch (error) {
        dispatch(signOut());
      }

      setData(data);
    };

    getBookmarks();
  }, []);

  return (
    <section>
      <Container>
        <section className='mt-16'>
          <h2 className='text-3xl'>Bookmarks</h2>
          <Grid>
            {isLoading
              ? 'Loading data'
              : data?.map(item => {
                  return (
                    <MediaItem
                      id={item.bookmark_id}
                      key={item.id}
                      name={item.original_title ?? item.name}
                      backdrop={item.backdrop_path ?? item.poster_path}
                      description={item.overview}
                      voteCount={item.vote_count}
                      voteAverage={item.vote_average}
                      url={item.original_title ? 'movies' : 'tv'}
                    />
                  );
                })}
          </Grid>
        </section>
      </Container>
    </section>
  );
}

export default Bookmarks;
