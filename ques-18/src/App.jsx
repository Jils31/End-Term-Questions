import React, { useState, useCallback } from 'react';

// ItemList component
function ItemList({ items, onSelect }) {
  const handleSelect = useCallback(
    (id) => () => {
      onSelect(id);
    },
    [onSelect]
  );

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.name}
          <button onClick={handleSelect(item.id)}>Select</button>
        </li>
      ))}
    </ul>
  );
}

// Parent App component
function App() {
  const [selectedId, setSelectedId] = useState(null);

  const items = [
    { id: 1, name: '🚀 Rocket' },
    { id: 2, name: '🌟 Star' },
    { id: 3, name: '🌍 Earth' },
  ];

  const handleSelect = useCallback((id) => {
    setSelectedId(id);
  }, []);

  return (
    <div>
      <h1>Select an Item</h1>
      <ItemList items={items} onSelect={handleSelect} />
      {selectedId && (
        <p>
          <strong>Selected ID:</strong> {selectedId}
        </p>
      )}
    </div>
  );
}

export default App;
