'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderOne = () => {
    return (
        <>
            <div className="slider-block xl:h-[680px] lg:h-[560px] md:h-[440px] h-[320px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative dots-white'
                        autoplay={{
                            delay: 5000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="sub-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg1-1.png"
                                        width={4000}
                                        height={4000}
                                        alt='bg-slider'
                                        priority={true}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center justify-center relative">
                                        <div className="text-content flex flex-col items-center w-full max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading text-white text-center">
                                                <div className="relative overflow-hidden">
                                                    <span className="block relative overflow-hidden">Find Your Furry Friend</span>
                                                    <span className="block absolute top-0 left-0 w-full h-full">Find Your Furry Friend</span>
                                                </div>
                                            </div>
                                            <div className="text-slider text-white text-center mt-3">
                                                <div className="relative overflow-hidden">
                                                    <span className="block relative overflow-hidden">Explore Our Pet</span>
                                                    <span className="block absolute top-0 left-0 w-full h-full">Explore Our Pet</span>
                                                </div>
                                                <div className="relative overflow-hidden">
                                                    <span className="block relative overflow-hidden">Adoption Selection</span>
                                                    <span className="block absolute top-0 left-0 w-full h-full">Adoption Selection</span>
                                                </div>
                                            </div>
                                            <div className="button-block flex items-center justify-center relative overflow-hidden md:mt-8 mt-6">
                                                <Link href='/shop/shop-grid-fullwidth' className="button-main ">Shop Now</Link>
                                                <Link href='/shop/shop-grid-fullwidth' className="button-main absolute">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="sub-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg1-2.png"
                                        width={4000}
                                        height={4000}
                                        alt='bg-slider'
                                        priority={true}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center justify-center relative">
                                        <div className="text-content flex flex-col items-center w-full max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading text-white text-center">
                                                <div className="relative overflow-hidden">
                                                    <span className="block relative overflow-hidden">Everything Pet Needs</span>
                                                    <span className="block absolute top-0 left-0 w-full h-full">Everything Pet Needs</span>
                                                </div>
                                            </div>
                                            <div className="text-slider text-white text-center mt-3">
                                                <div className="relative overflow-hidden">
                                                    <span className="block relative overflow-hidden">Discover Our Extensive</span>
                                                    <span className="block absolute top-0 left-0 w-full h-full">Discover Our Extensive</span>
                                                </div>
                                                <div className="relative overflow-hidden">
                                                    <span className="block relative overflow-hidden">Pet Supplies</span>
                                                    <span className="block absolute top-0 left-0 w-full h-full">Pet Supplies</span>
                                                </div>
                                            </div>
                                            <div className="button-block flex items-center justify-center relative overflow-hidden md:mt-8 mt-6">
                                                <Link href='/shop/shop-grid-fullwidth' className="button-main ">Shop Now</Link>
                                                <Link href='/shop/shop-grid-fullwidth' className="button-main absolute">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="sub-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg1-3.png"
                                        width={4000}
                                        height={4000}
                                        alt='bg-slider'
                                        priority={true}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center justify-center relative">
                                        <div className="text-content flex flex-col items-center w-full max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading text-white text-center">
                                                <div className="relative overflow-hidden">
                                                    <span className="block relative overflow-hidden">Pet Health & Wellness</span>
                                                    <span className="block absolute top-0 left-0 w-full h-full">Pet Health & Wellness</span>
                                                </div>
                                            </div>
                                            <div className="text-slider text-white text-center mt-3">
                                                <div className="relative overflow-hidden">
                                                    <span className="block relative overflow-hidden">Discover Health &</span>
                                                    <span className="block absolute top-0 left-0 w-full h-full">Discover Health &</span>
                                                </div>
                                                <div className="relative overflow-hidden">
                                                    <span className="block relative overflow-hidden">Wellness Solutions</span>
                                                    <span className="block absolute top-0 left-0 w-full h-full">Wellness Solutions</span>
                                                </div>
                                            </div>
                                            <div className="button-block flex items-center justify-center relative overflow-hidden md:mt-8 mt-6">
                                                <Link href='/shop/shop-grid-fullwidth' className="button-main ">Shop Now</Link>
                                                <Link href='/shop/shop-grid-fullwidth' className="button-main absolute">Shop Now</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default SliderOne