'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css/bundle';
import * as Icon from "@phosphor-icons/react/dist/ssr";
import SwiperCore from 'swiper/core';
import Rate from '../Other/Rate';
import { useModalQuickviewContext } from '@/context/ModalQuickviewContext'
import { useWishlist } from '@/context/WishlistContext'
import { useCart } from '@/context/CartContext';
import { useModalCartContext } from '@/context/ModalCartContext';
import { ProductType } from '@/type/ProductType';

const ModalQuickview = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
    const { selectedProduct, closeQuickview } = useModalQuickviewContext();
    const { wishlistState, addToWishlist, removeFromWishlist } = useWishlist()
    const { cartState, updateCart, addToCart } = useCart()
    const { openModalCart } = useModalCartContext()

    const handleSwiper = (swiper: SwiperCore) => {
        setThumbsSwiper(swiper);
    };

    const handleAddToWishlist = () => {
        if (!wishlistState.wishlistArray.find(item => item.id === selectedProduct?.id)) {
            addToWishlist(selectedProduct as ProductType);
        } else {
            if (selectedProduct) {
                removeFromWishlist(selectedProduct?.id)
            }
        }
    };

    const handleIncreaseQuantity = () => {
        if (selectedProduct) {
            selectedProduct.quantityPurchase += 1
            updateCart(selectedProduct.id, selectedProduct.quantityPurchase + 1);
        }
    };

    const handleDecreaseQuantity = () => {
        if (selectedProduct && selectedProduct.quantityPurchase > 1) {
            selectedProduct.quantityPurchase -= 1
            updateCart(selectedProduct.id, selectedProduct.quantityPurchase - 1);
        }
    };

    const handleAddToCart = () => {
        if (selectedProduct) {
            if (!cartState.cartArray.find(item => item.id === selectedProduct.id)) {
                addToCart({ ...selectedProduct });
                updateCart(selectedProduct.id, selectedProduct.quantityPurchase)
            } else {
                updateCart(selectedProduct.id, selectedProduct.quantityPurchase)
            }
            openModalCart()
            closeQuickview()
        }
    };

    return (
        <>
            <div className={`modal-quickview-block`} onClick={closeQuickview}>
                <div
                    className={`modal-quickview-main ${selectedProduct ? 'open' : ''}`}
                    onClick={(e) => { e.stopPropagation() }}
                >
                    <div className="flex max-md:flex-col lg:gap-10 gap-8 gap-y-4 md:px-10 px-6 md:py-8 py-6">
                        <div className="left md:w-[45%] flex items-center justify-center flex-shrink-0">
                            <div className="list-img w-full max-md:w-[80%] max-sm:w-full">
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={0}
                                    thumbs={{ swiper: thumbsSwiper }}
                                    modules={[Thumbs]}
                                    className="mySwiper border border-line rounded-2xl overflow-hidden"
                                >
                                    {selectedProduct?.listImage.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <Image
                                                key={index}
                                                src={item}
                                                width={1000}
                                                height={1000}
                                                alt='prd-img'
                                                priority={true}
                                                className='w-full object-cover'
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                <Swiper
                                    onSwiper={handleSwiper}
                                    spaceBetween={0}
                                    slidesPerView={4}
                                    freeMode={true}
                                    watchSlidesProgress={true}
                                    modules={[Navigation, Thumbs]}
                                    className="mySwiper2 mt-3 pb-2"
                                >
                                    {selectedProduct?.listImage.map((item, index) => (
                                        <SwiperSlide key={index} className='rounded-lg'>
                                            <Image
                                                key={index}
                                                src={item}
                                                width={1000}
                                                height={1000}
                                                alt='prd-img'
                                                priority={true}
                                                className='w-full h-full object-cover rounded-xl'
                                            />
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                        <div className="right w-full">
                            <div className="product-infor">
                                <div className="heading">
                                    <div className="text-cate capitalize pb-3">{selectedProduct?.name}</div>
                                    <div className="flex items-center gap-1">
                                        <Rate currentRate={selectedProduct?.rate} />
                                        <div className="text-caption text-grey">(6 reviews)</div>
                                    </div>
                                    <div className="price flex items-end gap-3 mt-1">
                                        <div className="text-button-lg">${selectedProduct?.price}.0</div>
                                        <div className="product-origin-price text-button text-grey"><del>${selectedProduct?.originPrice}.0</del></div>
                                    </div>
                                </div>
                                <div className="desc text-secondary mt-3">{selectedProduct?.description}</div>
                                <div className="more-infor mt-4">
                                    <div className="flex items-center gap-1 capitalize">
                                        <div className="text-secondary">Categories:</div>
                                        <p>{selectedProduct?.category}</p>
                                    </div>
                                    <div className="flex items-center gap-1 capitalize mt-1">
                                        <div className="text-secondary">Type:</div>
                                        <p>{selectedProduct?.type}</p>
                                    </div>
                                </div>
                                <div className="list-action flex items-center flex-wrap gap-5 mt-4">
                                    <div className="text-title text-secondary">Quantity:</div>
                                    <div className="quantity-block md:p-3 p-2 flex items-center justify-between rounded-lg border border-line md:w-[120px] w-[100px] md:h-[50px] h-[42px]">
                                        <Icon.Minus
                                            size={16}
                                            className={`cursor-pointer ${selectedProduct?.quantityPurchase === 1 ? 'disabled' : ''}`}
                                            onClick={handleDecreaseQuantity}
                                        />
                                        <div className="body1 font-semibold">{selectedProduct?.quantityPurchase}</div>
                                        <Icon.Plus
                                            size={16}
                                            className='cursor-pointer'
                                            onClick={handleIncreaseQuantity}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 mt-5">
                                    <div className="button-main bg-orange cursor-pointer h-[50px] flex items-center gap-2" onClick={handleAddToCart}>
                                        <span>
                                            <Icon.Bag size={18} weight='bold' />
                                        </span>
                                        Add To Cart
                                    </div>
                                    <div
                                        className={`add-wishlist-btn w-[50px] h-[50px] flex items-center justify-center border border-line rounded-xl bg-white duration-300 relative cursor-pointer ${wishlistState.wishlistArray.some(item => item.id === selectedProduct?.id) ? 'added-wishlist' : ''}`}
                                        onClick={handleAddToWishlist}
                                    >
                                        {
                                            wishlistState.wishlistArray.some(item => item.id === selectedProduct?.id) ?
                                                <Icon.Heart size={22} weight='fill' className='text-orange' /> :
                                                <Icon.Heart size={22} weight='bold' />
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalQuickview