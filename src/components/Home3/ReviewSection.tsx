'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Review from '../Review/Review'
import { ReviewType } from '@/type/ReviewType'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    data: Array<ReviewType>;
    limit: number;
}

const ReviewSection: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="review-block relative flex items-center justify-center md:py-20 py-12">
                <div className="bg-img absolute top-0 left-0 w-full h-full z-[-1]">
                    <Image
                        src={'/images/other/bg-testi3.png'}
                        width={3000}
                        height={2400}
                        alt='bg'
                        priority={true}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container">
                    <div className="text-heading text-center">What peoples say?</div>
                    <div className="list-review style-outline relative md:mt-8 mt-5">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            loop={true}
                            pagination={{ clickable: true }}
                            modules={[Pagination, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 1,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1320: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className='pb-12'
                        >
                            {data.slice(0, limit).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Review data={item} type='style-three' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewSection