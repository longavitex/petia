import TopNavThree from "@/components/Headers/TopNav/TopNavThree"
import MenuThree from "@/components/Headers/Menu/MenuThree"
import SliderThree from "@/components/Slider/SliderThree"
import Banner from "@/components/Home3/Banner"
import productData from '@/data/Product.json'
import ArrivalProduct from "@/components/Home3/ArrivalProduct"
import Deal from "@/components/Home3/Deal"
import FeatureProduct from "@/components/Home3/FeatureProduct"
import Category from "@/components/Home3/Category"
import dataReview from "@/data/Review.json"
import ReviewSection from "@/components/Home3/ReviewSection"
import BestSeller from "@/components/Home3/BestSeller"
import Footer from "@/components/Footer/Footer"
import CountdownTimeType from "@/type/CountdownType"
import { countdownTime } from "@/components/Other/countdownTime"

const Home3 = () => {
    const serverTimeLeft: CountdownTimeType = countdownTime();

    return (
        <>
            <TopNavThree />
            <MenuThree />
            <SliderThree />
            <Banner />
            <ArrivalProduct data={productData} limit={6} />
            <Deal serverTimeLeft={serverTimeLeft} />
            <FeatureProduct data={productData} />
            <Category />
            <ReviewSection data={dataReview} limit={5} />
            <BestSeller data={productData} />
            <Footer borderTop={true} />
        </>
    )
}

export default Home3