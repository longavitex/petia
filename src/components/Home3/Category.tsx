"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const Category = () => {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        // Chuyển hướng đến trang shop với category được chọn
        router.push(`/shop/shop-grid-sidebar?category=${category}`);
    };

    return (
        <>
            <div className="category-block style-one relative md:py-[60px] py-10 md:mt-20 mt-12">
                <div className="bg-img">
                    <Image
                        src={'/images/other/bg-cate3.png'}
                        width={3000}
                        height={1000}
                        alt='bg-img'
                        priority={true}
                        className='absolute top-0 left-0 w-full h-full object-cover'
                    />
                </div>
                <div className="container">
                    <div className="sm:flex max-sm:grid grid-cols-2 items-center sm:justify-between justify-center max-sm:flex-wrap gap-8">
                        <div className="item banner-img md:w-[200px] md:h-[200px] overflow-hidden rounded-full cursor-pointer relative" onClick={() => handleCategoryClick('vegetable')}>
                            <div className="block">
                                <Image
                                    src="/images/category/vegetables3.png"
                                    width={500}
                                    height={500}
                                    alt="Logo"
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="cate-name w-full sm:px-8 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className='text-button-lg capitalize w-full text-center py-2 bg-white rounded-xl duration-500 hover:bg-black hover:text-white'>
                                    vegetables
                                </div>
                            </div>
                        </div>
                        <div className="item banner-img md:w-[200px] md:h-[200px] overflow-hidden rounded-full cursor-pointer relative" onClick={() => handleCategoryClick('grains')}>
                            <div className="block">
                                <Image
                                    src="/images/category/grains3.png"
                                    width={500}
                                    height={500}
                                    alt="Logo"
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="cate-name w-full sm:px-8 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className='text-button-lg capitalize w-full text-center py-2 bg-white rounded-xl duration-500 hover:bg-black hover:text-white'>
                                    grains
                                </div>
                            </div>
                        </div>
                        <div className="item banner-img md:w-[200px] md:h-[200px] overflow-hidden rounded-full cursor-pointer relative" onClick={() => handleCategoryClick('nuts')}>
                            <div className="block">
                                <Image
                                    src="/images/category/nuts3.png"
                                    width={500}
                                    height={500}
                                    alt="Logo"
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="cate-name w-full sm:px-8 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className='text-button-lg capitalize w-full text-center py-2 bg-white rounded-xl duration-500 hover:bg-black hover:text-white'>
                                    nuts
                                </div>
                            </div>
                        </div>
                        <div className="item banner-img md:w-[200px] md:h-[200px] overflow-hidden rounded-full cursor-pointer relative max-lg:hidden max-sm:block" onClick={() => handleCategoryClick('smoothie')}>
                            <div className="block">
                                <Image
                                    src="/images/category/smoothies3.png"
                                    width={500}
                                    height={500}
                                    alt="Logo"
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="cate-name w-full sm:px-8 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className='text-button-lg capitalize w-full text-center py-2 bg-white rounded-xl duration-500 hover:bg-black hover:text-white'>
                                    smoothies
                                </div>
                            </div>
                        </div>
                        <div className="item banner-img md:w-[200px] md:h-[200px] overflow-hidden rounded-full cursor-pointer relative max-xl:hidden" onClick={() => handleCategoryClick('fruit')}>
                            <div className="block">
                                <Image
                                    src="/images/category/fruits3.png"
                                    width={500}
                                    height={500}
                                    alt="Logo"
                                    className='w-full h-full object-cover duration-500'
                                />
                            </div>
                            <div className="cate-name w-full sm:px-8 px-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className='text-button-lg capitalize w-full text-center py-2 bg-white rounded-xl duration-500 hover:bg-black hover:text-white'>
                                    fruits
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category