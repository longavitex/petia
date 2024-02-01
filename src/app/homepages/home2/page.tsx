import TopNavTwo from "@/components/Headers/TopNav/TopNavTwo"
import MenuTwo from "@/components/Headers/Menu/MenuTwo"
import SliderTwo from "@/components/Slider/SliderTwo"
import productData from '@/data/Product.json'
import ArrivalOrganic from "@/components/Home2/ArrivalOrganic"
import Deal from "@/components/Home2/Deal"
import WhyChooseUs from "@/components/Home2/WhyChooseUs"
import Banner from "@/components/Home2/Banner"
import FeatureProduct from "@/components/Home2/FeatureProduct"
import dataBlog from "@/data/Blog.json"
import BlogSection from "@/components/Home2/BlogSection"
import dataReview from "@/data/Review.json"
import ReviewSection from "@/components/Home2/ReviewSection"
import Instagram from "@/components/Home2/Instagram"
import Footer from "@/components/Footer/Footer"
import CountdownTimeType from "@/type/CountdownType"
import { countdownTime } from "@/components/Other/countdownTime"

const Home2 = () => {
    const serverTimeLeft: CountdownTimeType = countdownTime();
    
    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <SliderTwo />
            <Banner />
            <ArrivalOrganic data={productData} limit={6} />
            <Deal serverTimeLeft={serverTimeLeft} />
            <WhyChooseUs />
            <FeatureProduct data={productData} limit={5} />
            <BlogSection data={dataBlog} limit={9} />
            <ReviewSection data={dataReview} limit={4} />
            <Instagram />
            <Footer borderTop={false} />
        </>
    )
}

export default Home2