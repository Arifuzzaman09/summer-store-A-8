import Banner from "@/Components/Banner";
import CareTips from "@/Components/CareTips";
import PopularProducts from "@/Components/PopularProducts";




export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <PopularProducts></PopularProducts>
    <CareTips></CareTips>
   </div>
  );
}
