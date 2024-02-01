'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { BlogType } from '@/type/BlogType'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { useRouter } from 'next/navigation'

interface BlogProps {
    data: BlogType
    type: string
}

const Blog: React.FC<BlogProps> = ({ data, type }) => {
    const router = useRouter()

    const handleBlogClick = (blogId: string) => {
        // Go to blog detail with blogId selected
        router.push(`/blog-detail?id=${blogId}`);
    };

    return (
        <>
            {type === "style-one" ? (
                <div
                    className="blog-item cursor-pointer"
                    onClick={() => handleBlogClick(data.id)}
                >
                    <div className="blog-main block h-full">
                        <div className="bg-img relative overflow-hidden rounded-2xl">
                            <Image
                                src={data.thumbImg}
                                width={430}
                                height={288}
                                alt='blog'
                                priority={true}
                                className='w-full duration-300'
                            />
                            <div className="blog-tag absolute left-0 bottom-0 bg-black text-white capitalize text-xs px-3 py-1 inline-block rounded-sm">{data.tag}</div>
                        </div>
                        <div className="blog-infor lg:mt-4 mt-3">
                            <div className="blog-title text-cate duration-300">{data.title}</div>
                            <div className="flex items-center gap-6 gap-y-2 flex-wrap text-caption text-grey lg:mt-3 mt-2">
                                <div className="left flex items-center gap-2">
                                    <Icon.CalendarBlank size={12} color='#888888' />
                                    <div className="date">{data.date}</div>
                                </div>
                                {/* <span className=''>/</span> */}
                                <div className="right flex items-center gap-2">
                                    <Icon.User size={12} color='#888888' />
                                    <div className="author">{data.author}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    {type === "style-main" ? (
                        <div className="blog-item cursor-pointer" onClick={() => handleBlogClick(data.id)}>
                            <div className="blog-main block h-full">
                                <div className="bg-img relative overflow-hidden rounded-2xl">
                                    <Image
                                        src={data.thumbImg}
                                        width={430}
                                        height={288}
                                        alt='blog'
                                        priority={true}
                                        className='w-full duration-300'
                                    />
                                    <div className="blog-tag absolute left-0 bottom-0 bg-black text-white capitalize text-xs px-3 py-1 inline-block rounded-sm">{data.tag}</div>
                                </div>
                                <div className="blog-infor mt-3">
                                    <div className="blog-title text-cate duration-300">{data.title}</div>
                                    <div className="text-title text-secondary mt-2">{data.shortDesc}</div>
                                    <div className="flex items-center gap-6 gap-y-2 flex-wrap text-caption text-grey lg:mt-3 mt-2">
                                        <div className="left flex items-center gap-2">
                                            <Icon.CalendarBlank size={12} color='#888888' />
                                            <div className="date">{data.date}</div>
                                        </div>
                                        <div className="right flex items-center gap-2">
                                            <Icon.User size={12} color='#888888' />
                                            <div className="author">{data.author}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <></>
                    )}
                </>
            )
            }
        </>
    )
}

export default Blog