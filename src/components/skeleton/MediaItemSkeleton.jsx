import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

function MediaItemSkeleton({ bookmarksCount }) {
  return Array(bookmarksCount)
    .fill(0)
    .map((_, i) => (
      <div key={i}>
        <Skeleton height={198} width={352} />
        <div className='py-4'>
          <div className='flex items-center gap-4'>
            <Skeleton width={352} />
            <Skeleton />
          </div>
          <Skeleton width={352} />
          <Skeleton width={352} />
        </div>
      </div>
    ));
}

export default MediaItemSkeleton;
