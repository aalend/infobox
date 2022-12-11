function SearchBar() {
  return (
    <section>
      <div className='container mx-auto px-4'>
        <div>
          <form action=''>
            <div className='flex flex-col gap-2 sm:flex-row sm:gap-4'>
              <div className='flex-grow'>
                <label htmlFor='query' className='sr-only'>
                  Search for movies or tv series
                </label>
                <input
                  type='text'
                  className='w-full rounded-md border py-2 px-4'
                  name='query'
                  id='query'
                  placeholder='Search for movies or tv series'
                />
              </div>
              <button type='submit' className='rounded-md border py-2 px-4'>
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default SearchBar;
