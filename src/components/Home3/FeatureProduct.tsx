'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Product from '../Product/Product';
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
}

const FeatureProduct: React.FC<Props> = ({ data }) => {

    return (
        <>
            <div className="feature-product style-two md:pt-20 pt-10">
                <div className="container">
                    <div className="heading flex items-center justify-between gap-5 flex-wrap">
                        <div className="text-heading">Feature Products</div>
                        <Link href={'/shop/shop-grid-sidebar'} className='has-line line-2px line-orange active'>View All</Link>
                    </div>
                    <div className="list-product grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-[20px] md:mt-10 mt-6">
                        <Link href={"/shop/shop-grid-sidebar"} className="banner-img has-before rounded-[12px] overflow-hidden relative">
                            <Image
                                src={'/images/other/banner-feature3.png'}
                                width={1000}
                                height={1000}
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
                        {data.filter(item => item.category === 'grains' || item.category === 'nuts').slice(0, 5).map((prd, index) => (
                            <Product key={index} data={prd} type='col' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default FeatureProduct