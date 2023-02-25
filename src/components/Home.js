import React from 'react';
import Header from './Header';
import Slider from './Slider';
import Products from './Products';


const Home = (data) => {
    return (
        <div>
            <Header />
            <Slider />
            {data.isLoading && <p>the products are loading...</p>}
            {data.error ? <p>{data.error}</p> : <Products products={data.products} cartItem={data.cartItem} />}
            
        </div>
        )
}

export default Home;