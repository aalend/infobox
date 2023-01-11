import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { TMDB_BACKDROP_POSTER_PATH } from '../../config/config';
import supabase from '../../supabase/client';
import StarRating from '../rating/StarRating';

// Export to helper function
const formatDate = releaseDate =>
  `${new Date(releaseDate.release_date).getMonth() + 1} / ${new Date(
    releaseDate.release_date
  ).getFullYear()}`;

// Export to helper function
const renderError = message => {
  return (
    <div className='fixed left-0 top-0 isolate w-full bg-gray-50 py-4 text-center text-xl font-bold shadow-md transition ease-in-out'>
      {message}
    </div>
  );
};

function MediaPage({ mediaData }) {
  const { user: user } = useSelector(state => state.auth.user);
  const [hasError, setHasError] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setErrorMsg('');
    }, 2000);

    return () => clearTimeout(timer);
  }, [errorMsg]);

  const storeBookmark = async function () {
    try {
      const { data } = await supabase
        .from('bookmarks')
        .select('bookmark_id')
        .eq('bookmark_id', mediaData.id);

      if (data.length > 0) {
        throw new Error(
          `${mediaData.original_title ?? mediaData.name} is already stored in bookmarks.`
        );
      }

      const mediaObject = {
        user_id: user.id,
        bookmark_id: mediaData.id,
        name: mediaData.name,
        original_title: mediaData.original_title,
        tagline: mediaData.tagline,
        poster_path: mediaData.poster_path,
        overview: mediaData.overview,
        genres: mediaData.genres,
        runtime: mediaData.runtime,
        spoken_languages: mediaData.spoken_languages,
        release_date: mediaData.release_date,
        first_air_date: mediaData.first_air_date,
        vote_average: mediaData.vote_average,
        vote_count: mediaData.vote_count,
      };

      await supabase.from('bookmarks').insert([mediaObject]);
      setHasError(false);
      setErrorMsg(`${mediaData.original_title ?? mediaData.name} is stored in bookmarks.`);
    } catch (err) {
      setHasError(true);
      setErrorMsg(err);
    }
  };

  return (
    <>
      {hasError ? renderError(errorMsg.message) : renderError(errorMsg)}
      <section className='mt-16 flex flex-col items-center gap-8 lg:flex-row lg:items-start'>
        <div className='max-w-sm object-cover'>
          <img
            className='rounded-lg'
            src={`${TMDB_BACKDROP_POSTER_PATH}/${mediaData.poster_path}`}
            alt=''
          />
        </div>
        <div className='flex flex-col gap-6 text-center lg:w-full lg:text-start'>
          <h2 className='text-5xl font-bold tracking-tight'>
            {mediaData.original_title ?? mediaData.name}
          </h2>
          <p>{mediaData.tagline}</p>
          <div className='mx-auto md:ml-0 md:mr-auto'>
            <StarRating voteAverage={mediaData.vote_average} />
          </div>
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
              <p>{formatDate(mediaData) ?? mediaData.first_air_date}</p>
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
              className={`cursor-pointer rounded-md bg-slate-700 px-8 py-2 text-white shadow-md hover:shadow-lg ${
                !user || hasError ? 'border-2 bg-transparent text-slate-700' : ''
              }`}
              aria-label={`Save ${mediaData.original_title ?? mediaData.name} to bookmarks`}
              onClick={storeBookmark}
              disabled={!user || hasError ? true : false}
            >
              Bookmark
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default MediaPage;
