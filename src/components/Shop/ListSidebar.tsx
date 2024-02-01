'use client'

import React, { useState } from 'react'
import HandlePagination from '../Other/HandlePagination';
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Slider from 'rc-slider'; 
import 'rc-slider/assets/index.css'

interface Props {
    data: Array<ProductType>
    productPerPage: number
    dataTaste: string | null
    dataCategory: string | null
}

const ListSidebar: React.FC<Props> = ({ data, productPerPage, dataTaste, dataCategory }) => {
    const [sortOption, setSortOption] = useState('');
    const [currentPage, setCurrentPage] = useState(0);
    const [category, setCategory] = useState<string | null>();
    const [taste, setTaste] = useState<string | null>(dataTaste);
    const [priceRange, setPriceRange] = useState<{ min: number; max: number }>({ min: 0, max: 100 });
    const productsPerPage = productPerPage;
    const offset = currentPage * productsPerPage;

    const handleSortChange = (option: string) => {
        setSortOption(option);
    };

    const handleCategory = (category: string) => {
        setCategory(prevCategory => prevCategory === category ? null : category)
        setCurrentPage(0);
    }

    const handlePriceChange = (values: number | number[]) => {
        if (Array.isArray(values)) {
            setPriceRange({ min: values[0], max: values[1] });
        }
        setCurrentPage(0);
    };

    const handleTaste = (taste: string) => {
        setTaste(prevTaste => prevTaste === taste ? null : taste)
        setCurrentPage(0);
    }

    // Filter product data by dataTaste
    let filteredData = data.filter(product => {
        let isDataTasteMatched = true;
        if (dataTaste) {
            isDataTasteMatched = product.type === dataTaste
        }

        let isPriceRangeMatched = true;
        if (priceRange.min !== 0 || priceRange.max !== 100) {
            isPriceRangeMatched = product.price >= priceRange.min && product.price <= priceRange.max;
        }

        let isCategoryMatched = true;
        if (category) {
            isCategoryMatched = product.category === category;
        }

        let isTasteMatched = true;
        if (taste) {
            dataTaste = taste
            isTasteMatched = product.type === taste;
        }

        return isDataTasteMatched && isCategoryMatched && isPriceRangeMatched && isTasteMatched
    })

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

    // Tạo một bản sao của mảng đã lọc để sắp xếp
    let sortedData = [...filteredData];

    if (sortOption === 'discountHighToLow') {
        sortedData = filteredData
            .sort((a, b) => (
                (Math.floor(100 - ((b.price / b.originPrice) * 100))) - (Math.floor(100 - ((a.price / a.originPrice) * 100)))
            ))
    }

    if (sortOption === 'priceHighToLow') {
        sortedData = filteredData.sort((a, b) => b.price - a.price)
    }

    if (sortOption === 'priceLowToHigh') {
        sortedData = filteredData.sort((a, b) => a.price - b.price)
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
            <div className="shop-product grid-sidebar flex max-sm:flex-col-reverse gap-y-8 md:pt-10 md:pb-20 pt-6 pb-8">
                <div className="left sidebar lg:w-[18%] sm:w-[25%] w-full">
                    <div className="category-filter">
                        <div className="text-cate">Product categories</div>
                        <div className="list-cate mt-2.5">
                            <div
                                className={`cate-item cursor-pointer block w-fit hover:underline mt-2 ${category === 'smoothies' ? 'active' : ''}`}
                                onClick={() => handleCategory('smoothies')}
                            >
                                Smoothies
                            </div>
                            <div
                                className={`cate-item cursor-pointer block w-fit hover:underline mt-2 ${category === 'fruits' ? 'active' : ''}`}
                                onClick={() => handleCategory('fruits')}
                            >
                                Fresh Fruits
                            </div>
                            <div
                                className={`cate-item cursor-pointer block w-fit hover:underline mt-2 ${category === 'vegetables' ? 'active' : ''}`}
                                onClick={() => handleCategory('vegetables')}
                            >
                                Fresh Vegetables
                            </div>
                            <div
                                className={`cate-item cursor-pointer block w-fit hover:underline mt-2 ${category === 'meats' ? 'active' : ''}`}
                                onClick={() => handleCategory('meats')}
                            >
                                Fresh Meats
                            </div>
                            <div
                                className={`cate-item cursor-pointer block w-fit hover:underline mt-2 ${category === 'grains' ? 'active' : ''}`}
                                onClick={() => handleCategory('grains')}
                            >
                                Fresh Grains
                            </div>
                            <div
                                className={`cate-item cursor-pointer block w-fit hover:underline mt-2 ${category === 'nuts' ? 'active' : ''}`}
                                onClick={() => handleCategory('nuts')}
                            >
                                Fresh Nuts
                            </div>
                        </div>
                    </div>
                    <div className="price-filter md:mt-10 mt-6">
                        <div className="text-cate">Filter by price</div>
                        <Slider
                            range
                            defaultValue={[0, 100]}
                            min={0}
                            max={100}
                            onChange={handlePriceChange}
                            className='mt-5'
                        />
                        <div className="price-block flex items-center mt-3">
                            <div className="text-grey pr-1.5">Price:</div>
                            <div className="min">$
                                <span className='price-min'>{priceRange.min}</span>
                            </div>
                            <div className="line px-1.5">-</div>
                            <div className="max">$
                                <span className='price-max'>{priceRange.max}</span>
                            </div>
                        </div>
                    </div>
                    <div className="taste-filter md:mt-10 mt-6">
                        <div className="text-cate">Filter by taste</div>
                        <div className="list-cate flex items-center gap-2 flex-wrap mt-3">
                            <div
                                className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'mango' ? 'active' : ''}`}
                                onClick={() => handleTaste('mango')}
                            >
                                Mango
                            </div>
                            <div
                                className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'apple' ? 'active' : ''}`}
                                onClick={() => handleTaste('apple')}
                            >
                                Apple
                            </div>
                            <div
                                className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'strawberry' ? 'active' : ''}`}
                                onClick={() => handleTaste('strawberry')}
                            >
                                strawberry
                            </div>
                            <div
                                className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'blueberry' ? 'active' : ''}`}
                                onClick={() => handleTaste('blueberry')}
                            >
                                blueberry
                            </div>
                            <div
                                className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'watermelon' ? 'active' : ''}`}
                                onClick={() => handleTaste('watermelon')}
                            >
                                watermelon
                            </div>
                            <div
                                className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'mixed-juice' ? 'active' : ''}`}
                                onClick={() => handleTaste('mixed-juice')}
                            >
                                mixed juice
                            </div>
                            <div
                                className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'lemon' ? 'active' : ''}`}
                                onClick={() => handleTaste('lemon')}
                            >
                                lemon
                            </div>
                            <div
                                className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'peach' ? 'active' : ''}`}
                                onClick={() => handleTaste('peach')}
                            >
                                peach
                            </div>
                            <div
                                className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'cinnamon' ? 'active' : ''}`}
                                onClick={() => handleTaste('cinnamon')}
                            >
                                cinnamon
                            </div>
                            <div
                                className={`cate-item py-1 px-2 border border-line rounded cursor-pointer inline-block capitalize duration-300 hover:border-black ${dataTaste === 'cumin' ? 'active' : ''}`}
                                onClick={() => handleTaste('cumin')}
                            >
                                cumin
                            </div>
                        </div>
                    </div>
                </div>
                <div className="right sm:pl-[60px] lg:w-[82%] sm:w-[75%] w-full">
                    <div className="shop-heading flex items-center justify-between flex-wrap gap-5 gap-y-4">
                        <div className="select-block relative">
                            <select
                                id="selectFilter"
                                name="select-filter"
                                className='text-title py-2 md:pl-4 pl-3 md:pr-10 pr-8 rounded-lg border border-line'
                                onChange={(e) => { handleSortChange(e.target.value) }}
                                defaultValue={'Sorting'}
                            >
                                <option value="Sorting" disabled>Sorting</option>
                                <option value="discountHighToLow">Best Discount</option>
                                <option value="priceHighToLow">Price High To Low</option>
                                <option value="priceLowToHigh">Price Low To High</option>
                            </select>
                            <Icon.CaretDown size={12} className='absolute top-1/2 -translate-y-1/2 md:right-4 right-2' />
                        </div>
                        <div className="right flex items-center gap-5">
                            <div className="text-caption">Showing 1–12 of 40 results</div>
                            <div className="change-layout flex items-center gap-3">
                                <div className="btn-grid flex items-center justify-center w-8 h-8 rounded border border-line">
                                    <Icon.List size={18} color='#A0A0A0' weight='bold' />
                                </div>
                                <div className="btn-list flex items-center justify-center w-8 h-8 rounded border border-line">
                                    <Icon.List size={18} color='#A0A0A0' weight='bold' className='rotate-90' />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="list-product flex flex-col md:gap-10 gap-6 md:mt-10 mt-6">
                        {currentProducts.map((item) => (
                            item.id === 'no-data' ? (
                                <div key={item.id} className="no-data-product">No products match the selected criteria.</div>
                            ) : (
                                <Product key={item.id} data={item} type='list' />
                            )
                        ))}
                    </div>

                    {pageCount > 1 && (
                        <div className="list-pagination flex items-center justify-center md:mt-10 mt-6">
                            <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default ListSidebar