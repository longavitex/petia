import React from 'react'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";

interface Props {
    title: string
    subTitle: string
}

const HeadingPage: React.FC<Props> = ({ title, subTitle }) => {
    return (
        <>
            <div className="heading-page">
                <div className="container">
                    <div className="flex items-center justify-between flex-wrap gap-3 md:pt-8 md:pb-9 pt-5 pb-6 border-b border-line">
                        <div className="text-heading">{title}</div>
                        <div className="right flex items-center gap-2">
                            <Link href={'/'} className='text-title text-grey hover:underline'>Home</Link>
                            <Icon.CaretRight color='#9FA09C' weight='bold' />
                            <div className='text-title'>{subTitle}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeadingPage