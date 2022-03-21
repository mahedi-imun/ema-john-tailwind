import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';


const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='flex flex-raw  relative flex-wrap '>
            <div className='basis-4/5 grid grid-cols-3 gap-y-5 gap-x-5 ml-10
             
            '>
                {
                    products.map(product => <Product
                        product={product}
                        key={product.id}
                    ></Product>)
                }
            </div>
            <div className=' fixed top-30 right-5 bg-orange-200  h-3/4  w-44 rounded-lg'>
                <h3 className='text-center text-xl text-black '>Order Summary</h3>

            </div>

        </div>
    );
};

export default Shop;