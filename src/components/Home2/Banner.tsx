import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Banner = () => {
    return (
        <>
            <div className="banner-block md:pt-20 pt-12">
                <div className="content-main flex max-lg:flex-wrap max-2xl:h-[300px] max-lg:h-[580px] max-md:h-[420px]">
                    <div className="left lg:w-1/2 w-full max-lg:h-1/2 relative">
                        <div className="bg-img h-full">
                            <Image
                                src={'/images/other/bg-banner2-1.png'}
                                width={2000}
                                height={2000}
                                alt='bg'
                                priority={true}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className="text-content absolute top-1/2 -translate-y-1/2 sm:right-14 right-6 flex flex-col items-center">
                            <div className="text-button text-center flex items-center justify-center relative text-white">
                                <Image
                                    src={'/images/other/bg-text-heading.png'}
                                    width={300}
                                    height={200}
                                    alt='bg'
                                    priority={true}
                                    className='md:w-[174px] w-[140px]'
                                />
                                <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>New arrivals</span>
                            </div>
                            <div className="text-heading text-center text-white mt-3">Discover Real <br />Organic Flavors</div>
                            <Link href={'/shop/shop-grid-sidebar'} className='text-button uppercase text-center text-white underline mt-4'>Shop now</Link>
                        </div>
                    </div>
                    <div className="right lg:w-1/2 w-full max-lg:h-1/2 relative">
                        <div className="bg-img h-full">
                            <Image
                                src={'/images/other/bg-banner2-2.png'}
                                width={2000}
                                height={2000}
                                alt='bg'
                                priority={true}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <div className="text-content absolute top-1/2 -translate-y-1/2 sm:left-14 left-6 flex flex-col items-center">
                            <div className="text-button text-center flex items-center justify-center relative text-white">
                                <Image
                                    src={'/images/other/bg-text-heading.png'}
                                    width={300}
                                    height={200}
                                    alt='bg'
                                    priority={true}
                                    className='md:w-[174px] w-[140px]'
                                />
                                <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap'>Summer sale</span>
                            </div>
                            <div className="text-heading text-center text-white mt-3">Sale off 30% <br />Daily Special Offers</div>
                            <Link href={'/shop/shop-grid-sidebar'} className='text-button uppercase text-center text-white underline mt-4'>Shop now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner