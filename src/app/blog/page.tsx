'use client'

import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Image from 'next/image'
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import HeadingPage from '@/components/Other/HeadingPage'
import blogData from '@/data/Blog.json'
import Blog from '@/components/Blog/Blog'
import HandlePagination from '@/components/Other/HandlePagination'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Footer from '@/components/Footer/Footer'
import { useRouter } from 'next/navigation'
import { BlogType } from '@/type/BlogType';

const BlogPage = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const productsPerPage = 7;
    const offset = currentPage * productsPerPage;
    const router = useRouter()
    const searchParams = useSearchParams()
    let dataCategory = searchParams.get('category')
    const [category, setCategory] = useState<string | null>(dataCategory);
    const [species, setSpecies] = useState<string | null>();

    const handleCategory = (category: string) => {
        setCategory(prevCategory => prevCategory === category ? null : category)
        setCurrentPage(0);
    }

    const handleSpecies = (species: string) => {
        setSpecies(prevSpecies => prevSpecies === species ? null : species)
        setCurrentPage(0);
    }

    const handleBlogClick = (blogId: string) => {
        // Go to blog detail with blogId selected
        router.push(`/blog-detail?id=${blogId}`);
    };


    let filteredData = blogData.filter(product => {
        let isCategoryMatched = true;
        if (category) {
            isCategoryMatched = product.category === category;
        }

        let isSpeciesMatched = true;
        if (species) {
            isSpeciesMatched = product.species === species;
        }

        return isCategoryMatched && isSpeciesMatched
    })

    if (filteredData.length === 0) {
        filteredData = [{
            id: "no-data",
            category: "no-data",
            species: "no-data",
            tag: "no-data",
            title: "no-data",
            date: "no-data",
            author: "no-data",
            thumbImg: "",
            coverImg: "",
            subImg: [
                "no-data",
                "no-data"
            ],
            shortDesc: "no-data",
            description: "no-data",
            slug: "no-data"
        }];
    }

    const pageCount = Math.ceil(filteredData.length / productsPerPage);

    // If page number 0, set current page = 0
    if (pageCount === 0) {
        setCurrentPage(0);
    }

    let currentBlog: BlogType[];

    if (filteredData.length > 0) {
        currentBlog = filteredData.slice(offset, offset + productsPerPage);
    } else {
        currentBlog = []
    }

    const handlePageChange = (selected: number) => {
        setCurrentPage(selected);
    };

    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <HeadingPage title="Our Blog" subTitle="Our Blog" />
            <div className="blog-page md:py-20 py-12">
                <div className="container">
                    <div className="flex justify-between max-lg:flex-col gap-y-12">
                        <div className="left lg:w-2/3 lg:pr-4">
                            <div className="list-blog grid sm:grid-cols-2 sm:gap-y-10 gap-8">
                                {currentBlog.map(item => (
                                    item.id === 'no-data' ? (
                                        <div key={item.id} className="no-data-product">No products match the selected criteria.</div>
                                    ) : (
                                        <Blog key={item.id} data={item} type='style-main' />
                                    )
                                ))}
                            </div>
                            {pageCount > 1 && (
                                <div className="list-pagination flex items-center md:mt-10 mt-6">
                                    <HandlePagination pageCount={pageCount} onPageChange={handlePageChange} />
                                </div>
                            )}
                        </div>
                        <div className="right xl:w-1/4 lg:w-1/3 xl:pl-4 lg:pl-10">
                            <form className='form-search relative w-full h-[42px]'>
                                <input className='py-2 px-4 w-full h-full border border-line rounded-lg' type="text" placeholder='Search' />
                                <button>
                                    <Icon.MagnifyingGlass className='text-button-lg absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer' />
                                </button>
                            </form>
                            <div className="filter-category md:mt-10 mt-6">
                                <div className="text-button-lg">Categories</div>
                                <div className="list-cate mt-4">
                                    {['food', 'bed', 'outfit', 'toy'].map((item, index) => (
                                        <div
                                            key={index}
                                            className={`cate-item flex items-center justify-between cursor-pointer mt-3 ${category === item ? 'active' : ''}`}
                                            onClick={() => handleCategory(item)}
                                        >
                                            <div className='capitalize has-line line-black'>{item}</div>
                                            <div className="text-title text-secondary">
                                                {blogData.filter(blog => blog.category === item).length}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="recent md:mt-10 mt-6">
                                <div className="text-button-lg">Recent Posts</div>
                                <div className="list-recent mt-1">
                                    {blogData.slice(10, 14).map(item => (
                                        <div className="item flex gap-3 mt-4 cursor-pointer" key={item.id} onClick={() => handleBlogClick(item.id)}>
                                            <Image
                                                src={item.thumbImg}
                                                width={500}
                                                height={400}
                                                alt={item.thumbImg}
                                                className='w-[100px] rounded-lg object-cover flex-shrink-0'
                                            />
                                            <div>
                                                <div className="text-title">{item.title}</div>
                                                <div className="text-secondary text-caption flex items-center gap-2">
                                                    <Icon.CalendarBlank className='' />
                                                    <div className="date">{item.date}</div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="filter-tags md:mt-10 mt-6">
                                <div className="text-button-lg">Tags Cloud</div>
                                <div className="list-tags flex items-center flex-wrap gap-3 mt-4">
                                    {['dog', 'cat', 'rabbit', 'parrot', 'mouse'].map((item, index) => (
                                        <div
                                            key={index}
                                            className={`tags bg-surface py-1 px-3 rounded cursor-pointer capitalize duration-300 hover:bg-black hover:text-white ${species === item ? 'active' : ''}`}
                                            onClick={() => handleSpecies(item)}
                                        >
                                            {item}
                                        </div>
                                    ))}
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

export default BlogPage