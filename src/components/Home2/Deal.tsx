'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import { countdownTime } from '../Other/countdownTime'
import CountdownTimeType from '@/type/CountdownType'

interface Props {
    data: Array<ProductType>;
    limit: number;
    serverTimeLeft: CountdownTimeType;
}

const Deal: React.FC<Props> = ({ data, limit, serverTimeLeft }) => {
    const [timeLeft, setTimeLeft] = useState(serverTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(countdownTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="deal-block relative flex items-center justify-center md:mt-8">
                <div className="bg-img absolute top-0 left-0 w-full z-[-1] max-2xl:h-[600px] max-sm:h-[360px]">
                    <Image
                        src={'/images/other/bg-deal2.png'}
                        width={3000}
                        height={3000}
                        alt='bg-img'
                        priority={true}
                        className='w-full h-full max-h-[640px] object-cover'
                    />
                </div>
                <div className="container md:pt-16 md:pb-20 pt-8 pb-12">
                    <div className="heading text-center">
                        <div className="text-subheading text-center flex items-center justify-center relative">
                            <Image
                                src={'/images/other/bg-text-heading.png'}
                                width={300}
                                height={200}
                                alt='bg'
                                priority={true}
                                className='w-[192px]'
                            />
                            <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white'>Sale off 30%</span>
                        </div>
                        <div className="text-heading text-center mt-3">Special Products</div>
                        <div className="list-time flex items-center justify-center max-sm:flex-wrap sm:gap-16 gap-y-5 sm:mt-8 mt-6">
                            <div className="time relative max-sm:basis-1/2 max-sm:flex items-center justify-center">
                                <div className="bg-img relative">
                                    <Image
                                        src={'/images/other/bg-circle.png'}
                                        width={400}
                                        height={400}
                                        alt='bg'
                                        priority={true}
                                        className='sm:w-[70px] sm:h-[70px] w-[48px]'
                                    />
                                    <div className="day sm:text-4xl text-xl absolute sm:top-[47%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days}
                                    </div>
                                    <div className="text-title absolute top-1/2 sm:left-[65px] left-[44px] -translate-y-1/2">Days</div>
                                </div>
                            </div>
                            <div className="time relative max-sm:basis-1/2 max-sm:flex items-center justify-center">
                                <div className="bg-img relative">
                                    <Image
                                        src={'/images/other/bg-circle.png'}
                                        width={400}
                                        height={400}
                                        alt='bg'
                                        priority={true}
                                        className='sm:w-[70px] sm:h-[70px] w-[48px]'
                                    />
                                    <div className="day sm:text-4xl text-xl absolute sm:top-[47%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours}
                                    </div>
                                    <div className="text-title absolute top-1/2 sm:left-[65px] left-[44px] -translate-y-1/2">Hours</div>
                                </div>
                            </div>
                            <div className="time relative max-sm:basis-1/2 max-sm:flex items-center justify-center">
                                <div className="bg-img relative">
                                    <Image
                                        src={'/images/other/bg-circle.png'}
                                        width={400}
                                        height={400}
                                        alt='bg'
                                        priority={true}
                                        className='sm:w-[70px] sm:h-[70px] w-[48px]'
                                    />
                                    <div className="day sm:text-4xl text-xl absolute sm:top-[47%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes}
                                    </div>
                                    <div className="text-title absolute top-1/2 sm:left-[65px] left-[44px] -translate-y-1/2">Minutes</div>
                                </div>
                            </div>
                            <div className="time relative max-sm:basis-1/2 max-sm:flex items-center justify-center">
                                <div className="bg-img relative">
                                    <Image
                                        src={'/images/other/bg-circle.png'}
                                        width={400}
                                        height={400}
                                        alt='bg'
                                        priority={true}
                                        className='sm:w-[70px] sm:h-[70px] w-[48px]'
                                    />
                                    <div className="day sm:text-4xl text-xl absolute sm:top-[47%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                        {timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds}
                                    </div>
                                    <div className="text-title absolute top-1/2 sm:left-[65px] left-[44px] -translate-y-1/2">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="list-product bg-white box-shadow md:py-12 md:px-10 py-6 px-4 md:rounded-3xl rounded-xl md:mt-10 mt-6">
                        <div className='grid lg:grid-cols-4 grid-cols-2 md:gap-[30px] gap-3 gap-y-4'>
                            {data
                                .filter(product => (Math.floor(100 - ((product.price / product.originPrice) * 100)) > 30) && (product.category === 'vegetables' || product.category === 'meats'))
                                .slice(0, 4)
                                .map((product) => (
                                    <Product key={product.id} data={product} type='col' />
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deal