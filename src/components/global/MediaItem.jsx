import { Link } from 'react-router-dom';
import { TMDB_BACKDROP_PATH } from '../../config/config';
import StarRating from '../rating/StarRating';

function MediaItem({ id, name, backdrop, description, voteAverage, voteCount, url }) {
  return (
    <Link to={`/${url}/${id}`}>
      <div>
        <img
          src={`${TMDB_BACKDROP_PATH}/${backdrop}`}
          alt={name}
          className='aspect-video w-full rounded-3xl object-cover'
        />
        <div className='py-4'>
          <div className='flex items-center gap-4'>
            <StarRating voteAverage={voteAverage} />
            <span className='text-slate-400'>{voteCount} votes</span>
          </div>
          <h2 className='mt-4'>{name}</h2>
          <p className='truncate text-slate-400'>{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default MediaItem;
