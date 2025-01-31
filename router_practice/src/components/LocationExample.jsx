import { useLocation } from 'react-router-dom';

const LocationExample = () => {
  const location = useLocation();

  return (
    <div>
      <p>Current URL: {location.pathname}</p>
      <p>Search query: {location.search}</p>
      <p>Hash: {location.hash}</p>
      <p>State: {JSON.stringify(location.state)}</p>
    </div>
  );
};

export default LocationExample;