import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/global/Container';
import MediaPage from '../components/global/MediaPage';
import { useFetchDetailsQuery } from '../features/movies/movies-slice';
function MoviePage() {
  const { movie_id } = useParams();
  const { data, isFetching } = useFetchDetailsQuery(movie_id);

  return (
    <>
      <Container>{isFetching ? 'Fetching' : <MediaPage mediaData={data} />}</Container>
    </>
  );
}

export default MoviePage;
