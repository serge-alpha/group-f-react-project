import React, { useState } from 'react';
import CartIterm from './CartIterm';
import { Link } from 'react-router-dom';


const Cart = (props) => {
    const { items, itemdelete, emptycart } = props;
    let sum = 0;
    items.map((item) => { return sum += item.price });
    const [pay, setPay] = useState( 'Card is empty');
    const Payed = () => {
        setPay('Purchase Completed ');
        emptycart();
    }
    const Items = items.map((item) => { return <CartIterm item={item} key={item.id} Delete={itemdelete} /> })
    return (
        <section className="cart">
            <h1>Cart({items.length})</h1>
            {items.length === 0 ? <h1>{pay}</h1> : Items}
            <h2>Total: {sum}</h2>
            {items.length === 0 ? <Link to='/'><button className="add__btn">Add Items</button></Link> : <button className="pay__btn" onClick={Payed}>Pay Now</button>}
        </section>
    );
};



export default Cart;
