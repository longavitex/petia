'use client'

import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const Banner = () => {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/shop-grid-sidebar?category=${category}`);
    };

    return (
        <>
            <div className="category-block style-two md:pt-20 pt-12">
                <div className="container">
                    <div className="list-cate grid lg:grid-cols-3 sm:grid-cols-2 gap-[30px]">
                        <div
                            className="item rounded-xl overflow-hidden relative cursor-pointer"
                            onClick={() => handleCategoryClick('grains')}
                        >
                            <Image
                                src={'/images/category/cate2-1.png'}
                                width={2000}
                                height={1500}
                                alt='cate'
                                priority={true}
                                className='w-full duration-500'
                            />
                            <div className="text-content z-[2] absolute left-7 top-1/2 -translate-y-1/2">
                                <div className="text-caption-uppercase text-white">New products</div>
                                <div className="md:text-3xl text-2xl text-white mt-3">Pet{String.raw`'s`} Bed</div>
                                <div className="text-caption text-white has-line line-white line-2px active inline-block uppercase mt-3">Shop now</div>
                            </div>
                        </div>
                        <div
                            className="item rounded-xl overflow-hidden relative cursor-pointer"
                            onClick={() => handleCategoryClick('grains')}
                        >
                            <Image
                                src={'/images/category/cate2-2.png'}
                                width={2000}
                                height={1500}
                                alt='cate'
                                priority={true}
                                className='w-full duration-500'
                            />
                            <div className="text-content z-[2] absolute left-7 top-1/2 -translate-y-1/2">
                                <div className="text-caption-uppercase text-white">Sale of 30%</div>
                                <div className="md:text-3xl text-2xl text-white mt-3">Organic Food</div>
                                <div className="text-caption text-white has-line line-white line-2px active inline-block uppercase mt-3">Shop now</div>
                            </div>
                        </div>
                        <div
                            className="item rounded-xl overflow-hidden relative cursor-pointer max-lg:hidden max-sm:block"
                            onClick={() => handleCategoryClick('grains')}
                        >
                            <Image
                                src={'/images/category/cate2-3.png'}
                                width={2000}
                                height={1500}
                                alt='cate'
                                priority={true}
                                className='w-full duration-500'
                            />
                            <div className="text-content z-[2] absolute left-7 top-1/2 -translate-y-1/2">
                                <div className="text-caption-uppercase text-white">Special products</div>
                                <div className="md:text-3xl text-2xl text-white mt-3">Pet Accessories</div>
                                <div className="text-caption text-white has-line line-white line-2px active inline-block uppercase mt-3">Shop now</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner