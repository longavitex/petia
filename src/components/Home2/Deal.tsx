'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { countdownTime } from '../Other/countdownTime'
import CountdownTimeType from '@/type/CountdownType'

const Deal = ({ serverTimeLeft }: { serverTimeLeft: CountdownTimeType }) => {
    const [timeLeft, setTimeLeft] = useState(serverTimeLeft);

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(countdownTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="best-product-block relative flex items-center justify-center md:mt-8">
                <div className="bg-img absolute top-0 left-0 w-full h-full -z-[1]">
                    <Image
                        src={'/images/other/bg-deal2.png'}
                        width={3000}
                        height={2500}
                        alt='bg-img'
                        priority={true}
                        className='w-full h-full object-cover'
                    />
                </div>
                <div className="container py-16">
                    <div className="content-main flex items-center justify-end">
                        <div className="main 2xl:w-1/2 xl:w-[55%] lg:w-[70%] w-full xl:py-16 xl:pl-14 xl:pr-28 py-10 pl-8 pr-16 bg-white md:rounded-3xl rounded-2xl">
                            <div className="text-subheading text-orange">Deals of the week</div>
                            <div className="text-heading mt-3">Canned nuts on sale <br />in the store</div>
                            <div className="text-title text-secondary mt-3">Aempor incididunt ut labore et dolore magna aliqua ultrices.</div>
                            <div className="list-time flex items-center max-sm:flex-wrap md:gap-20 sm:gap-16 gap-y-5 sm:mt-8 mt-5">
                                <div className="time relative max-sm:basis-1/2 max-sm:flex items-center justify-start">
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
                                <div className="time relative max-sm:basis-1/2 max-sm:flex items-center justify-end max-sm:pr-6">
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
                                <div className="time relative max-sm:basis-1/2 max-sm:flex items-center justify-start">
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
                                <div className="time relative max-sm:basis-1/2 max-sm:flex items-center justify-end max-sm:pr-6">
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
                            <Link href={'/shop/shop-grid-sidebar'} className='button-main md:mt-10 mt-6'>Shop Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deal