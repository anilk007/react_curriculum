import { useParams } from 'react-router-dom';

function Cocktail() {
  const { id } = useParams();

  if (!id) {
    return <h2>Error: Missing Cocktail ID</h2>;
  }

  return <h2>Cocktail Details for ID: {id}</h2>;
}

export default Cocktail;