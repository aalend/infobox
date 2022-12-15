function Rating({ voteAverage }) {
  return (
    <>
      <div>
        {Math.round(voteAverage) / 2}
        {/* <span className='flex items-center'>
            <StarIcon className='w-5 text-yellow-400' />
            <StarIcon className='w-5 text-yellow-400' />
            <StarIcon className='w-5 text-yellow-400' />
            <StarIcon className='w-5 text-yellow-400' />
            <StarIcon className='w-5 stroke-slate-400 text-white' />
          </span> */}
      </div>
    </>
  );
}

export default Rating;
