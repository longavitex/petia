'use client'

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import HeadingPage from '@/components/Other/HeadingPage'
import productData from '@/data/Product.json'
import GridSidebar from '@/components/Shop/GridSidebar'
import Footer from '@/components/Footer/Footer'

const ShopGridSidebar = () => {
    const searchParams = useSearchParams()
    const taste = searchParams.get('taste')
    const category = searchParams.get('category')
    
    return (
        <div className='shop-grid-sidebar'>
            <TopNavTwo />
            <MenuTwo />
            <HeadingPage title="Shop Grid Sidebar" subTitle="Shop Sidebar" />
            <div className="container">
                <GridSidebar data={productData} productPerPage={12} dataTaste={taste} dataCategory={category} />
            </div>
            <Footer borderTop={true} />
        </div>
    )
}

export default ShopGridSidebar