import Container from '../components/global/Container';
import Grid from '../components/global/Grid';
import MediaItem from '../components/global/MediaItem';

function Bookmarks() {
  return (
    <section>
      <Container>
        <section>
          <h2>Bookmarked Movies</h2>
          <Grid>
            <MediaItem />
          </Grid>
        </section>
        <section className='mt-12'>
          <h2>Bookmarked Tv Series</h2>
          <Grid>
            <MediaItem />
          </Grid>
        </section>
      </Container>
    </section>
  );
}

export default Bookmarks;
