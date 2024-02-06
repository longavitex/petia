import React from 'react'
import Link from 'next/link';
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import HeadingPage from '@/components/Other/HeadingPage'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Footer from '@/components/Footer/Footer'

const Contact = () => {
    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <HeadingPage title="Contact Us" subTitle="Contact Us" />
            <div className="contact-page md:py-20 py-12">
                <div className="container">
                    <div className="feature flex md:items-center justify-between max-md:flex-col gap-6">
                        <div className="item flex items-center gap-4">
                            <div className="icon-help text-green md:text-5xl text-4xl"></div>
                            <div>
                                <div className="text-subheading text-secondary">Call us</div>
                                <div className="text-title mt-0.5">+34 398 356 4793</div>
                            </div>
                        </div>
                        <div className="item flex items-center gap-4">
                            <div className="icon-map text-orange md:text-5xl text-4xl"></div>
                            <div>
                                <div className="text-subheading text-secondary">Address</div>
                                <div className="text-title mt-0.5">1 Horse Guards Rd, London</div>
                            </div>
                        </div>
                        <div className="item flex items-center gap-4">
                            <div className="icon-mail md:text-5xl text-4xl"></div>
                            <div>
                                <div className="text-subheading text-secondary">Email</div>
                                <div className="text-title mt-0.5">petia@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <iframe className='w-full lg:h-[500px] md:h-[400px] h-[300px] mt-10' src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d4967.481853406817!2d-0.12216504026030432!3d51.499621544092!3m2!1i1024!2i768!4f13.1!5e0!3m2!1svi!2s!4v1703603124828!5m2!1svi!2s" loading="lazy"></iframe>
                    <div className="content-main flex gap-y-8 max-md:flex-col md:mt-14 mt-10">
                        <div className="left md:w-1/3 w-full lg:pr-[40px] md:pr-[20px]">
                            <div className="text-content">
                                <div className="text-heading">Get in touch</div>
                                <div className="mt-4 text-title text-secondary">If you got any question, please to not hesitate to send us a message. We reply within 24 hours!</div>
                                <div className="list-social flex items-center gap-3 flex-wrap mt-4">
                                    <Link href={'https://www.facebook.com/'} target='_blank' className='text-lg hover:text-orange'>
                                        <Icon.FacebookLogo weight='fill' className='duration-100' />
                                    </Link>
                                    <Link href={'https://www.instagram.com/'} target='_blank' className='text-lg hover:text-orange'>
                                        <Icon.InstagramLogo className='duration-100' />
                                    </Link>
                                    <Link href={'https://www.twitter.com/'} target='_blank' className='text-lg hover:text-orange'>
                                        <Icon.TwitterLogo weight='fill' className='duration-100' />
                                    </Link>
                                    <Link href={'https://www.youtube.com/'} target='_blank' className='text-lg hover:text-orange'>
                                        <Icon.YoutubeLogo weight='fill' className='duration-100' />
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="right md:w-2/3 w-full lg:pl-[50px] md:pl-[30px] flex items-center">
                            <form className="w-full">
                                <div className="grid sm:grid-cols-2 gap-5 w-full">
                                    <div className="name">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="name" type="text" placeholder="Name *" required />
                                    </div>
                                    <div className="email ">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" placeholder="Email *" required />
                                    </div>
                                </div>
                                <div className="message mt-5">
                                    <textarea className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="message" rows={3} placeholder="Message *" required />
                                </div>
                                <button className="button-main w-full text-center mt-5">SUBMIT</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
            <Footer borderTop={true} />
        </>
    )
}

export default Contact