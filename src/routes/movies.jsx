import { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import GenreItem from '../components/genre/GenreItem';
import GenreWrapper from '../components/genre/GenreWrapper';
import Container from '../components/global/Container';
import Grid from '../components/global/Grid';
import MediaItem from '../components/global/MediaItem';
import Pagination from '../components/pagination/Pagination';
import {
  useFetchMovieCategoriesQuery,
  useFetchMoviesByCategoriesQuery,
} from '../features/movies/movies-slice';

function Movies() {
  const [pageNum, setPageNum] = useState(1);
  const { id = 28, movie_id } = useParams();
  const { data: { genres = [] } = [] } = useFetchMovieCategoriesQuery();
  const { data: { results = [] } = [] } = useFetchMoviesByCategoriesQuery({ id, pageNum });

  const categoryId = genres?.find(genreId => genreId.id === +id);

  const handlePagination = function (pagiantionPage) {
    setPageNum(pagiantionPage);
  };

  return (
    <>
      {movie_id !== undefined ? (
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
                {results?.map(movie => {
                  return (
                    <MediaItem
                      id={movie.id}
                      url='movies'
                      key={movie.id}
                      name={movie.original_title ?? movie.title}
                      backdrop={movie.backdrop_path ?? movie.poster_path}
                      description={movie.overview}
                      voteCount={movie.vote_count}
                      voteAverage={movie.vote_average}
                    />
                  );
                })}
              </Grid>
              <Pagination onPagination={handlePagination} />
            </Container>
          </section>
        </>
      )}
    </>
  );
}

export default Movies;
