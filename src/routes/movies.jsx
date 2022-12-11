import GenreItem from '../components/genre/GenreItem';
import GenreWrapper from '../components/genre/GenreWrapper';
import Container from '../components/global/Container';
import Grid from '../components/global/Grid';
import MediaItem from '../components/global/MediaItem';

function Movies() {
  return (
    <>
      <section aria-label='movie genres'>
        <Container>
          <GenreWrapper>
            <GenreItem />
          </GenreWrapper>
        </Container>
      </section>
      <section aria-label='Adventure movies'>
        <Container>
          <div className='mt-8'>
            <h2>Adventure</h2>
            <Grid>
              <MediaItem />
            </Grid>
          </div>
        </Container>
      </section>
    </>
  );
}

export default Movies;
