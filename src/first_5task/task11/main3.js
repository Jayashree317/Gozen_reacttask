import React from 'react';

function ChildComponent() {
  // Simulate an error to test error boundary
  throw new Error("Simulated error!");
  
  return <div>Child Component</div>;
}

export default ChildComponent;
