import { Outlet, useParams } from 'react-router-dom';
import GenreItem from '../components/genre/GenreItem';
import GenreWrapper from '../components/genre/GenreWrapper';
import Container from '../components/global/Container';
import Grid from '../components/global/Grid';
import MediaItem from '../components/global/MediaItem';
import {
  useFetchCategoriesQuery,
  useFetchByCategoriesQuery,
} from '../features/tv-series/tv-series-slice';

function TvSeries() {
  const { id = 10759, tv_id } = useParams();
  const { data: { genres = [] } = [], isFetching: isFetchingCategory } = useFetchCategoriesQuery();
  const { data: { results = [] } = [], isFetching: isFetchingSeries } =
    useFetchByCategoriesQuery(id);

  const categoryId = genres?.find(genreId => genreId.id === +id);

  return (
    <>
      {tv_id !== undefined ? (
        <Outlet />
      ) : (
        <>
          <section aria-label='movie genres' className='mt-4'>
            <Container>
              <GenreWrapper>
                <GenreItem genres={genres} />
              </GenreWrapper>
            </Container>
          </section>
          <section aria-label='Adventure movies' className='py-8'>
            <Container>
              <h2 className='text-3xl'>{categoryId?.name}</h2>
              <Grid>
                {results?.map(series => {
                  return (
                    <MediaItem
                      id={series.id}
                      url='tv'
                      key={series.id}
                      name={series.name}
                      backdrop={series.poster_path}
                      description={series.overview}
                      voteCount={series.vote_count}
                      voteAverage={series.vote_average}
                    />
                  );
                })}
              </Grid>
            </Container>
          </section>{' '}
        </>
      )}
    </>
  );
}

export default TvSeries;
