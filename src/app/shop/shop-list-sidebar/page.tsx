'use client'

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import HeadingPage from '@/components/Other/HeadingPage'
import productData from '@/data/Product.json'
import ListSidebar from '@/components/Shop/ListSidebar'
import Footer from '@/components/Footer/Footer'

const ShopListSidebar = () => {
    const searchParams = useSearchParams()
    const taste = searchParams.get('taste')
    const category = searchParams.get('category')
    
    return (
        <div className='shop-grid-sidebar'>
            <TopNavTwo />
            <MenuTwo />
            <HeadingPage title="Shop List Sidebar" subTitle="Shop List" />
            <div className="container">
                <ListSidebar data={productData} productPerPage={5} dataTaste={taste} dataCategory={category} />
            </div>
            <Footer borderTop={true} />
        </div>
    )
}

export default ShopListSidebar