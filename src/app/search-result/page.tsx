'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import Footer from '@/components/Footer/Footer'
import { ProductType } from '@/type/ProductType'
import productData from '@/data/Product.json'
import Product from '@/components/Product/Product'
import HandlePagination from '@/components/Other/HandlePagination'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const SearchResult = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 8;
    const offset = currentPage * productsPerPage;
    let filteredData = productData

    const searchParams = useSearchParams()
    let query = searchParams.get('query') as string

    filteredData = productData.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()) ||
        product.type.toLowerCase().includes(query.toLowerCase())
    );


    if (filteredData.length === 0) {
        filteredData = [{
            id: 'no-data',
            category: 'no-data',
            name: 'no-data',
            rate: 0,
            price: 0,
            originPrice: 0,
            quantityPurchase: 0,
            sale: false,
            quantityRemain: 0,
            image: 'no-data',
            subImage: 'no-data',
            listImage: [],
            type: 'no-data',
            description: 'no-data',
            slug: 'no-data'
        }];
    }


    // Find page number base on filteredData
    const pageCount = Math.ceil(filteredData.length / productsPerPage);

    // If page number 0, set current page = 0
    if (pageCount === 0) {
        setCurrentPage(0);
    }

    // Get product data for current page
    let currentProducts: ProductType[];

    if (filteredData.length > 0) {
        currentProducts = filteredData.slice(offset, offset + productsPerPage);
    } else {
        currentProducts = []
    }

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <div className="shop-product breadcrumb1 lg:py-16 md:py-12 py-8">
                <div className="container">
                    <div className="heading flex items-center">
                        <div className="text-heading">Search results for: {query}</div>
                    </div>
                    <div className="list-product-block relative md:pt-8 pt-5">
                        <div className={`list-product hide-product-sold grid xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 sm:gap-[30px] gap-5`}>
                            {currentProducts.map((item) => (
                                item.id === 'no-data' ? (
                                    <div key={item.id} className="no-data-product text-button-lg col-span-2">No products match the selected criteria.</div>
                                ) : (
                                    <Product key={item.id} data={item} type='col' />
                                )
                            ))}
                        </div>

                        {pageCount > 1 && (
                            <div className="list-pagination flex items-center justify-center md:mt-10 mt-7">
                                <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer borderTop={true} />
        </>
    )
}

export default SearchResult