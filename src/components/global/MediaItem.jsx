import { StarIcon } from '@heroicons/react/20/solid';
import { TMDB_BACKDROP_PATH } from '../../config/config';
import Rating from '../rating/Rating';

function MediaItem({ name, backdrop, description, voteAverage, voteCount }) {
  return (
    <div>
      <img
        src={`${TMDB_BACKDROP_PATH}/${backdrop}`}
        alt={name}
        className='aspect-video w-full rounded-3xl object-cover'
      />
      <div className='py-4'>
        <p className='flex items-center gap-4'>
          <Rating voteAverage={voteAverage} />
          <span className='text-slate-400'>{voteCount} votes</span>
        </p>
        <h2 className='mt-4'>{name}</h2>
        <p className='truncate text-slate-400'>{description}</p>
      </div>
    </div>
  );
}

export default MediaItem;
