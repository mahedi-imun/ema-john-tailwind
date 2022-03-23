import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';

import Cart from '../Cart/Cart';
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    useEffect(() => {
        const storedCart = getStoredCart()
        const savedCart = []
        for (let id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity
                savedCart.push(addedProduct)
            }
        };
        setCart(savedCart)

    }, [products])
    const [cart, setCart] = useState([])
    const cartHandler = (product) => {
        const newCart = [...cart, product];
        setCart(newCart)
        addToDb(product.id)
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