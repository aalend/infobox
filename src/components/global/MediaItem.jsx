import { StarIcon } from '@heroicons/react/20/solid';

function MediaItem({ imgPath, title, rating, mediaType }) {
  return (
    <div>
      <img
        src='https://via.placeholder.com/250'
        alt=''
        className='aspect-video w-full rounded-3xl object-cover'
      />
      <div className='py-4'>
        <p className='flex items-center gap-4'>
          <span className='flex items-center'>
            <StarIcon className='w-5 text-yellow-400' />
            <StarIcon className='w-5 text-yellow-400' />
            <StarIcon className='w-5 text-yellow-400' />
            <StarIcon className='w-5 text-yellow-400' />
            <StarIcon className='w-5 stroke-slate-400 text-white' />
          </span>
          <span className='text-slate-400'>8907 votes</span>
        </p>
        <h2 className='mt-4'>Card content</h2>
        <p className='text-slate-400'>Lorem ipsum dolor sit, amet.</p>
      </div>
    </div>
  );
}

export default MediaItem;
