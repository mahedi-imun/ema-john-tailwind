import React, { useEffect, useState } from 'react';
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
        totalPrice(product.price)
    };
    const [price, setPrice] = useState([0])
    const [shipping, setShipping] = useState([0])
    const [tax, setTax] = useState([0])
    const totalPrice = (prices) => {
        const newPrice = parseInt(price + prices);
        setPrice(newPrice)
        shippingCost()
        totalTax(price)
    };

    const shippingCost = () => {
        setShipping(parseInt(20))
    }
    const totalTax = (price) => {
        const newTax = Math.round(price * (5 / 100))
        setTax(newTax)
    };

    return (
        <div className='flex flex-raw  relative flex-wrap '>
            <div className='basis-4/5 grid grid-cols-3 
            gap-y-5 gap-x-5 ml-10 '>
                {
                    products.map(product => <Product
                        cartHandler={cartHandler}
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className=' fixed top-30 right-5 
            bg-orange-200  h-3/4  w-44 rounded-lg'>
                <h3 className='text-center text-xl
                 text-black font-bold'>Order Summary</h3>
                <div className='text-left p-4 font-semibold leading-8'>
                    <p><span>selected items: {cart.length}</span></p>
                    <p><span>Total Price: ${price}:</span></p>
                    <p><span>Shipping Cost: ${shipping}</span></p>
                    <p><span>Tax:${tax}:</span></p>
                    <p className='mt-5 font-bold'>Grand Total:$:</p>
                    <button className="h-8 px-7 text-white transition-colors duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-600 mb-5 mt-5">Clear Cart </button>

                    <button className="h-8 px-4 text-white transition-colors duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-600">Review Order</button>
                </div>
            </div>

        </div>
    );
};

export default Shop;