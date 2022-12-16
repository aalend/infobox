import { useState } from 'react';
import Carousel from '../components/carousel/Carousel';
import Container from '../components/global/Container';
import Grid from '../components/global/Grid';
import MediaItem from '../components/global/MediaItem';
import SearchBar from '../components/SearchBar';
import { useFetchTopRatedQuery } from '../features/movies/movies-slice';

function Index() {
  const [page, setPage] = useState(1);
  const { data = [], isFetching } = useFetchTopRatedQuery(page);

  const handleNextPage = function () {
    setPage(prev => prev + 1);
  };

  const handlePrevPage = function () {
    setPage(prev => prev - 1);
  };

  return (
    <>
      <SearchBar />
      <section aria-label='list of current popular movies' className='mt-8'>
        <Carousel />
        <Container>
          <h2 className='mt-16 text-3xl'>Popular Movies</h2>
          <Grid>
            {data.results?.map(movie => {
              return (
                <MediaItem
                  key={movie.id}
                  name={movie.original_title ?? movie.title}
                  backdrop={movie.backdrop_path}
                  description={movie.overview}
                  voteCount={movie.vote_count}
                  voteAverage={movie.vote_average}
                />
              );
            })}
          </Grid>
          <button type='button' onClick={handlePrevPage}>
            Prev Page
          </button>
          <button type='button' onClick={handleNextPage}>
            Next Page
          </button>
        </Container>
      </section>
    </>
  );
}

export default Index;
