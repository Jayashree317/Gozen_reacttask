import React from 'react';
import { ListGroup, Row, Col, Image } from 'react-bootstrap';
import { Button, TextField } from '@mui/material';

const CartItem = ({ item, onUpdateQuantity, onRemoveItem, onEditItem }) => {
    return (
        <ListGroup.Item>
            <Row>
                <Col xs={2}>
                    <Image src={item.image} thumbnail />
                </Col>
                <Col xs={3}>{item.name}</Col>
                <Col xs={2}>${item.price.toFixed(2)}</Col>
                <Col xs={2}>
                    <TextField
                        type="number"
                        value={item.quantity}
                        onChange={(e) => onUpdateQuantity(parseInt(e.target.value))}
                        variant="outlined"
                        size="small"
                    />
                </Col>
                <Col xs={3}>
                    <Button variant="contained" color="secondary" onClick={onRemoveItem}>Remove</Button>&nbsp;&nbsp;
                    <Button variant="contained" color="primary" onClick={onEditItem}>Edit</Button>
                </Col>
            </Row>
        </ListGroup.Item>
    );
};

export default CartItem;