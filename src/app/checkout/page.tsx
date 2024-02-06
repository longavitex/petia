'use client'

import React, { useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import HeadingPage from '@/components/Other/HeadingPage'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'

const Checkout = () => {
    const { cartState, updateCart, removeFromCart } = useCart();
    const router = useRouter()

    const handleQuantityChange = (productId: string, newQuantity: number) => {
        // Tìm sản phẩm trong giỏ hàng
        const itemToUpdate = cartState.cartArray.find((item) => item.id === productId);

        // Kiểm tra xem sản phẩm có tồn tại không
        if (itemToUpdate) {
            // Truyền giá trị hiện tại của selectedSize và selectedColor
            updateCart(productId, newQuantity);
        }
    };

    let [totalCart, setTotalCart] = useState<number>(0)

    cartState.cartArray.map(item => totalCart += item.price * item.quantity)

    const handleDetailProduct = (productId: string | number | null) => {
        // Chuyển hướng đến trang shop với category được chọn
        router.push(`/product-detail?id=${productId}`);
    };

    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <HeadingPage title="Check Out" subTitle="Check Out" />
            <div className="checkout-product md:py-20 py-12">
                <div className="container">
                    <div className="text-cate max-lg:pb-6">Billing details</div>
                    <div className="content-main flex justify-between max-lg:flex-col-reverse gap-y-16">
                        <div className="left xl:w-2/3 lg:w-3/5 w-full lg:pr-16">
                            <form className='lg:mt-12'>
                                <div className='grid sm:grid-cols-2 gap-20 sm:gap-y-16 gap-y-14'>
                                    <div className="block-input">
                                        <input type="text" name='firstName' id='firstName' className='w-full border-line' placeholder='' required />
                                        <label htmlFor="firstName" className='text-caption'>Fist Name*</label>
                                    </div>
                                    <div className="block-input">
                                        <input type="text" name='lastName' id='lastName' className='w-full border-line' placeholder='' required />
                                        <label htmlFor="lastName" className='text-caption'>Last Name*</label>
                                    </div>
                                    <div className="block-input">
                                        <input type="text" name='province' id='province' className='w-full border-line' placeholder='' required />
                                        <label htmlFor="province" className='text-caption'>Province*</label>
                                    </div>
                                    <div className="block-input">
                                        <input type="text" name='city' id='city' className='w-full border-line' placeholder='' required />
                                        <label htmlFor="city" className='text-caption'>City*</label>
                                    </div>
                                    <div className="block-input">
                                        <input type="text" name='address' id='address' className='w-full border-line' placeholder='' required />
                                        <label htmlFor="address" className='text-caption'>Address*</label>
                                    </div>
                                    <div className="block-input">
                                        <input type="text" name='country' id='country' className='w-full border-line' placeholder='' required />
                                        <label htmlFor="country" className='text-caption'>Country/States*</label>
                                    </div>
                                    <div className="block-input">
                                        <input type="text" name='phone' id='phone' className='w-full border-line' placeholder='' required />
                                        <label htmlFor="phone" className='text-caption'>Phone*</label>
                                    </div>
                                    <div className="block-input">
                                        <input type="email" name='email' id='email' className='w-full border-line' placeholder='' required />
                                        <label htmlFor="email" className='text-caption'>Email Address*</label>
                                    </div>
                                </div>
                                <div className="flex items-center gap-1.5 mt-8">
                                    <input type="checkbox" name="saveInfor" id="saveInfor" />
                                    <label className='text-caption' htmlFor="saveInfor">I want to receive exclusive discounts and information on the latest Petia trends.</label>
                                </div>
                                <button className='button-main mt-6'>Payment</button>
                            </form>
                        </div>
                        <div className='right xl:w-1/3 lg:w-2/5 w-full lg:pl-4'>
                            <div className="content p-6 rounded-xl border border-line">
                                <div className="list-product md:pb-6 pb-5 border-b border-line">
                                    {cartState.cartArray.map((product) => (
                                        <div
                                            key={product.id}
                                            className="item mt-5"
                                        >
                                            <div className="flex items-center justify-between">
                                                <div className="left flex items-center gap-4 cursor-pointer"
                                                    onClick={() => handleDetailProduct(product.id)}
                                                >
                                                    <div className="bg-img md:w-20 w-16 md:h-20 h-16 border border-line rounded-lg overflow-hidden">
                                                        <Image
                                                            src={product.image}
                                                            width={500}
                                                            height={500}
                                                            alt={product.name}
                                                            className='w-full h-full object-cover'
                                                        />
                                                    </div>
                                                    <div>
                                                        <div className="name text-button capitalize duration-300">{product.name}</div>
                                                        <div className="text-title text-grey capitalize">{product.type}</div>
                                                    </div>
                                                </div>
                                                <div className="text-button">{product.quantity} x ${product.price}.0</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-end justify-between mt-5">
                                    <div className="text-button">Total</div>
                                    <div className="text-button-lg">${totalCart}.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer borderTop={true} />
        </>
    )
}

export default Checkout