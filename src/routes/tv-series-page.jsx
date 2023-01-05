import { useParams } from 'react-router-dom';
import Container from '../components/global/Container';
import MediaPage from '../components/global/MediaPage';
import { useFetchDetailsQuery } from '../features/tv-series/tv-series-slice';

function TvSeriesPage() {
  const { tv_id } = useParams();
  const { data, isFetching } = useFetchDetailsQuery(tv_id);

  return <Container>{isFetching ? 'Fetching' : <MediaPage mediaData={data} />}</Container>;
}

export default TvSeriesPage;
