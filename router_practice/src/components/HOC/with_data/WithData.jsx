// components/withData.jsx
import React, { useState, useEffect } from 'react';

const withData = (WrappedComponent, dataUrl) => {
  return (props) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(dataUrl);
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const json = await response.json();
          setData(json);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };

      fetchData();
    }, [dataUrl]); // Fetch data only when dataUrl changes

    return (
      <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error.message}</div>}
        {data && <WrappedComponent {...props} data={data} />} {/* Pass data as a prop */}
      </div>
    );
  };
};

export default withData;