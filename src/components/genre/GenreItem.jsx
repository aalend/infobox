import { Link } from 'react-router-dom';

function GenreItem({ genres }) {
  return (
    <>
      {genres?.map(item => {
        return (
          <li className='rounded-md border py-1 px-3 shadow-md' key={item.id}>
            <Link to={`genres/${item.id}`}>{item.name}</Link>
          </li>
        );
      })}
    </>
  );
}

export default GenreItem;
