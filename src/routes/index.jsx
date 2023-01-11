import { useCallback, useState } from 'react';
import Carousel from '../components/carousel/Carousel';
import Container from '../components/global/Container';
import Grid from '../components/global/Grid';
import MediaItem from '../components/global/MediaItem';
import Pagination from '../components/pagination/Pagination';
import SearchBar from '../components/SearchBar';
import { useFetchTopRatedQuery } from '../features/movies/movies-slice';

function Index() {
  const [page, setPage] = useState(1);
  const { data = [], isFetching } = useFetchTopRatedQuery(page);

  const handlePagination = function (pagiantionPage) {
    setPage(pagiantionPage);
  };

  return (
    <>
      <SearchBar />
      <section aria-label='list of current popular movies' className='mt-8'>
        <Carousel />
        <Container>
          <h2 className='mt-16 text-3xl'>Popular Movies</h2>
          <Grid>
            {isFetching
              ? 'Loading data'
              : data.results?.map(movie => {
                  return (
                    <MediaItem
                      id={movie.id}
                      url={'movies'}
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
          <Pagination onPagination={handlePagination} />
        </Container>
      </section>
    </>
  );
}

export default Index;
