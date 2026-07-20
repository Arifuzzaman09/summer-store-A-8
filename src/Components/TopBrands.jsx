import React from 'react';
import Marquee from 'react-fast-marquee';
import Img1 from '@/assets/adidas.png'
import Img2 from '@/assets/banana.png'
import Img3 from '@/assets/columbia.png'
import Img4 from '@/assets/crocs.png'
import Img5 from '@/assets/havaianas.png'
import Img6 from '@/assets/nevea.png'
import Img7 from '@/assets/nike.png'
import Img8 from '@/assets/oakley.png'
import Img9 from '@/assets/puma.png'
import Img10 from '@/assets/ray-ban.png'

import Image from 'next/image';

const TopBrands = () => {
    return (
        <div className='mt-10 '>

            <h2 className='text-3xl font-bold text-center space-x-6 '>Top Brands</h2>
            <Marquee className=' my-6'>
                <Image src={Img1} alt='Brands'></Image>
                <Image src={Img2} alt='Brands'></Image>
                <Image src={Img3} alt='Brands'></Image>
                <Image src={Img4} alt='Brands'></Image>
                <Image src={Img5} alt='Brands'></Image>
                <Image src={Img6} alt='Brands'></Image>
                <Image src={Img7} alt='Brands'></Image>
                <Image src={Img8} alt='Brands'></Image>
                <Image src={Img9} alt='Brands'></Image>
                <Image src={Img10} alt='Brands'></Image>
            </Marquee>
        </div>
    );
};

export default TopBrands;