"use client"

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const Category = () => {
    const router = useRouter()

    const handleCategoryClick = (species: string) => {
        // Redirect to shop with species selected
        router.push(`/shop/shop-grid-sidebar?species=${species}`);
    };

    return (
        <>
            <div className="category-block style-one md:pt-20 pt-12">
                <div className="container">
                    <div className="text-heading text-center">Shop by Species</div>
                    <div className="list-cate md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={24}
                            slidesPerView={2}
                            speed={300}
                            loop={true}
                            modules={[Autoplay]}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 30
                                },
                                640: {
                                    slidesPerView: 3,
                                    spaceBetween: 40
                                },
                                992: {
                                    slidesPerView: 3,
                                    spaceBetween: 50
                                },
                                1280: {
                                    slidesPerView: 4,
                                    spaceBetween: 60
                                },
                            }}
                            className='h-full relative'
                        >
                            <SwiperSlide>
                                <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('dog')}>
                                    <div className="cate-img sm:p-5 p-3 block duration-500">
                                        <Image
                                            src="/images/category/dog.png"
                                            width={800}
                                            height={800}
                                            alt="Logo"
                                            priority={true}
                                            className='w-full duration-500'
                                        />
                                    </div>
                                    <div className="cate-name text-center text-cate duration-500 md:mt-5 mt-2">dog</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('cat')}>
                                    <div className="cate-img sm:p-5 p-3 block duration-500">
                                        <Image
                                            src="/images/category/cat.png"
                                            width={800}
                                            height={800}
                                            alt="Logo"
                                            priority={true}
                                            className='w-full duration-500'
                                        />
                                    </div>
                                    <div className="cate-name text-center text-cate duration-500 md:mt-5 mt-2">cat</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('rabbit')}>
                                    <div className="cate-img sm:p-5 p-3 block duration-500">
                                        <Image
                                            src="/images/category/rabbit.png"
                                            width={800}
                                            height={800}
                                            alt="Logo"
                                            priority={true}
                                            className='w-full duration-500'
                                        />
                                    </div>
                                    <div className="cate-name text-center text-cate duration-500 md:mt-5 mt-2">rabbit</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('parrot')}>
                                    <div className="cate-img sm:p-5 p-3 block duration-500">
                                        <Image
                                            src="/images/category/parrot.png"
                                            width={800}
                                            height={800}
                                            alt="Logo"
                                            priority={true}
                                            className='w-full duration-500'
                                        />
                                    </div>
                                    <div className="cate-name text-center text-cate duration-500 md:mt-5 mt-2">parrot</div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="cate-item cursor-pointer" onClick={() => handleCategoryClick('mouse')}>
                                    <div className="cate-img sm:p-5 p-3 block duration-500">
                                        <Image
                                            src="/images/category/mouse.png"
                                            width={800}
                                            height={800}
                                            alt="Logo"
                                            priority={true}
                                            className='w-full duration-500'
                                        />
                                    </div>
                                    <div className="cate-name text-center text-cate duration-500 md:mt-5 mt-2">mouse</div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category