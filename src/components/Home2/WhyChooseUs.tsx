import React from 'react'
import Image from 'next/image'

const WhyChooseUs = () => {
    return (
        <>
            <div className="why-chooose-us md:pt-20 pt-12">
                <div className="container">
                    <div className="text-heading text-center">Why Choose us?</div>
                    <div className="list-feature flex max-sm:flex-wrap items-center justify-between gap-y-8 md:mt-10 mt-6">
                        <div className="left sm:w-1/3 w-full">
                            <div className="item flex lg:gap-7 gap-4">
                                <div className="feature">
                                    <div className="text-cate">Dedicated care</div>
                                    <div className="text-caption capitalize mt-1">We are committed to providing dedicated, attentive pet care services.</div>
                                </div>
                            </div>
                            <div className="item flex lg:gap-7 gap-4 lg:mt-10 mt-6">
                                <div className="feature">
                                    <div className="text-cate">Quality products</div>
                                    <div className="text-caption capitalize mt-1">We only offer high-quality products from reputable suppliers.</div>
                                </div>
                            </div>
                            <div className="item flex lg:gap-7 gap-4 lg:mt-10 mt-6">
                                <div className="feature">
                                    <div className="text-cate">Diverse products{String.raw`'s`} range</div>
                                    <div className="text-caption capitalize mt-1">variety of products ranging from food to toys and accessories.</div>
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
                                <div className="feature">
                                    <div className="text-cate">Return policy</div>
                                    <div className="text-caption capitalize mt-1">We are committed to supporting exchanges and refunds.</div>
                                </div>
                            </div>
                            <div className="item flex sm:flex-row-reverse sm:justify-end sm:text-right lg:gap-7 gap-4 lg:mt-10 mt-6">
                                <div className="feature">
                                    <div className="text-cate">Excellent customer service</div>
                                    <div className="text-caption capitalize mt-1">Our team of staff is always ready to assist and advise you.</div>
                                </div>
                            </div>
                            <div className="item flex sm:flex-row-reverse sm:justify-end sm:text-right lg:gap-7 gap-4 lg:mt-10 mt-6">
                                <div className="feature">
                                    <div className="text-cate">Pet-loving community</div>
                                    <div className="text-caption capitalize mt-1">we always support activities and events that benefit pets.</div>
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