import React from 'react'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const TopNavTwo = () => {
    return (
        <>
            <div className='top-nav style-two md:h-[36px] h-[32px] bg-white'>
                <div className="container mx-auto h-full">
                    <div className="top-nav-main flex justify-between h-full">
                        <div className="left-content flex items-center gap-7">
                            <div className="phone flex items-center gap-2 max-[600px]:hidden">
                                <Icon.PhoneCall size={16} />
                                <div className="text-caption">(+800) 345 678</div>
                            </div>
                            <div className="mail flex items-center gap-2 max-[450px]:hidden">
                                <Icon.Envelope size={16} />
                                <div className="text-caption">petia@gmail.com</div>
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

export default TopNavTwo