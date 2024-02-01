import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    borderTop: boolean
}

const Footer: React.FC<Props> = ({ borderTop }) => {
    return (
        <>
            <div id="footer" className={`${borderTop === true ? 'border-t border-line' : ''}`}>
                <div className="container">
                    <div className="heading flex items-center lg:justify-between sm:justify-center flex-wrap max-lg:gap-16 max-lg:gap-y-8 max-sm:gap-y-5 py-10 relative border-b border-line">
                        <div className="item flex items-center sm:gap-5 gap-3">
                            <div className="item-call flex items-center justify-center sm:w-[70px] sm:h-[70px] w-[56px] h-[56px] rounded-full bg-orange">
                                <i className="icon-help text-white sm:text-3xl text-2xl"></i>
                            </div>
                            <div className="text">
                                <div className="text-cate">Call us 24/7</div>
                                <div className="text-title mt-1.5">+84 862 356 793</div>
                            </div>
                        </div>
                        <div className="item flex items-center sm:gap-5 gap-3 ">
                            <div className="item-call flex items-center justify-center sm:w-[70px] sm:h-[70px] w-[56px] h-[56px] rounded-full bg-orange">
                                <i className="icon-message text-white sm:text-3xl text-2xl"></i>
                            </div>
                            <div className="text">
                                <div className="text-cate">Subscribe Newsletter</div>
                                <div className="text-title mt-1.5">Sign up for weekly newsletter</div>
                            </div>
                        </div>
                        <form className='h-[50px] flex items-center lg:basis-1/3 sm:w-[80%] w-full'>
                            <input className='w-full h-full bg-line px-5 border-r-0 rounded-l-full' type="text" placeholder='Enter your email' />
                            <button className='bg-orange text-white h-full sm:px-6 px-3 rounded-r-full text-button'>Subscribe</button>
                        </form>
                    </div>

                    <div className="content-footer sm:py-14 py-10 flex justify-between flex-wrap gap-y-6">
                        <div className="company-infor">
                            <Link href={'/'} className="logo">
                                <Image
                                    src={'/images/logo.svg'}
                                    width={500}
                                    height={400}
                                    alt='logo'
                                    priority={true}
                                    className='sm:h-10 h-9 w-auto'
                                />
                            </Link>
                            <div className="text-title text-secondary mt-4">
                                Monday – Saturday: 8:00 am – 4:00pm
                            </div>
                            <div className="text-title text-secondary mt-1">
                                Sunday: 9:00 am – 5:00pm
                            </div>
                            <div className="list-social flex items-center gap-5 mt-4">
                                <Link href={'https://www.facebook.com/'} target='_blank'>
                                    <Icon.FacebookLogo size={24} weight='fill' color='#676767' className='hover:fill-orange duration-300' />
                                </Link>
                                <Link href={'https://www.instagram.com/'} target='_blank'>
                                    <Icon.InstagramLogo size={24} weight='fill' color='#676767' className='hover:fill-orange duration-300' />
                                </Link>
                                <Link href={'https://www.twitter.com/'} target='_blank'>
                                    <Icon.TwitterLogo size={24} weight='fill' color='#676767' className='hover:fill-orange duration-300' />
                                </Link>
                                <Link href={'https://www.youtube.com/'} target='_blank'>
                                    <Icon.YoutubeLogo size={24} weight='fill' color='#676767' className='hover:fill-orange duration-300' />
                                </Link>
                            </div>
                        </div>
                        <div className="list-nav flex justify-between lg:basis-2/3 w-full max-md:grid max-md:grid-cols-2 gap-4">
                            <div className="item flex flex-col">
                                <div className="text-button pb-3">Quick links</div>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit' href={'/'}>Home</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'/about'}>About us</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'/blog'}>Blog</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'/shop/shop-grid-fullwidth'}>Shop</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'/contact'}>Contact</Link>
                            </div>
                            <div className="item flex flex-col">
                                <div className="text-button pb-3">Categories</div>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit' href={'#!'}>Smoothies</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'#!'}>Vegetables</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'#!'}>Fast Food</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'#!'}>Cake</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'#!'}>Grain & Nuts</Link>
                            </div>
                            <div className="item flex flex-col">
                                <div className="text-button pb-3">Help Center</div>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit' href={'#!'}>Help & FAQs</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'#!'}>Cookies Policy</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'#!'}>Terms & Conditions</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'#!'}>Privacy Policy</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'#!'}>Support Center</Link>
                            </div>
                            <div className="item flex flex-col">
                                <div className="text-button pb-3">Contact info</div>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit' href={'#!'}>+32 821 435 333</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'#!'}>orgafresh@gmail.com</Link>
                                <Link className='text-caption text-secondary hover:text-orange duration-200 w-fit pt-2' href={'#!'}>21 Lenin St., Moscow</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom bg-brown">
                    <div className="container py-2 flex items-center justify-between flex-wrap gap-3 max-[400px]:flex-col">
                        <div className="copyright text-title text-white">Copyright © 2024 OrgaFresh Inc.</div>
                        <div className="list-social flex items-center gap-3">
                            <Link href={'https://www.facebook.com/'} target='_blank'>
                                <Icon.FacebookLogo size={16} weight='fill' color='#FFFFFF' className='hover:fill-orange duration-300' />
                            </Link>
                            <Link href={'https://www.instagram.com/'} target='_blank'>
                                <Icon.InstagramLogo size={16} weight='fill' color='#FFFFFF' className='hover:fill-orange duration-300' />
                            </Link>
                            <Link href={'https://www.twitter.com/'} target='_blank'>
                                <Icon.TwitterLogo size={16} weight='fill' color='#FFFFFF' className='hover:fill-orange duration-300' />
                            </Link>
                            <Link href={'https://www.youtube.com/'} target='_blank'>
                                <Icon.YoutubeLogo size={16} weight='fill' color='#FFFFFF' className='hover:fill-orange duration-300' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer