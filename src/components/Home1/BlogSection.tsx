import React from 'react'
import Blog from '../Blog/Blog';
import { BlogType } from '@/type/BlogType'

interface Props {
    data: Array<BlogType>;
    limit: number;
}

const BlogSection: React.FC<Props> = ({ data, limit }) => {
    return (
        <>
            <div className="blog-block md:py-20 py-12">
                <div className="container">
                    <div className="heading text-center">
                        <div className="text-subheading">News & Events</div>
                        <div className="text-heading mt-2">Latest Updated</div>
                    </div>
                    <div className="list-blog lg:mt-8 mt-6 grid lg:grid-cols-3 sm:grid-cols-2 lg:gap-8 gap-5 max-sm:gap-7">
                        {data.slice(0, limit).map((item, index) => (
                            <Blog data={item} key={index} type='style-one' />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogSection