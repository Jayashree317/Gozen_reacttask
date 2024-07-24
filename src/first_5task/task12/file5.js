// src/ItemList.js
import React, { useState, useEffect, useContext } from 'react';
import { ListGroup, Button, Form, Alert } from 'react-bootstrap';
import axios from 'axios';
import { AuthContext } from './file1'; // Import the AuthContext

const ItemList = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [error, setError] = useState(null);
  const { auth } = useContext(AuthContext); // Get auth context to use the token

  useEffect(() => {
    // Fetch items from the server when the component mounts
    const fetchItems = async () => {
      try {
        const response = await axios.get('/api/items');
        setItems(response.data);
      } catch (err) {
        setError('Failed to fetch items');
      }
    };

    fetchItems();
  }, []);

  const addItem = async () => {
    const tempId = Date.now();
    const newItemObj = { id: tempId, text: newItem };

    // Update UI optimistically
    setItems([...items, newItemObj]);
    setNewItem('');

    try {
      const response = await axios.post('/api/items', newItemObj, {
        headers: { 'Authorization': auth.token } // Add token to headers
      });
      const savedItem = response.data;

      // Update the item with the actual ID from the server
      setItems((prevItems) =>
        prevItems.map((item) =>
          item.id === tempId ? { ...item, id: savedItem.id } : item
        )
      );
    } catch (err) {
      // Revert UI update if server request fails
      setItems((prevItems) => prevItems.filter((item) => item.id !== tempId));
      setError('Failed to add item. Please try again.');
    }
  };

  return (
    <div>
      {error && <Alert variant="danger">{error}</Alert>}
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          addItem();
        }}
      >
        <Form.Group controlId="formNewItem">
          <Form.Label>New Item</Form.Label>
          <Form.Control
            type="text"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit">Add Item</Button>
      </Form>
      <ListGroup className="mt-3">
        {items.map((item) => (
          <ListGroup.Item key={item.id}>{item.text}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default ItemList;
