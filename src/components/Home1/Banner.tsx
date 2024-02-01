import Link from "next/link";
import Image from "next/image"
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Banner = () => {
    return (
        <>
            <div className="banner-block md:pt-20 pt-12">
                <div className="container">
                    <div className="flex max-lg:flex-col-reverse items-center justify-between gap-14 gap-y-8">
                        <div className="left lg:w-1/2 md:pr-10">
                            <div className="tag bg-orange text-white px-2.5 py-1.5 inline-block text-caption-uppercase rounded-full">100% organic food</div>
                            <div className="text-heading mt-3">Help your pet maintain a healthier</div>
                            <div className="text-title text-secondary mt-3">We understand the importance of your pet{String.raw`'s`} well-being, and our products are designed to support their overall health and vitality. Explore our range of natural and high-quality items to ensure your pet thrives and enjoys a happy, active life by your side.</div>
                            <div className="list-feature flex sm:gap-16 max-[370px]:gap-3 gap-5 flex-wrap gap-y-3 mt-4">
                                <div className="left">
                                    <div className="item flex items-center gap-2">
                                        <Icon.PawPrint weight="fill" className="" />
                                        <div className="text-button">Personalize Care</div>
                                    </div>
                                    <div className="item flex items-center gap-2 mt-3">
                                        <Icon.PawPrint weight="fill" className="" />
                                        <div className="text-button">Quick Delivery</div>
                                    </div>
                                    <div className="item flex items-center gap-2 mt-3">
                                        <Icon.PawPrint weight="fill" className="" />
                                        <div className="text-button">Lowest Price</div>
                                    </div>
                                </div>
                                <div className="right">
                                    <div className="item flex items-center gap-2">
                                        <Icon.PawPrint weight="fill" className="" />
                                        <div className="text-button">24/7 Support</div>
                                    </div>
                                    <div className="item flex items-center gap-2 mt-3">
                                        <Icon.PawPrint weight="fill" className="" />
                                        <div className="text-button">Pet Tax Facility</div>
                                    </div>
                                    <div className="item flex items-center gap-2 mt-3">
                                        <Icon.PawPrint weight="fill" className="" />
                                        <div className="text-button">Money Back Guarantee</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="right lg:w-[42%] md:w-1/2 sm:w-[60%] w-[80%]">
                            <Image
                                src={'/images/other/banner-home1.png'}
                                width={1000}
                                height={900}
                                alt="img"
                                priority={true}
                                className="w-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Banner