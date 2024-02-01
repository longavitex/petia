'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Review from '../Review/Review'
import { ReviewType } from '@/type/ReviewType'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    data: Array<ReviewType>;
    limit: number;
}

const ReviewSection: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="review-block relative flex items-center justify-center bg-surface md:mt-20 mt-12 md:pt-20 pt-12 pb-56">
                <div className="container">
                    <div className="list-review style-outline relative">
                        <div className="custom-swiper-button-prev">
                            <Icon.CaretLeft />
                        </div>
                        <Swiper
                            spaceBetween={16}
                            slidesPerView={1}
                            navigation={{
                                nextEl: '.custom-swiper-button-next',
                                prevEl: '.custom-swiper-button-prev',
                            }}
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 1,
                                    spaceBetween: 16,
                                },
                                768: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                                1400: {
                                    slidesPerView: 2,
                                    spaceBetween: 30,
                                },
                            }}
                        >
                            {data.slice(0, limit).map((item) => (
                                <SwiperSlide key={item.id}>
                                    <Review data={item} type='style-two' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="custom-swiper-button-next">
                            <Icon.CaretRight />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReviewSection