function Grid({ children }) {
  return (
    <section>
      <div className='mt-4 grid grid-cols-1 gap-y-12 gap-x-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {children}
      </div>
    </section>
  );
}

export default Grid;
