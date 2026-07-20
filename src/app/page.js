import Banner from "@/Components/Banner";
import CareTips from "@/Components/CareTips";
import PopularProducts from "@/Components/PopularProducts";
import TopBrands from "@/Components/TopBrands";




export default function Home() {
  return (
   <div>
    <Banner></Banner>
    <PopularProducts></PopularProducts>
    <CareTips></CareTips>
    <TopBrands></TopBrands>
   </div>
  );
}
