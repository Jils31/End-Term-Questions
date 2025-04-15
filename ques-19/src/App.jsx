import React, { useState, useEffect, useRef } from 'react';

function usePrevious(value) {
  const ref = useRef(); 

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current; 
}

function App() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <h2>Current: {count}</h2>
      <h3>Previous: {prevCount}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default App;
