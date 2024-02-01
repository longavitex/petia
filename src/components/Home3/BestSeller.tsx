'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Product from '../Product/Product';
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
}

const BestSeller: React.FC<Props> = ({ data }) => {

    return (
        <>
            <div className="best-seller style-three md:py-20 py-10">
                <div className="container">
                    <div className="content-main xl:flex">
                        <div className="left xl:w-2/3 xl:pr-4">
                            <div className="heading flex items-center justify-between gap-5 flex-wrap">
                                <div className="text-heading">Top Seller</div>
                                <Link href={'/shop/shop-grid-sidebar'} className='has-line line-2px line-orange active'>View All</Link>
                            </div>
                            <div className="list-product grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 sm:gap-[30px] gap-[20px] md:mt-8 mt-5">
                                {data.filter(item => item.category === 'grains' || item.category === 'nuts').slice(0, 6).map((prd, index) => (
                                    <Product key={index} data={prd} type='row-2' />
                                ))}
                            </div>
                        </div>
                        <div className="right xl:w-1/3 xl:pl-4 max-xl:mt-10">
                            <Link href={"/shop/shop-grid-sidebar"} className="banner-img has-before rounded-[12px] xl:h-full md:h-[320px] sm:h-[280px] h-[200px] block overflow-hidden relative">
                                <Image
                                    src={'/images/other/banner-bestseller3.png'}
                                    width={1000}
                                    height={2000}
                                    alt='banner-feature2'
                                    priority={true}
                                    className='w-full h-full object-cover duration-500'
                                />
                                <div className="text-content absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white text-center">
                                    <div className="text-subheading text-white uppercase">Save up to</div>
                                    <div className="text-heading mt-2 whitespace-nowrap">50% Up</div>
                                    <div className='text-button uppercase text-center text-white underline whitespace-nowrap mt-4'>Shop now</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSeller