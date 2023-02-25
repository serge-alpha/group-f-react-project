import React from 'react';
import CartIterm from './CartIterm';



const Cart = (props) => {
    const { items, itemdelete } = props;
    
    const Items = items.map((item) => { return <CartIterm item={item} key={item.id} Delete={itemdelete} /> })
    return (
        <section className="cart">
            <h2>Cart({items.length})</h2>
            {items.length === 0 ? <h1>Card is empty</h1> :  Items }
        </section>
    );
};



export default Cart;
