import { useEffect, useState } from 'react';

function Pagination({ onPagination }) {
  const [pageNum, setPageNum] = useState(1);
  const [buttonAvailable, setButtonAvailable] = useState(true);

  const handleNextPage = function () {
    setPageNum(prev => prev + 1);
  };

  const handlePrevPage = function () {
    setPageNum(prev => prev - 1);
  };

  useEffect(() => {
    if (pageNum <= 1) setButtonAvailable(false);
    if (pageNum > 1) setButtonAvailable(true);

    onPagination(pageNum);
  }, [pageNum]);

  return (
    <>
      <div className='mt-16 flex items-center justify-center gap-4'>
        <button
          type='button'
          className={`rounded-md border ${!buttonAvailable ? 'bg-gray-300' : ''} px-4 py-2`}
          onClick={handlePrevPage}
          disabled={!buttonAvailable}
        >
          Prev Page
        </button>
        <div className='rounded-md border px-4 py-2'>{pageNum}</div>
        <button type='button' className='rounded-md border px-4 py-2' onClick={handleNextPage}>
          Next Page
        </button>
      </div>
    </>
  );
}

export default Pagination;
