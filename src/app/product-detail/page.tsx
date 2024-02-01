'use client'

import React from 'react';
import { useSearchParams } from 'next/navigation';
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import HeadingPage from '@/components/Other/HeadingPage'
import productData from '@/data/Product.json'
import ProductDetail from '@/components/Product/ProductDetail';
import Footer from '@/components/Footer/Footer'

const ShopGridSidebar = () => {
    const searchParams = useSearchParams()
    let productId = searchParams.get('id')
    if (productId === null) {
        productId = '1'
    }

    return (
        <div className='shop-grid-sidebar'>
            <TopNavTwo />
            <MenuTwo />
            <HeadingPage title="Product Detail" subTitle="Product Detail" />
            <ProductDetail data={productData} productId={productId} />
            <Footer borderTop={true} />
        </div>
    )
}

export default ShopGridSidebar