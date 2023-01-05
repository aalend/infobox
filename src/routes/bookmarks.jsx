import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from '../components/global/Container';
import Grid from '../components/global/Grid';
import MediaItem from '../components/global/MediaItem';
import MediaItemSkeleton from '../components/skeleton/MediaItemSkeleton';
import { signOut } from '../features/auth/auth-slice.js';
import supabase from '../supabase/client.js';

function Bookmarks() {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.auth.isAuth);
  const { user: user } = useSelector(state => state.auth.user);
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const getBookmarks = async function () {
      try {
        const { data, error } = await supabase
          .from('bookmarks')
          .select('*')
          .eq('user_id', user.id);

        if (error) throw new Error(error.message);

        setData(data);
        setIsLoading(false);
      } catch (error) {
        setData([]);
        dispatch(signOut());
      }
    };

    getBookmarks();
  }, [isAuth]);

  return (
    <section>
      <Container>
        <section className='mt-16'>
          {data.length !== 0 && <h2 className='text-3xl'>Bookmarks</h2>}
          {data.length === 0 && <h2 className='text-center text-3xl'>Login to save bookmarks</h2>}
          <Grid>
            {isLoading ? (
              <MediaItemSkeleton bookmarksCount={data.length} />
            ) : (
              data?.map(item => {
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
              })
            )}
          </Grid>
        </section>
      </Container>
    </section>
  );
}

export default Bookmarks;
