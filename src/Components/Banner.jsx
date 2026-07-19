import { Button } from '@heroui/react';
import React from 'react';
import { FaArrowRight, FaArrowRightArrowLeft, FaHand } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className="w-10/12 mx-auto ">
            <div className="w-full h-[500px] bg-cover bg-center bg-no-repeat rounded-3xl "
                style={
                    {
                        backgroundImage: "url('https://i.ibb.co.com/LX731Bp1/hero.png')",

                    }
                } >

                <div className="space-y-4">
                   

                    <div className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-orange-500 to-red-500 px-6 py-3 text-white shadow-xl mt-20 ml-10">
                        <span className="bg-white text-red-500 px-3 py-1 rounded-full text-sm font-bold">
                            🔥 HOT
                        </span>

                        <p className="font-semibold text-lg">
                            SUMMER SALE • UP TO
                            <span className="font-extrabold text-yellow-300 ml-2">
                                50% OFF
                            </span>
                        </p>
                    </div>

                    <h2 className="ml-10 pt-  text-orange-500 text-2xl font-bold flex gap-2">Hello Summer <FaHand />
                    </h2>



                    <h2 className="ml-10  text-5xl font-extrabold ">Everythink You Need <br /> for a <span className="text-green-600">Perfact Summer</span> </h2>
                    <p className="ml-10 text-gray-800 ">From teandy Outfit to beach accessorise,<br />  We have everything to make your summer special</p>
                    <div className='flex items-center gap-4 ml-10'>
                        <Button className='bg-orange-500 text-white p-3 rounded-md flex items-center gap-2'>Shop Now <FaArrowRight /></Button>
                        <Button variant="outline" className=" rounded-md border border-2 border-green-500">Explore Collecton </Button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Banner;