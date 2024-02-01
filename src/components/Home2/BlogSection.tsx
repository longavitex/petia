'use client'

import React from 'react'
import Blog from '../Blog/Blog';
import { BlogType } from '@/type/BlogType'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';

interface Props {
    data: Array<BlogType>;
    limit: number;
}

const BlogSection: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="blog-block md:pt-20 pt-12">
                <div className="container">
                    <div className="heading text-center">
                        <div className="text-subheading">News & Events</div>
                        <div className="text-heading mt-2">Latest Blog</div>
                    </div>
                    <div className="list-blog lg:mt-8 mt-6">
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
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                                1290: {
                                    slidesPerView: 3,
                                    spaceBetween: 30,
                                },
                            }}
                            className='pb-12'
                        >
                            {data.slice(4, limit).map((item, index) => (
                                <SwiperSlide key={item.id}>
                                    <Blog data={item} key={index} type='style-one' />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSection