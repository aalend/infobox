import Container from '../components/global/Container';
import Grid from '../components/global/Grid';
import MediaItem from '../components/global/MediaItem';

function Bookmarks() {
  return (
    <section>
      <Container>
        <section className='mt-16'>
          <h2 className='text-3xl'>Bookmarked Movies</h2>
          <Grid>
            <MediaItem />
          </Grid>
        </section>
        <section className='mt-12'>
          <h2 className='text-3xl'>Bookmarked Tv Series</h2>
          <Grid>
            <MediaItem />
          </Grid>
        </section>
      </Container>
    </section>
  );
}

export default Bookmarks;
