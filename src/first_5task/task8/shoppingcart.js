import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { TextField, Button, Snackbar } from "@mui/material";
import CartItemList from "./cartlist";
import { Helmet } from "react-helmet";

const ShoppingCart = () => {
  const [items, setItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemImage, setNewItemImage] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [error, setError] = useState("");

  const handleNameChange = (e) => {
    setNewItemName(e.target.value);
  };

  const handlePriceChange = (e) => {
    setNewItemPrice(e.target.value);
  };

  const handleImageChange = (e) => {
    setNewItemImage(e.target.value);
  };

  const handleAddItem = () => {
    if (!newItemName || !newItemPrice || !newItemImage) {
      setError("All fields are required.");
      return;
    }
    setItems([
      ...items,
      {
        name: newItemName,
        price: parseFloat(newItemPrice),
        image: newItemImage,
        quantity: 1,
      },
    ]);
    setNewItemName("");
    setNewItemPrice("");
    setNewItemImage("");
  };

  const handleEditItem = (index) => {
    const item = items[index];
    setNewItemName(item.name);
    setNewItemPrice(item.price);
    setNewItemImage(item.image);
    setEditingIndex(index);
  };

  const handleSaveItem = () => {
    if (!newItemName || !newItemPrice || !newItemImage) {
      setError("All fields are required.");
      return;
    }
    const updatedItems = items.map((item, index) =>
      index === editingIndex
        ? {
            ...item,
            name: newItemName,
            price: parseFloat(newItemPrice),
            image: newItemImage,
          }
        : item
    );
    setItems(updatedItems);
    setNewItemName("");
    setNewItemPrice("");
    setNewItemImage("");
    setEditingIndex(null);
  };

  const handleUpdateQuantity = (index, quantity) => {
    const updatedItems = items.map((item, i) =>
      i === index ? { ...item, quantity } : item
    );
    setItems(updatedItems);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  const handleCloseSnackbar = () => {
    setError("");
  };

  return (
    <Container>
      <Helmet>
        <title>React Task-8</title>
        <meta name="description" />
      </Helmet>
      <h1 className="my-4 text-center" style={{ color: "Highlight" }}>
        Shopping Cart
      </h1>
      <Row className="mb-4">
        <Col>
          <TextField
            label="Item Name"
            variant="outlined"
            fullWidth
            value={newItemName}
            onChange={handleNameChange}
          />
        </Col>
        <Col>
          <TextField
            label="Item Price"
            variant="outlined"
            type="number"
            fullWidth
            value={newItemPrice}
            onChange={handlePriceChange}
            // style={{backgroundColor:"transparent"}}
          />
        </Col>
        <Col>
          <TextField
            label="Image URL"
            variant="outlined"
            fullWidth
            value={newItemImage}
            onChange={handleImageChange}
          />
        </Col>
        <Col>
          {editingIndex !== null ? (
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveItem}
            >
              Save Item
            </Button>
          ) : (
            <Button
              variant="contained"
              color="primary"
              className="mt-2"
              onClick={handleAddItem}
            >
              Add Item
            </Button>
          )}
        </Col>
      </Row>
      <CartItemList
        items={items}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onEditItem={handleEditItem}
      />
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={error}
      />

      <style>{`body {
  background-image: linear-gradient(
    to top,
    #dea2c4,
    #d8aad2,
    #d0b2dd,
    #c8bae6,
    #c0c2ed,
    #b8caf3,
    #b0d1f8,
    #aad8fa,
    #a1e1fd,
    #9ce9fc,
    #9bf0f8,
    #a0f7f1
  );
  height: 100vh;
}`}</style>
    </Container>
  );
};

export default ShoppingCart;
