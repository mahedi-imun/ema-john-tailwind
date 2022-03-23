import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const [cart, setCart] = useState([])
    const cartHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
    };
    
    return (
        <div className='flex flex-raw  relative flex-wrap '>
            <div className='basis-4/5 grid grid-cols-3 
            gap-5 m-7'>
                {
                    products.map(product => <Product
                        cartHandler={cartHandler}
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className=''>
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;