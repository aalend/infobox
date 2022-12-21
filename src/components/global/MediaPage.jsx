import {TMDB_BACKDROP_POSTER_PATH} from '../../config/config';

function MediaPage({ mediaData }) {
  return (
    <section className='mt-16 flex flex-col items-center gap-8 lg:flex-row lg:items-start'>
      <div className='max-w-sm object-cover'>
        <img
          className='rounded-lg'
          src={`${TMDB_BACKDROP_POSTER_PATH}/${mediaData.poster_path}`}
          alt=''
        />
      </div>
      <div className='flex flex-col gap-6 text-center lg:text-start'>
        <h2 className='text-5xl font-bold tracking-tight'>
          {mediaData.original_title ?? mediaData.name}
        </h2>
        <p>{mediaData.tagline}</p>
        <p>{(mediaData.vote_average / 2).toFixed(1)}</p>
        <div className='flex max-w-3xl justify-between'>
          <div>
            <h3>Length</h3>
            <p>{mediaData.runtime} min.</p>
          </div>
          <div>
            <h3>Language</h3>
            <p className='flex flex-row gap-2'>
              {mediaData.spoken_languages.map(lang => (
                <span key={lang.iso_639_1}>{lang.english_name}</span>
              ))}
            </p>
          </div>
          <div>
            <h3>Year</h3>
            <p>{mediaData.release_date ?? mediaData.first_air_date}</p>
          </div>
          <div>
            <h3>Status</h3>
            <p>{mediaData.status}</p>
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <h2>Genres</h2>
          <div className='flex gap-2'>
            {mediaData.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-start'>
          <h3>Overview</h3>
          <p className='max-w-prose text-left'>{mediaData.overview}</p>
        </div>
        <div>
          <button
            type='button'
            aria-label={`Save ${mediaData.original_title ?? mediaData.name} to bookmarks`}
          >
            Bookmark
          </button>
        </div>
      </div>
    </section>
  );
}

export default MediaPage;
