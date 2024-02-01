'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useModalWishlistContext } from '@/context/ModalWishlistContext'
import { useWishlist } from '@/context/WishlistContext'
import { useRouter } from 'next/navigation'

const ModalWishlist = () => {
    const { isModalWishlistOpen, closeModalWishlist } = useModalWishlistContext();
    const { wishlistState, removeFromWishlist } = useWishlist()
    const router = useRouter()

    const handleDetailProduct = (productId: string | number | null) => {
        // Chuyển hướng đến trang shop với category được chọn
        router.push(`/product-detail?id=${productId}`);
        closeModalWishlist()
    };

    return (
        <>
            <div className={`modal-wishlist-block`} onClick={closeModalWishlist}>
                <div
                    className={`modal-wishlist-main ${isModalWishlistOpen ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="heading sm:py-6 py-5 sm:px-8 px-5 border-b border-line flex items-center justify-between">
                        <div className="text-cate">Wish List</div>
                        <div
                            className="text-caption text-grey cursor-pointer hover:underline"
                            onClick={closeModalWishlist}
                        >
                            Close
                        </div>
                    </div>
                    <div className="list-product pb-6 sm:px-8 px-5">
                        {wishlistState.wishlistArray.map((product) => (
                            <div 
                            key={product.id} 
                                className='item sm:py-6 py-5 flex items-center justify-between border-b border-line cursor-pointer'
                                onClick={() => handleDetailProduct(product.id)}
                            >
                                <div className="infor flex items-center gap-3">
                                    <div className="bg-img">
                                        <Image
                                            src={product.image}
                                            width={300}
                                            height={300}
                                            alt={product.name}
                                            className='w-[90px] aspect-square block border border-line'
                                        />
                                    </div>
                                    <div className=''>
                                        <div className="name text-button">{product.name}</div>
                                        <div className="flex items-center gap-2 mt-2">
                                            <div className="product-price text-title">${product.price}.0</div>
                                            <div className="product-origin-price text-title text-grey"><del>${product.originPrice}.0</del></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="remove-wishlist-btn cursor-pointer" onClick={() => removeFromWishlist(product.id)}>
                                    <Icon.XCircle weight='fill' className='text-orange text-button-lg duration-300' />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalWishlist