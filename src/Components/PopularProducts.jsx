import React from 'react';
import ProductCarts from './ProductCarts';



const PopularProducts = async () => {

     const res = await fetch('https://summer-store-a-8.vercel.app/data.json')
    const products = await res.json()
    const popularProducts = products.slice(0,3)


    return (
        <div className= ' w-10/12 mx-auto my-5'>
            <h2 className='text-3xl font-bold text-center my-10'>Popular Products</h2>
            <div className='grid lg:grid-cols-3 gap-3'>
                {
                    popularProducts.map(product=> <ProductCarts key={product.id} product={product}>
                        <h2>{product.name}</h2>
                         </ProductCarts> )
                }
            </div>
            
        </div>
    );
};

export default PopularProducts;