import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Link from 'next/link';

const TopNavThree = () => {
    return (
        <>
            <div className='top-nav style-four md:h-[36px] h-[32px] bg-white'>
                <div className="container mx-auto h-full">
                    <div className="top-nav-main flex justify-between h-full">
                        <div className="left-content flex items-center gap-7">
                            <div className="list-social-header flex items-center gap-2 pr-7 border-r border-line h-full max-[600px]:hidden">
                                <Link href={'https://www.facebook.com/'} target='_blank'>
                                    <Icon.FacebookLogo size={16} weight="fill" className='hover:fill-orange duration-300' />
                                </Link>
                                <Link href={'https://twitter.com/'} target='_blank'>
                                    <Icon.TwitterLogo size={16} weight="fill" className='hover:fill-orange duration-300' />
                                </Link>
                                <Link href={'https://www.instagram.com/'} target='_blank'>
                                    <Icon.InstagramLogo size={16} weight="fill" className='hover:fill-orange duration-300' />
                                </Link>
                                <Link href={'https://www.youtube.com/'} target='_blank'>
                                    <Icon.YoutubeLogo size={16} weight="fill" className='hover:fill-orange duration-300' />
                                </Link>
                            </div>
                            <div className="mail flex items-center gap-2 max-[450px]:hidden">
                                <Icon.Envelope size={16} />
                                <div className="text-caption">orgafresh@gmail.com</div>
                            </div>
                        </div>
                        <div className="right-content flex items-center gap-7 max-[450px]:text-left max-[450px]:w-full">
                            <div className="choose-language flex items-center gap-1.5">
                                <Icon.GlobeSimple size={16} />
                                <select name="language" id="chooseLanguage" className='text-caption'>
                                    <option value="English">English</option>
                                    <option value="Espana">Espana</option>
                                    <option value="France">France</option>
                                </select>
                                <Icon.CaretDown size={12} />
                            </div>
                            <div className="choose-currency flex items-center gap-1.5">
                                <Icon.CurrencyCircleDollar size={16} />
                                <select name="currency" id="chooseCurrency" className='text-caption'>
                                    <option value="USD">USD</option>
                                    <option value="EUR">EUR</option>
                                    <option value="GBP">GBP</option>
                                </select>
                                <Icon.CaretDown size={12} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TopNavThree