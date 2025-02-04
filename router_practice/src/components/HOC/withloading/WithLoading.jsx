// Higher-Order Component to add loading functionality
const WithLoading = (WrappedComponent) => {
    return function WithLoadingComponent({ isLoading, ...props }) {
        if (isLoading) {
            return <div>Loading...</div>;
        }
        return <WrappedComponent {...props} />;
    };
};

export default WithLoading; // ✅ Correct export
