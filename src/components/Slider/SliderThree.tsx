'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderThree = () => {
    return (
        <>
            <div className="slider-block style-two xl:h-[600px] lg:h-[500px] md:h-[440px] h-[320px] w-full">
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
                                        src="/images/slider/bg-slider3-1.png"
                                        width={4000}
                                        height={3000}
                                        alt='bg-slider'
                                        priority={true}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content md:w-[50%] w-2/3 max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading text-white">Made with love</div>
                                            <div className="text-slider text-white mt-3">Fermented Salted Vegetables & Fruits</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="sub-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg-slider3-2.png"
                                        width={4000}
                                        height={3000}
                                        alt='bg-slider'
                                        priority={true}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content md:w-[50%] w-2/3 max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading">Made with love</div>
                                            <div className="text-slider mt-3">Fermented Salted Vegetables & Fruits</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6 ">Shop Now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="sub-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10">
                                    <Image
                                        src="/images/slider/bg-slider3-3.png"
                                        width={4000}
                                        height={3000}
                                        alt='bg-slider'
                                        priority={true}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content md:w-[40%] w-2/3  max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading">Made with love</div>
                                            <div className="text-slider mt-3">Fermented Salted Vegetables & Fruits</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6 ">Shop Now</Link>
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

export default SliderThree