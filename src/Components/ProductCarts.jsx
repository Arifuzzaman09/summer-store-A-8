import { Button, Card } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { CiStar } from 'react-icons/ci';


const ProductCarts = ({ product }) => {
   
    return (
        <div >
            <Card className='border'>
                <img src={product.image} alt="cartimg" />
                <h2>{product.name}</h2>
                <div className='flex justify-between'>
                    <p>${product.price}</p>
                    <p className='flex items-center gap-2'><CiStar />{product.rating}</p>
                </div>
               <Link href={`/${product.id}`}> <Button  className="w-full bg-orange-400">View Details</Button></Link>
            </Card>
        </div>
    );
};

export default ProductCarts;