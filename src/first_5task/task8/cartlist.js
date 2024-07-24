import React from 'react';
import { ListGroup } from 'react-bootstrap';
import CartItem from './cartitem';

const CartItemList = ({ items, onUpdateQuantity, onRemoveItem, onEditItem }) => {
    return (
        <ListGroup>
            {items.map((item, index) => (
                <CartItem
                    key={index}
                    item={item}
                    onUpdateQuantity={(quantity) => onUpdateQuantity(index, quantity)}
                    onRemoveItem={() => onRemoveItem(index)}
                    onEditItem={() => onEditItem(index)}
                />
            ))}
        </ListGroup>
    );
};

export default CartItemList;