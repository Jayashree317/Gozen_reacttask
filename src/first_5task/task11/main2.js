import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useHistory } from 'react-router-dom';
import ErrorFallback from './main1'; // Ensure the path is correct
import ChildComponent from './main3'; // Import the simulated error component

function App({ children }) {
  const history = useHistory();

  const handleErrorReset = () => {
    history.push("/");
  };

  const handleError = (error, errorInfo) => {
    console.error("Error logged:", error);
    console.error("Error info:", errorInfo);
  };

  return (
    <ErrorBoundary 
      FallbackComponent={ErrorFallback} 
      onReset={handleErrorReset}
      onError={handleError}
    >
      <ChildComponent /> {/* Simulating an error here */}
      {children}
    </ErrorBoundary>
  );
}

export default App;
