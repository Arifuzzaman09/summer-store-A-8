import React from 'react';

const ProductsDetails = async( {params}) => {
    const {id} = await params;
    console.log(id)
    return (
        <div>
            
        </div>
    );
};

export default ProductsDetails;