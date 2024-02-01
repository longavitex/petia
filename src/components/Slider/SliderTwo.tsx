'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderTwo = () => {
    return (
        <>
            <div className="slider-block style-two xl:h-[680px] lg:h-[560px] md:h-[440px] h-[320px] w-full">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative'
                        autoplay={{
                            delay: 5000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="slider-bg-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10 bg-[#fdefef]">
                                    <Image
                                        src="/images/slider/bg-slider2.png"
                                        width={2000}
                                        height={2000}
                                        alt='bg-slider'
                                        priority={true}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content w-[50%] max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading">Sale Off 50%</div>
                                            <div className="text-slider mt-3">Exotic Twists for Your Palate</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6 ">Shop Now</Link>
                                        </div>
                                        <div className="sub-img absolute lg:w-[45%] md:w-[45%] w-[55%] 2xl:-right-[60px] md:right-4 -right-4 sm:bottom-0 bottom-16 z-[-1]">
                                            <Image
                                                src={'/images/slider/subimg2-2.png'}
                                                width={1000}
                                                height={400}
                                                alt='bg-slider'
                                                priority={true}
                                                className=''
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="slider-bg-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10 bg-[#e5ffdb]">
                                    <Image
                                        src="/images/slider/bg-slider2.png"
                                        width={2000}
                                        height={2000}
                                        alt='bg-slider'
                                        priority={true}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content md:w-[40%]  max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading">Sale Off 50%</div>
                                            <div className="text-slider mt-3">Revitalize Your Day with Health</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6 ">Shop Now</Link>
                                        </div>
                                        <div className="sub-img absolute lg:w-1/2 md:w-[55%] w-[60%] 2xl:-right-[60px] sm:right-4 right-0 bottom-0 z-[-1]">
                                            <Image
                                                src={'/images/slider/subimg2-3.png'}
                                                width={1000}
                                                height={400}
                                                alt='bg-slider'
                                                priority={true}
                                                className=''
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative overflow-hidden">
                                <div className="slider-bg-img absolute top-0 right-0 bottom-0 left-0 w-full h-full -z-10 bg-[#e4f4ff]">
                                    <Image
                                        src="/images/slider/bg-slider2.png"
                                        width={2000}
                                        height={2000}
                                        alt='bg-slider'
                                        priority={true}
                                        className='w-full h-full object-cover'
                                    />
                                </div>
                                <div className="slider-content w-full h-full">
                                    <div className="container w-full h-full flex items-center relative">
                                        <div className="text-content w-[50%] max-lg:pt-12 max-lg:pb-16">
                                            <div className="text-subheading">Sale Off 50%</div>
                                            <div className="text-slider mt-3">Fresh and Flavorful Smoothies</div>
                                            <Link href='/shop/shop-grid-fullwidth' className="button-main md:mt-8 mt-6 ">Shop Now</Link>
                                        </div>
                                        <div className="sub-img absolute lg:w-[58%] md:w-[55%] w-[62%] 2xl:-right-[100px] sm:right-6 -right-4 sm:bottom-0 bottom-20 z-[-1]">
                                            <Image
                                                src={'/images/slider/subimg2-1.png'}
                                                width={1000}
                                                height={400}
                                                alt='bg-slider'
                                                priority={true}
                                                className=''
                                            />
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

export default SliderTwo