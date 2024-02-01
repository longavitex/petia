'use client'

import React, { useState } from 'react'
import Product from '../Product/Product'
import { ProductType } from '@/type/ProductType'

interface Props {
    data: Array<ProductType>;
    limit: number;
}

const BestSeller: React.FC<Props> = ({ data, limit }) => {
    const [selectedType, setSelectedType] = useState('peach');

    const handleTasteChange = (type: string) => {
        setSelectedType(type);
    };

    const filteredProducts = data.filter(product => product.type === selectedType && product.category === 'smoothies');

    return (
        <>
            <div className="best-seller-block md:pt-20 pt-12">
                <div className="container">
                    <div className="heading text-center">
                        <div className="text-subheading">Best Sellers</div>
                        <div className="text-heading mt-2">Shop By Categories</div>
                    </div>
                    <div className="list-cate flex items-center lg:justify-center md:gap-4 gap-3 mt-6 max-sm:mt-4 max-sm:pb-3">
                        <div 
                            className={`${selectedType === 'peach' ? 'active' : ''} cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white`}
                            onClick={() => handleTasteChange('peach')}
                            >
                            Peach
                        </div>
                        <div 
                            className={`${selectedType === 'blueberry' ? 'active' : ''} cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white`}
                            onClick={() => handleTasteChange('blueberry')}
                            >
                            Blueberry
                        </div>
                        <div 
                            className={`${selectedType === 'strawberry' ? 'active' : ''} cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white`}
                            onClick={() => handleTasteChange('strawberry')}
                            >
                            Strawberry
                        </div>
                        <div 
                            className={`${selectedType === 'watermelon' ? 'active' : ''} cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white`}
                            onClick={() => handleTasteChange('watermelon')}
                            >
                            Watermelon
                        </div>
                        <div 
                            className={`${selectedType === 'mango' ? 'active' : ''} cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white`}
                            onClick={() => handleTasteChange('mango')}
                            >
                            Mango
                        </div>
                        <div 
                            className={`${selectedType === 'apple' ? 'active' : ''} cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white`}
                            onClick={() => handleTasteChange('apple')}
                            >
                            Apple
                        </div>
                        <div 
                            className={`${selectedType === 'mixed-juice' ? 'active' : ''} cate-item text-button md:px-4 md:py-3 px-3 py-2 bg-line rounded-full duration-300 whitespace-nowrap cursor-pointer hover:bg-green hover:text-white`}
                            onClick={() => handleTasteChange('mixed-juice')}
                            >
                            Mixed Juice
                        </div>
                    </div>
                    <div className="list mt-8">
                        <div className="list-product grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 md:gap-5 gap-3 gap-y-5 w-full">
                            {filteredProducts.slice(0, limit).map((prd, index) => (
                                <Product key={index} data={prd} type='col' />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BestSeller