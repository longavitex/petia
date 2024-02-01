'use client'

import React, { useState } from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    data: Array<ProductType>;
    limit: number;
}

const ArrivalOrganic: React.FC<Props> = ({ data, limit }) => {
    const [category, setCategory] = useState('vegetables');

    const handleCategoryChange = (type: string) => {
        setCategory(type);
    };

    const filteredProducts = data.filter(product => product.category.toLowerCase() === category.toLowerCase());

    return (
        <>
            <div className="arrival-block md:pt-20 pt-12">
                <div className="container">
                    <div className="main-content">
                        <div className="heading flex items-center justify-between flex-wrap gap-5">
                            <div className="text-heading">Arrival Organic</div>
                            <div className="menu-tab flex items-center gap-6">
                                {['meats', 'vegetables', 'fruits', 'smoothies', 'grains'].map((item, index) => (
                                    <div
                                        key={index}
                                        className={`tab-item text-button capitalize has-line line-2px cursor-pointer ${category === item ? 'active' : ''}`}
                                        onClick={() => handleCategoryChange(item)}
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="list-product style-outline relative mt-5">
                            <div className="custom-swiper-button-prev">
                                <Icon.CaretLeft />
                            </div>
                            <Swiper
                                spaceBetween={8}
                                slidesPerView={2}
                                navigation={{
                                    nextEl: '.custom-swiper-button-next',
                                    prevEl: '.custom-swiper-button-prev',
                                }}
                                loop={true}
                                modules={[Navigation, Autoplay]}
                                breakpoints={{
                                    576: {
                                        slidesPerView: 2,
                                        spaceBetween: 8,
                                    },
                                    768: {
                                        slidesPerView: 3,
                                        spaceBetween: 20,
                                    },
                                    1024: {
                                        slidesPerView: 4,
                                        spaceBetween: 20,
                                    },
                                    1400: {
                                        slidesPerView: 5,
                                        spaceBetween: 24,
                                    },
                                }}
                                className='pb-12'
                            >
                                {filteredProducts.slice(0, limit).map((prd) => (
                                    <SwiperSlide key={prd.id}>
                                        <Product data={prd} type='col' />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="custom-swiper-button-next">
                                <Icon.CaretRight />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ArrivalOrganic