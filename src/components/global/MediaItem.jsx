function MediaItem({ imgPath, title, rating, mediaType }) {
  return (
    <div className='rounded-md border'>
      <img
        src='https://via.placeholder.com/250'
        alt=''
        className='aspect-video w-full object-cover'
      />
      <div className='p-4'>
        <h2>Card content</h2>
        <p>Card rating in stars and type of card</p>
      </div>
    </div>
  );
}

export default MediaItem;
