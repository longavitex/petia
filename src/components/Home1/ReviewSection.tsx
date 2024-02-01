'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Review from '../Review/Review'
import { ReviewType } from '@/type/ReviewType'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

interface Props {
    data: Array<ReviewType>;
    limit: number;
}

const ReviewSection: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="review-block relative flex items-center justify-center">
                <div className="bg-img absolute top-0 left-0 w-full h-full -z-10">
                    <Image
                        src={'/images/other/bg-review.png'}
                        width={2560}
                        height={1080}
                        alt='bg-img'
                        priority={true}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container md:pt-20 md:pb-16 pt-12 pb-10">
                    <div className="list-review">
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            loop={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[Autoplay, Pagination]}
                            autoplay={{
                                delay: 3000,
                            }}
                            breakpoints={{
                                576: {
                                    slidesPerView: 1,
                                    spaceBetween: 16,
                                },
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1200: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className='pb-12'
                        >
                            {data.slice(0, limit).map((item, index) => (
                                <SwiperSlide key={index}>
                                    <Review key={index} data={item} type='style-one' />
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