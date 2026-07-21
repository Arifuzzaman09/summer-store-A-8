import { Button, Chip } from "@heroui/react";

import { FaRegStarHalfStroke, FaStar } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";



const ProductsDetails = async ({ params }) => {
    const { id } = await params;
    const res = await fetch('https://summer-store-a-8.vercel.app/data.json')
    const products = await res.json()
    const product = products.find(p => p.id == id)

    return (
        <div className="w-10/12 mx-auto my-6">
            <h2 className="text-2xl font-semibold mb-6"> Products Details</h2>
            <div className="sm:flex-cols lg:flex justify-between gap-3  ">
                <div>
                    <img src={product.image} alt="cartimg" width={500} height={700} className="rounded-md" />
                </div>
                <div>
                    <h2 className="text-2xl font-bold my-1">{product.name}</h2>

                    <p className="flex items-center  gap-2 mb-1"><FaStar /><FaStar /><FaStar /><FaStar /> <FaRegStarHalfStroke />

                        {product.rating}</p>
                    <h2 className="font-bold"> Brand: <span className="text-green-300"> {product.brand}</span></h2>
                    <div className="flex justify-between gap-2 mt-2">
                        <p className="text-2xl font-bold ">${product.price}</p>
                        <Chip color="success">
                            In stock
                        </Chip>
                    </div>
                    <p className="text-gray-400 mt-5">{product.description}</p>

                    <div className="flex justify-between gap-2 mt-5">
                        <Button className="w-5/12">Buy Now</Button>
                        <Button className="w-5/12 bg-orange-500 text-black"><FiShoppingCart />
                            Add to Cart</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsDetails;