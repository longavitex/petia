'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const Category = () => {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        // Redirect to shop with selected category
        router.push(`/shop/shop-grid-sidebar?category=${category}`);
    };

    return (
        <>
            <div className="category-block style-two md:pt-20 pt-12">
                <div className="container">
                    <div className="list-cate grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:gap-[30px] gap-4">
                        <div
                            className='item relative rounded-xl overflow-hidden cursor-pointer xl:col-span-2 col-span-1 md:row-span-2 row-span-1 h-full max-md:hidden'
                            onClick={() => handleCategoryClick('food')}
                        >
                            <Image
                                src={'/images/category/food2.png'}
                                width={3000}
                                height={2500}
                                alt='img'
                                priority={true}
                                className='w-full h-full object-cover duration-500'
                            />
                            <div className="text-content absolute xl:left-8 left-6 right-6 xl:top-1/2 xl:-translate-y-1/2 top-6">
                                <div className="text-caption-uppercase">Nature{String.raw`'s`} Blend Food</div>
                                <div className="text-heading xl:mt-3 mt-2">Healthy Meals for <br className='max-xl:hidden' />Happy Pets</div>
                                <div className="text-caption font-semibold has-line line-black line-2px active inline-block uppercase xl:mt-3 mt-2">Shop now</div>
                            </div>
                        </div>
                        <div
                            className='item relative rounded-xl overflow-hidden cursor-pointer col-span-1 row-span-1'
                            onClick={() => handleCategoryClick('bed')}
                        >
                            <Image
                                src={'/images/category/bed2.png'}
                                width={3000}
                                height={2500}
                                alt='img'
                                priority={true}
                                className='w-full duration-500'
                            />
                            <div className="text-content absolute left-6 right-6 top-6">
                                <div className="text-caption-uppercase">Pet{String.raw`'s`} Bed Sale</div>
                                <div className="text-cate xl:mt-3 mt-2">Cozy Beds for <br className='max-xl:hidden' />Sweet Dreams</div>
                                <div className="text-caption font-semibold has-line line-black line-2px active inline-block uppercase xl:mt-3 mt-2">Shop now</div>
                            </div>
                        </div>
                        <div
                            className='item relative rounded-xl overflow-hidden cursor-pointer md:row-start-2 xl:col-start-3 md:col-start-2 col-span-1 row-span-1'
                            onClick={() => handleCategoryClick('outfit')}
                        >
                            <Image
                                src={'/images/category/outfit2.png'}
                                width={3000}
                                height={2500}
                                alt='img'
                                priority={true}
                                className='w-full duration-500'
                            />
                            <div className="text-content absolute left-6 right-6 top-6">
                                <div className="text-caption-uppercase">Holiday sale offer</div>
                                <div className="text-cate xl:mt-3 mt-2">Fashionable Attire <br className='max-xl:hidden' />for Trendy Pets</div>
                                <div className="text-caption font-semibold has-line line-black line-2px active inline-block uppercase xl:mt-3 mt-2">Shop now</div>
                            </div>
                        </div>
                        <div
                            className='item relative rounded-xl overflow-hidden cursor-pointer col-span-1 md:row-span-2 row-span-1 h-full max-md:hidden'
                            onClick={() => handleCategoryClick('toy')}
                        >
                            <Image
                                src={'/images/category/toy2.png'}
                                width={3000}
                                height={2500}
                                alt='img'
                                priority={true}
                                className='w-full h-full object-cover duration-500'
                            />
                            <div className="text-content absolute left-6 right-6 top-6">
                                <div className="text-caption-uppercase">Interesting toys pets</div>
                                <div className="text-cate xl:mt-3 mt-2">Playtime Fun for<br /> Energetic Pets</div>
                                <div className="text-caption font-semibold has-line line-black line-2px active inline-block uppercase xl:mt-3 mt-2">Shop now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category