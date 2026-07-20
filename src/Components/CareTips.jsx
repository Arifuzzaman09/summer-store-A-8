import Image from 'next/image';
import Img from '@/assets/drink.jpg'
import Img2 from '@/assets/fruts.jpg'
import Img3 from '@/assets/sunscreen.jpg'
import { Button, Card } from '@heroui/react';



const CareTips = () => {
    return (

        <div className='w-10/12 mx-auto'>

            <h2 className='text-3xl font-bold text-center my-10  items-center'>Summer Care Tips  </h2>

            <div className='grid lg:grid-cols-3 gap-2.5 '>
                <Card>
                    <Image src={Img} alt="logo" width={300} height={200} className='mx-auto rounded-md'></Image>
                    <p>Drink at least 2-3 liters of water every day to stay refreshed and prevent dehydration.</p>
                    <Button variant='outline' className="w-full">Tips Read...</Button>
                </Card>
                <Card>
                    <Image src={Img2} alt="logo" width={300} height={200} className='mx-auto rounded-md'></Image>
                    <p>Enjoy seasonal fruits to stay healthy and hydrated.</p>
                    <Button variant='outline' className="w-full mt-auto">Tips Read...</Button>
                </Card>
                <Card>
                    <Image src={Img3} alt="logo" width={300} height={200} className='mx-auto rounded-md'></Image>
                    <p>
                        Apply SPF 30+ sunscreen 15-20 minutes before going outside to protect your skin.</p>
                    <Button variant='outline' className="w-full mt-auto">Tips Read...</Button>
                </Card>
            </div>
        </div>
    );
};

export default CareTips;