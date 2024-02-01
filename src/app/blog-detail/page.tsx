'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { useRouter } from 'next/navigation'
import { useSearchParams } from 'next/navigation';
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import blogData from '@/data/Blog.json'
import Rate from '@/components/Other/Rate';
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const BlogDetail = () => {
    const router = useRouter()
    const searchParams = useSearchParams()
    let blogId = searchParams.get('id')
    if (blogId === null) {
        blogId = '1'
    }

    const handleCategory = (category: string) => {
        // Go to blog detail with category selected
        router.push(`/blog?category=${category}`);
    };

    const blogMain = blogData[Number(blogId) - 1]

    const handleBlogClick = (blogId: string) => {
        // Go to blog detail with blogId selected
        router.push(`/blog-detail?id=${blogId}`);
    };

    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <div className="blog-page ">
                <div className="bg-img">
                    <Image
                        src={blogMain.thumbImg}
                        width={4000}
                        height={3000}
                        alt={blogMain.thumbImg}
                        className='w-full object-cover xl:h-[600px] sm:h-[450px] h-[280px]'
                    />
                </div>
                <div className="container">
                    <div className="bg-white sm:-mt-16 sm:px-10 lg:pb-20 md:pb-12 pb-8 lg:pt-16 md:pt-12 pt-8 flex justify-between max-lg:flex-col gap-y-12 relative">
                        <div className="left lg:w-2/3 w-full">
                            <div className="text-subheading">{blogMain.tag}</div>
                            <div className="text-heading mt-3">{blogMain.title}</div>
                            <div className="flex items-center gap-6 gap-y-2 flex-wrap text-caption text-grey mt-4">
                                <div className="left flex items-center gap-2">
                                    <Icon.CalendarBlank size={12} className='text-caption text-grey' />
                                    <div className="date">{blogMain.date}</div>
                                </div>
                                <div className="right flex items-center gap-2">
                                    <Icon.User size={12} className='text-caption text-grey' />
                                    <div className="author">{blogMain.author}</div>
                                </div>
                            </div>
                            <div className="desc mt-8">
                                <div className="text-title text-secondary">{blogMain.description}</div>
                                <div className="text-title text-secondary mt-4">I think of this as a sheet pan sandwich recipe. You roast a bunch of mushrooms and scallions in a hot oven as your main components. And you whip up a simple poblano yogurt while those are roasting. Pile everything high on top of hearty slices of well-toasted bread, and you{String.raw`'re'`} set.</div>
                                <div className="quote-block mt-6 sm:py-6 py-5 md:px-8 px-6 bg-surface md:rounded-[20px] rounded-2xl flex max-sm:flex-col items-center md:gap-8 gap-3">
                                    <div className="bg-green w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                                        <Icon.Quotes className='text-white text-3xl rotate-180' weight='fill' />
                                    </div>
                                    <div>
                                        <div className="text-button-lg max-sm:text-center">We{String.raw`’ve`} carefully selected these blogs because they are actively working to educate, inspire, and empower their readers with frequent updates and high-quality information. If you would like to tell us about a blog, nominate them by emailing us!</div>
                                    </div>
                                </div>
                                <div className="text-title text-secondary mt-6">Many people will claim that it{String.raw`s`} harmful to be on a vegan diet when you are pregnant. {String.raw`‘`}What about the essential proteins?{String.raw`’`}, they{String.raw`’ll`} ask. However, good news is that any meal plan is safe as long as it is well-balanced and meets the specific nutritional requirements of a future mother.</div>
                                <div className="grid sm:grid-cols-2 gap-[30px] mt-6">
                                    {blogMain.subImg.map((item, index) => (
                                        <Image
                                            key={index}
                                            src={item}
                                            width={3000}
                                            height={2000}
                                            alt={item}
                                            className='w-full rounded-2xl'
                                        />
                                    ))}
                                </div>
                                <div className="text-title text-secondary mt-6">So, is vegan diet healthy, too? The simple answer to this is, yes. A well-planned, balanced vegan diet can definitely help you during and post pregnancy, and also ensure that you deliver a strong and healthy baby.</div>
                                <div className="text-title text-secondary mt-4">{blogMain.description}</div>
                            </div>
                            <div className="action flex items-center justify-between flex-wrap gap-5 md:mt-8 mt-5">
                                <div className="left flex items-center gap-3 flex-wrap">
                                    <p>Tag:</p>
                                    <div className="list flex items-center gap-3 flex-wrap">
                                        <div
                                            className={`tags bg-surface py-1.5 px-4 rounded-full text-button-uppercase cursor-pointer duration-300 hover:bg-black hover:text-white`}
                                            onClick={() => handleCategory('smoothies')}
                                        >
                                            smoothies
                                        </div>
                                        <div
                                            className={`tags bg-surface py-1.5 px-4 rounded-full text-button-uppercase cursor-pointer duration-300 hover:bg-black hover:text-white`}
                                            onClick={() => handleCategory('fruits')}
                                        >
                                            fruits
                                        </div>
                                        <div
                                            className={`tags bg-surface py-1.5 px-4 rounded-full text-button-uppercase cursor-pointer duration-300 hover:bg-black hover:text-white`}
                                            onClick={() => handleCategory('grains')}
                                        >
                                            grains
                                        </div>
                                    </div>
                                </div>
                                <div className="right list-social flex items-center gap-3 flex-wrap">
                                    <p>Share:</p>
                                    <div className="list flex items-center gap-3 flex-wrap">
                                        <Link href={'https://www.facebook.com/'} target='_blank' className='text-button-lg text-grey hover:text-black'>
                                            <Icon.FacebookLogo weight='fill' />
                                        </Link>
                                        <Link href={'https://www.instagram.com/'} target='_blank' className='text-button-lg text-grey hover:text-black'>
                                            <Icon.InstagramLogo />
                                        </Link>
                                        <Link href={'https://www.twitter.com/'} target='_blank' className='text-button-lg text-grey hover:text-black'>
                                            <Icon.TwitterLogo weight='fill' />
                                        </Link>
                                        <Link href={'https://www.youtube.com/'} target='_blank' className='text-button-lg text-grey hover:text-black'>
                                            <Icon.YoutubeLogo weight='fill' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="next-pre flex max-sm:flex-col gap-y-6 sm:items-center justify-between md:mt-8 mt-5 py-6 border-y border-line">
                                {blogId === '1' ? (
                                    <>
                                        <div className="left cursor-pointer"
                                            onClick={() => handleBlogClick(String(blogData.length))}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Previous</div>
                                            <div className="text-title duration-300 mt-1">{blogData[blogData.length - 1].title}</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="left cursor-pointer"
                                            onClick={() => handleBlogClick(blogData[Number(blogId) - 2].id)}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Previous</div>
                                            <div className="text-title duration-300 mt-1">{blogData[Number(blogId) - 2].title}</div>
                                        </div>
                                    </>
                                )}
                                {Number(blogId) === blogData.length ? (
                                    <>
                                        <div className="right sm:text-right cursor-pointer"
                                            onClick={() => handleBlogClick('1')}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Next</div>
                                            <div className="text-title mt-2">{blogData[0].title}</div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="right sm:text-right cursor-pointer"
                                            onClick={() => handleBlogClick(blogData[Number(blogId)].id)}
                                        >
                                            <div className="text-button-uppercase text-secondary2">Next</div>
                                            <div className="text-title mt-2">{blogData[Number(blogId)].title}</div>
                                        </div>
                                    </>
                                )}

                            </div>
                            <div className="list-comment md:mt-10 mt-6">
                                <div className="heading flex items-center justify-between flex-wrap gap-4">
                                    <div className="text-cate">03 Comments</div>
                                </div>
                                <div className="list-review mt-6">
                                    <div className="item">
                                        <div className="heading flex items-center justify-between">
                                            <div className="user-infor flex gap-3">
                                                <div className="avatar">
                                                    <Image
                                                        src={'/images/avatar/5.jpg'}
                                                        width={200}
                                                        height={200}
                                                        alt='img'
                                                        className='w-[52px] aspect-square rounded-full'
                                                    />
                                                </div>
                                                <div className="user">
                                                    <div className="text-button">David Luiz</div>
                                                    <div className="text-caption text-grey">August 13, 2024</div>
                                                </div>
                                            </div>
                                            <div className="more-action cursor-pointer">
                                                <Icon.DotsThree size={24} weight='bold' />
                                            </div>
                                        </div>
                                        <div className="text-title mt-2">Metus vestibulum condimentum condimentum interdum suspendisse nostra id viverra aliquam curae dictum habitant cum venenatis a sem parturient eu ipsum suspendisse morbi suspendisse imperdiet curae commodo class.</div>
                                        <Link href={'#form-review'} className="reply-btn text-secondary mt-3">Reply</Link>
                                    </div>
                                    <div className="item mt-6">
                                        <div className="heading flex items-center justify-between">
                                            <div className="user-infor flex gap-3">
                                                <div className="avatar">
                                                    <Image
                                                        src={'/images/avatar/4.jpg'}
                                                        width={200}
                                                        height={200}
                                                        alt='img'
                                                        className='w-[52px] aspect-square rounded-full'
                                                    />
                                                </div>
                                                <div className="user">
                                                    <div className="text-button">Alex Vidal</div>
                                                    <div className="text-caption text-grey">August 13, 2024</div>
                                                </div>
                                            </div>
                                            <div className="more-action cursor-pointer">
                                                <Icon.DotsThree size={24} weight='bold' />
                                            </div>
                                        </div>
                                        <div className="text-title mt-2">Metus vestibulum condimentum condimentum interdum suspendisse nostra id viverra aliquam curae dictum habitant cum venenatis a sem parturient eu ipsum suspendisse morbi suspendisse imperdiet curae commodo class.</div>
                                        <Link href={'#form-review'} className="reply-btn text-secondary mt-3">Reply</Link>
                                    </div>
                                    <div className="item mt-6">
                                        <div className="heading flex items-center justify-between">
                                            <div className="user-infor flex gap-3">
                                                <div className="avatar">
                                                    <Image
                                                        src={'/images/avatar/3.jpg'}
                                                        width={200}
                                                        height={200}
                                                        alt='img'
                                                        className='w-[52px] aspect-square rounded-full'
                                                    />
                                                </div>
                                                <div className="user">
                                                    <div className="text-button">Christin Haley</div>
                                                    <div className="text-caption text-grey">August 13, 2024</div>
                                                </div>
                                            </div>
                                            <div className="more-action cursor-pointer">
                                                <Icon.DotsThree size={24} weight='bold' />
                                            </div>
                                        </div>
                                        <div className="text-title mt-2">Metus vestibulum condimentum condimentum interdum suspendisse nostra id viverra aliquam curae dictum habitant cum venenatis a sem parturient eu ipsum suspendisse morbi suspendisse imperdiet curae commodo class.</div>
                                        <Link href={'#form-review'} className="reply-btn text-secondary mt-3">Reply</Link>
                                    </div>
                                </div>
                                <div id="form-review" className='form-review md:p-8 p-5 bg-surface rounded-xl md:mt-10 mt-6'>
                                    <div className="text-cate">Leave A comment</div>
                                    <form className="grid sm:grid-cols-2 gap-4 gap-y-5 md:mt-6 mt-3">
                                        <div className="name ">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="username" type="text" placeholder="Your Name *" required />
                                        </div>
                                        <div className="mail ">
                                            <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" placeholder="Your Email *" required />
                                        </div>
                                        <div className="col-span-full message">
                                            <textarea className="border border-line px-4 py-3 w-full rounded-lg" id="message" name="message" rows={3} placeholder="Your message *" required ></textarea>
                                        </div>
                                        <div className="col-span-full sm:pt-3">
                                            <button className='button-main'>Post Comment</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="right lg:w-1/4 w-full">
                            <form className='form-search relative w-full h-[42px]'>
                                <input className='py-2 px-4 w-full h-full border border-line rounded-lg' type="text" placeholder='Search' />
                                <button>
                                    <Icon.MagnifyingGlass className='text-button-lg absolute top-1/2 -translate-y-1/2 right-4 cursor-pointer' />
                                </button>
                            </form>
                            <div className="filter-category md:mt-10 mt-6">
                                <div className="text-button-lg">Categories</div>
                                <div className="list-cate mt-4">
                                    {['smoothies', 'fruit', 'vegetables', 'grains'].map((item, index) => (
                                        <div
                                            key={index}
                                            className={`cate-item flex items-center justify-between cursor-pointer mt-3`}
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
                                                <div className="text-title duration-300">{item.title}</div>
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
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Smoothies</div>
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Vegetables</div>
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Fruits</div>
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Health</div>
                                    <div className="tags bg-surface py-1 px-3 rounded cursor-pointer duration-300 hover:bg-black hover:text-white">Grains</div>
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

export default BlogDetail