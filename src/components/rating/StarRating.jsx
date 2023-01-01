import { StarIcon } from '@heroicons/react/24/solid';
import { StarIcon as OutlineStar } from '@heroicons/react/24/outline';
import HalfStarIcon from '../../assets/half-star.svg';

const EmptyStar = () => <OutlineStar className='w-5 text-yellow-400' />;
const FullStar = () => <StarIcon className='w-5 text-yellow-400' />;
const HalfStar = () => (
  <div className='h-4 w-4'>
    <img className='aspect-square object-cover text-yellow-400' src={HalfStarIcon} alt='' />
  </div>
);

function StarRating({ voteAverage }) {
  const STAR_COUNT = 5;

  const voteAbs = Math.abs(voteAverage / 2);
  const stars = Array.from({ length: STAR_COUNT }, (_, i) => <EmptyStar key={i + 1} />);

  let i;
  for (i = 0; i < voteAbs; i++) {
    stars[i] = <FullStar key={i} />;
  }

  if (voteAbs % 1 != 0) stars[i - 1] = <HalfStar key={i} />;

  return (
    <>
      <div className='flex items-center'>{stars}</div>
    </>
  );
}

export default StarRating;
