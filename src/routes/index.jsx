import SearchBar from '../components/SearchBar';
import Grid from '../components/global/Grid';
import Container from '../components/global/Container';
import MediaItem from '../components/global/MediaItem';

function Index() {
  return (
    <>
      <SearchBar />
      <section aria-label='list of current popular movies' className='mt-8'>
        <Container>
          <h2 className='text-2xl font-bold'>Popular movies</h2>
          <Grid>
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
            <MediaItem />
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default Index;
