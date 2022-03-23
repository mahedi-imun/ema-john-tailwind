import React from 'react';
const Cart = ({ cart }) => {
    let price = 0;
    let shipping = 0
    let tax = 0
    let grandTotal = 0
    for (let product of cart) {
        price = price + product.price;
        shipping = shipping + product.shipping;
        let newTax = (price * 0.1).toFixed(2);
        tax = parseFloat(newTax)
        grandTotal = price + shipping + tax;
    }
    return (
        <div className=' sticky top-0 
            bg-orange-200  h-3/4  w-44 rounded-lg'>
            <h3 className='text-center text-xl
                 text-black font-bold'>Order Summary</h3>
            <div className='text-left p-3 font-semibold leading-8'>
                <p><span>selected items:{cart.length}</span></p>
                <p><span>Total Price: ${price}</span></p>
                <p><span>Shipping Cost: ${shipping}</span></p>
                <p><span>Tax:$:{tax}</span></p>
                <p className='mt-5 font-bold'>Grand Total:${grandTotal}</p>
                <button className="h-8 px-7 text-white transition-colors duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-600 mb-5 mt-5">Clear Cart </button>

                <button className="h-8 px-4 text-white transition-colors duration-150 bg-red-500 rounded-full focus:shadow-outline hover:bg-red-600">Review Order</button>
            </div>
        </div>
    );
};

export default Cart;