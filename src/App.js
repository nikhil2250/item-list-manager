import React, { useState } from 'react';

function ItemListManager() {
  const [items, setItems] = useState([]); // State to hold the list of items
  const [inputValue, setInputValue] = useState(''); // State to hold the input field value

  // Function to handle adding an item to the list
  const handleAddItem = () => {
    if (inputValue.trim()) { // Check if input is not empty
      setItems([...items, inputValue]); // Add the new item to the list
      setInputValue(''); // Clear the input field
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Item List Manager</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update inputValue as user types
        placeholder="Enter a new item"
        style={{ padding: '8px', marginRight: '10px', width: '200px' }}
      />
      <button
        onClick={handleAddItem}
        style={{
          padding: '8px 12px',
          backgroundColor: '#007BFF',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Add Item
      </button>
      <ul style={{ marginTop: '20px', listStyleType: 'none', padding: '0' }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: '8px',
              borderBottom: '1px solid #ddd',
              backgroundColor: '#f9f9f9',
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemListManager;
