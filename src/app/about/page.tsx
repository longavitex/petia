'use client'

import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import HeadingPage from '@/components/Other/HeadingPage'
import WhyChooseUs from '@/components/Home2/WhyChooseUs';
import ReviewSection from '@/components/Home2/ReviewSection';
import dataReview from "@/data/Review.json"
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';

const AboutUs = () => {
    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <HeadingPage title="About Us" subTitle="About Us" />
            <div className="about-block md:pt-20 pt-12">
                <div className="container">
                    <div className="content bg-surface rounded-3xl w-full md:py-14 py-8 max-lg:px-8">
                        <div className="flex items-center justify-center lg:gap-16 gap-6 w-full max-lg:flex-col">
                            <div className="left lg:basis-1/3 sm:w-2/3 w-11/12">
                                <Image
                                    src={'/images/other/bg-about.png'}
                                    width={2000}
                                    height={2000}
                                    alt='bg-img'
                                    priority={true}
                                    className='w-full'
                                />
                            </div>
                            <div className="right lg:basis-5/12 w-full">
                                <div className="text-content w-full">
                                    <div className="text-heading">Welcome to Organic Store!</div>
                                    <div className="text-title text-secondary sm:mt-6 mt-4">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur</div>
                                    <div className="text-button-lg sm:mt-6 mt-4">{String.raw`“`}There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form.{String.raw`”`}</div>
                                    <Link href={'/contact'} className="button-main sm:mt-8 mt-5">CONTACT US</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:pt-20 pt-12">
                <WhyChooseUs />
            </div>
            <div className="style-about">
                <ReviewSection data={dataReview} limit={4} />
            </div>
            <div className="team-member md:py-20 py-12">
                <div className="container">
                    <div className="text-heading text-center">Team Member</div>
                    <div className="list-member md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={20}
                            slidesPerView={2}
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            autoplay={{
                                delay: 5000,
                            }}
                            className=''
                            breakpoints={{
                                576: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 40,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 60,
                                },
                                1400: {
                                    slidesPerView: 5,
                                    spaceBetween: 90,
                                },
                            }}
                        >
                            <SwiperSlide>
                                <div className="member flex flex-col items-center">
                                    <div className="avatar w-full rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={'/images/avatar/team1.png'}
                                            width={500}
                                            height={500}
                                            alt='avatar'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="text-button-lg text-center mt-6">Debbie Allen</div>
                                    <div className="text-center text-grey">Founder & CEO</div>
                                    <div className="list-social flex items-center justify-center gap-3 mt-4">
                                        <Link href={'https://www.facebook.com/'} target='_blank'>
                                            <Icon.FacebookLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank'>
                                            <Icon.InstagramLogo size={18} className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank'>
                                            <Icon.TwitterLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.youtube.com/'} target='_blank'>
                                            <Icon.YoutubeLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="member flex flex-col items-center">
                                    <div className="avatar w-full rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={'/images/avatar/team2.png'}
                                            width={500}
                                            height={500}
                                            alt='avatar'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="text-button-lg text-center mt-6">Christina Harley</div>
                                    <div className="text-center text-grey">Assistant</div>
                                    <div className="list-social flex items-center justify-center gap-3 mt-4">
                                        <Link href={'https://www.facebook.com/'} target='_blank'>
                                            <Icon.FacebookLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank'>
                                            <Icon.InstagramLogo size={18} className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank'>
                                            <Icon.TwitterLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.youtube.com/'} target='_blank'>
                                            <Icon.YoutubeLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="member flex flex-col items-center">
                                    <div className="avatar w-full rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={'/images/avatar/team3.png'}
                                            width={500}
                                            height={500}
                                            alt='avatar'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="text-button-lg text-center mt-6">Daniel Alves</div>
                                    <div className="text-center text-grey">Section manager</div>
                                    <div className="list-social flex items-center justify-center gap-3 mt-4">
                                        <Link href={'https://www.facebook.com/'} target='_blank'>
                                            <Icon.FacebookLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank'>
                                            <Icon.InstagramLogo size={18} className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank'>
                                            <Icon.TwitterLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.youtube.com/'} target='_blank'>
                                            <Icon.YoutubeLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="member flex flex-col items-center">
                                    <div className="avatar w-full rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={'/images/avatar/team4.png'}
                                            width={500}
                                            height={500}
                                            alt='avatar'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="text-button-lg text-center mt-6">Georgina Smith</div>
                                    <div className="text-center text-grey">Finance manager</div>
                                    <div className="list-social flex items-center justify-center gap-3 mt-4">
                                        <Link href={'https://www.facebook.com/'} target='_blank'>
                                            <Icon.FacebookLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank'>
                                            <Icon.InstagramLogo size={18} className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank'>
                                            <Icon.TwitterLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.youtube.com/'} target='_blank'>
                                            <Icon.YoutubeLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="member flex flex-col items-center">
                                    <div className="avatar w-full rounded-full overflow-hidden flex-shrink-0">
                                        <Image
                                            src={'/images/avatar/team5.png'}
                                            width={500}
                                            height={500}
                                            alt='avatar'
                                            className='w-full'
                                        />
                                    </div>
                                    <div className="text-button-lg text-center mt-6">Thiago Silva</div>
                                    <div className="text-center text-grey">Designer</div>
                                    <div className="list-social flex items-center justify-center gap-3 mt-4">
                                        <Link href={'https://www.facebook.com/'} target='_blank'>
                                            <Icon.FacebookLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank'>
                                            <Icon.InstagramLogo size={18} className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank'>
                                            <Icon.TwitterLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                        <Link href={'https://www.youtube.com/'} target='_blank'>
                                            <Icon.YoutubeLogo size={18} weight='fill' className='hover:fill-orange duration-300' />
                                        </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            <Footer borderTop={true} />
        </>
    )
}

export default AboutUs