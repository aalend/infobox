import GenreItem from '../components/genre/GenreItem';
import GenreWrapper from '../components/genre/GenreWrapper';
import Container from '../components/global/Container';
import Grid from '../components/global/Grid';
import MediaItem from '../components/global/MediaItem';

function TvSeries() {
  return (
    <>
      <section aria-label='movie genres'>
        <Container>
          <GenreWrapper>
            <GenreItem />
          </GenreWrapper>
        </Container>
      </section>
      <section aria-label='Adventure movies' className='py-8'>
        <Container>
          <h2>Mystery</h2>
          <Grid>
            <MediaItem />
          </Grid>
        </Container>
      </section>
    </>
  );
}

export default TvSeries;
