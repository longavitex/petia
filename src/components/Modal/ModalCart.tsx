'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useModalCartContext } from '@/context/ModalCartContext'
import { useCart } from '@/context/CartContext'
import { useRouter } from 'next/navigation'

const ModalCart = () => {
    const { isModalCartOpen, closeModalCart } = useModalCartContext();
    const { cartState, updateCart, removeFromCart } = useCart()
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

    const handleDetailProduct = (productId: string | number | null) => {
        // Chuyển hướng đến trang shop với category được chọn
        router.push(`/product-detail?id=${productId}`);
        closeModalCart()
    };

    return (
        <>
            <div className={`modal-cart-block`} onClick={closeModalCart}>
                <div
                    className={`modal-cart-main ${isModalCartOpen ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="heading sm:py-6 py-5 sm:px-8 px-5 border-b border-line flex items-center justify-between">
                        <div className="text-cate">Shopping Cart</div>
                        <div
                            className="text-caption text-grey cursor-pointer hover:underline"
                            onClick={closeModalCart}
                        >
                            Close
                        </div>
                    </div>
                    <div className="list-product pb-6 sm:px-8 px-5">
                        {cartState.cartArray.map((product) => (
                            <div
                                key={product.id}
                                className='item sm:py-6 py-5 flex items-center justify-between border-b border-line'
                            >
                                <div
                                    className="infor flex items-center gap-4 cursor-pointer"
                                    onClick={() => handleDetailProduct(product.id)}
                                >
                                    <div className="bg-img">
                                        <Image
                                            src={product.image}
                                            width={300}
                                            height={300}
                                            alt={product.name}
                                            className='w-[90px] aspect-square flex-shrink-0 block border border-line'
                                        />
                                    </div>
                                    <div className=''>
                                        <div className="name text-button capitalize">{product.name}</div>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="product-price text-title">${product.price}.0</div>
                                            <div className="product-origin-price text-title text-grey"><del>${product.originPrice}.0</del></div>
                                        </div>
                                        <div className="quantity-block border border-line w-[100px] py-2 px-2 flex items-center justify-between rounded-lg mt-2">
                                            <Icon.CaretLeft
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    if (product.quantity > 1) {
                                                        handleQuantityChange(product.id, product.quantity - 1)
                                                    }
                                                }}
                                                className={`caption1 cursor-pointer ${product.quantity === 1 ? 'disabled' : ''}`}
                                            />
                                            <div className="text-title">{product.quantity}</div>
                                            <Icon.CaretRight
                                                onClick={(e) => {
                                                    e.stopPropagation()
                                                    handleQuantityChange(product.id, product.quantity + 1)
                                                }}
                                                className='caption1 cursor-pointer'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="remove-cart-btn cursor-pointer" onClick={() => removeFromCart(product.id)}>
                                    <Icon.XCircle weight='fill' className='text-orange text-button-lg duration-300' />
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="footer-modal sm:py-6 py-5 sm:px-8 px-5 border-t bg-white border-line absolute bottom-0 left-0 w-full">
                        <div className="flex items-center justify-between">
                            <div className="text-cate">Subtotal</div>
                            <div className="text-button-lg text-green">$135.0</div>
                        </div>
                        <div className="block-button mt-7">
                            <Link
                                href={'/cart'}
                                className='button-main w-full text-center uppercase'
                                onClick={closeModalCart}
                            >
                                View cart
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalCart