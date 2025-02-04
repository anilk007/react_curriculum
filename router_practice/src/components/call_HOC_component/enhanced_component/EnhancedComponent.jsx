import WithLoading from "../../HOC/withLoading/WithLoading.jsx";

// Sample Component
const DataComponent = ({ data }) => {
  return <div>Data: {data}</div>;
};

// Wrapping DataComponent with the HOC
const EnhancedComponent = WithLoading(DataComponent);

export default EnhancedComponent; // ✅ Now the export is correct
