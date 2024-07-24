import React from 'react';

function ErrorFallback({ error, resetErrorBoundary }) {
  console.log("ErrorFallback received error:", error); // Debugging step

  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error ? error.message : 'Unknown error'}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

export default ErrorFallback;
