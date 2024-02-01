'use client'

import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Instagram = () => {
    return (
        <>
            <div className="instagram-block">
                <div className="container">
                    <div className="content-main list-instagram bg-white p-3 -mt-[150px] relative ">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                500: {
                                    slidesPerView: 2,
                                    spaceBetween: 12,
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 12,
                                },
                                1400: {
                                    slidesPerView: 5,
                                    spaceBetween: 12,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                    <Image
                                        src={'/images/instagram/1.png'}
                                        width={3000}
                                        height={3000}
                                        alt='1'
                                        priority={true}
                                        className='h-full w-full aspect-square object-cover duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <Icon.InstagramLogo size={24} className='duration-300' />
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                    <Image
                                        src={'/images/instagram/2.png'}
                                        width={3000}
                                        height={3000}
                                        alt='2'
                                        priority={true}
                                        className='h-full w-full aspect-square object-cover duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <Icon.InstagramLogo size={24} className='duration-300' />
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                    <Image
                                        src={'/images/instagram/3.png'}
                                        width={3000}
                                        height={3000}
                                        alt='3'
                                        priority={true}
                                        className='h-full w-full aspect-square object-cover duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <Icon.InstagramLogo size={24} className='duration-300' />
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                    <Image
                                        src={'/images/instagram/4.png'}
                                        width={3000}
                                        height={3000}
                                        alt='4'
                                        priority={true}
                                        className='h-full w-full aspect-square object-cover duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <Icon.InstagramLogo size={24} className='duration-300' />
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                    <Image
                                        src={'/images/instagram/5.png'}
                                        width={3000}
                                        height={3000}
                                        alt='5'
                                        priority={true}
                                        className='h-full w-full aspect-square object-cover duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <Icon.InstagramLogo size={24} className='duration-300' />
                                    </div>
                                </Link>
                            </SwiperSlide>
                            <SwiperSlide>
                                <Link href={'https://www.instagram.com/'} target='_blank' className="item relative block overflow-hidden">
                                    <Image
                                        src={'/images/instagram/6.png'}
                                        width={3000}
                                        height={3000}
                                        alt='6'
                                        priority={true}
                                        className='h-full w-full aspect-square object-cover duration-500 relative'
                                    />
                                    <div className="icon w-12 h-12 bg-white hover:bg-black duration-500 flex items-center justify-center rounded-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[1]">
                                        <Icon.InstagramLogo size={24} className='duration-300' />
                                    </div>
                                </Link>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Instagram