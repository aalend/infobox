import React from 'react';
import { useParams } from 'react-router-dom';
import Container from '../components/global/Container';
import { TMDB_BACKDROP_POSTER_PATH } from '../config/config.js';
import { useFetchDetailsQuery } from '../features/movies/movies-slice';

function MoviePage() {
  const { movie_id } = useParams();
  const { data, isFetching } = useFetchDetailsQuery(movie_id);

  return (
    <>
      <Container>
        {isFetching ? (
          'Fetching'
        ) : (
          <section
            aria-label=''
            className='mt-16 flex flex-col items-center gap-8 md:flex-row md:items-start'
          >
            <div className='max-w-sm object-cover'>
              <img
                className='rounded-lg'
                src={`${TMDB_BACKDROP_POSTER_PATH}/${data.poster_path}`}
                alt=''
              />
            </div>
            <div className='flex flex-col gap-6 text-center md:text-start'>
              <h2 className='text-5xl font-bold tracking-tight'>{data.original_title}</h2>
              <p>{data.tagline}</p>
              <p>{(data.vote_average / 2).toFixed(1)}</p>
              <div className='flex max-w-3xl justify-between'>
                <div>
                  <h3>Length</h3>
                  <p>{data.runtime} min.</p>
                </div>
                <div>
                  <h3>Language</h3>
                  <p className='flex flex-row gap-2'>
                    {data.spoken_languages.map(lang => (
                      <span key={lang.iso_639_1}>{lang.english_name}</span>
                    ))}
                  </p>
                </div>
                <div>
                  <h3>Year</h3>
                  <p>{data.release_date}</p>
                </div>
                <div>
                  <h3>Status</h3>
                  <p>{data.status}</p>
                </div>
              </div>
              <div className='flex flex-col items-start'>
                <h2>Genres</h2>
                <div className='flex gap-2'>
                  {data.genres.map(genre => (
                    <span key={genre.id}>{genre.name}</span>
                  ))}
                </div>
              </div>
              <div className='flex flex-col items-start'>
                <h3>Overview</h3>
                <p className='max-w-prose text-left'>{data.overview}</p>
              </div>
            </div>
          </section>
        )}
      </Container>
    </>
  );
}

export default MoviePage;
