import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
    return (
        <>
            <div className="why-chooose-us">
                <div className="container">
                    <div className="text-heading text-center">Why Choose us?</div>
                    <div className="list-feature flex max-sm:flex-wrap items-center justify-between gap-y-8 md:mt-10 mt-6">
                        <div className="left sm:w-1/3 w-full">
                            <div className="item flex lg:gap-7 gap-4">
                                <div className="icon-hand-plant lg:text-5xl text-3xl"></div>
                                <div className="feature">
                                    <div className="text-cate">100% Naturalt</div>
                                    <div className="text-caption mt-1">Products made entirely from nature, free from harmful chemicals.</div>
                                </div>
                            </div>
                            <div className="item flex lg:gap-7 gap-4 lg:mt-10 mt-6">
                                <div className="icon-vegetable lg:text-5xl text-3xl"></div>
                                <div className="feature">
                                    <div className="text-cate">Always Fresh</div>
                                    <div className="text-caption mt-1">Products maintained for freshness, ensuring quality.</div>
                                </div>
                            </div>
                            <div className="item flex lg:gap-7 gap-4 lg:mt-10 mt-6">
                                <div className="icon-apple-pink lg:text-5xl text-3xl"></div>
                                <div className="feature">
                                    <div className="text-cate">Overall Healthy</div>
                                    <div className="text-caption mt-1">Supports overall health, products maintained for freshness.</div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-img sm:w-1/3 w-full lg:px-10 sm:px-4 px-14">
                            <Image
                                src={'/images/other/why-choose-us2.png'}
                                width={2000}
                                height={2000}
                                alt='bg'
                                priority={true}
                                className='w-full'
                            />
                        </div>
                        <div className="right sm:w-1/3 w-full sm:flex flex-col items-end justify-end">
                            <div className="item flex sm:flex-row-reverse sm:justify-end sm:text-right lg:gap-7 gap-4">
                                <div className="icon-house-plant lg:text-5xl text-3xl"></div>
                                <div className="feature">
                                    <div className="text-cate">Curated Products</div>
                                    <div className="text-caption mt-1">Carefully selected and specially curated products.</div>
                                </div>
                            </div>
                            <div className="item flex sm:flex-row-reverse sm:justify-end sm:text-right lg:gap-7 gap-4 lg:mt-10 mt-6">
                                <div className="icon-baby-food lg:text-5xl text-3xl"></div>
                                <div className="feature">
                                    <div className="text-cate">Good For Arteries</div>
                                    <div className="text-caption mt-1">Provides health benefits for the circulatory system.</div>
                                </div>
                            </div>
                            <div className="item flex sm:flex-row-reverse sm:justify-end sm:text-right lg:gap-7 gap-4 lg:mt-10 mt-6">
                                <div className="icon-healthy-eating lg:text-5xl text-3xl"></div>
                                <div className="feature">
                                    <div className="text-cate">Antioxidant Capacity</div>
                                    <div className="text-caption mt-1">Has antioxidant capabilities, protect body from free radicals.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs