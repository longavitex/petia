'use client'

import React, { useState } from 'react'
import Link from 'next/link';
import TopNavTwo from '@/components/Headers/TopNav/TopNavTwo'
import MenuTwo from '@/components/Headers/Menu/MenuTwo'
import HeadingPage from '@/components/Other/HeadingPage'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import Footer from '@/components/Footer/Footer'

const Login = () => {
    return (
        <>
            <TopNavTwo />
            <MenuTwo />
            <HeadingPage title="Login" subTitle="Login" />
            <div className="login-page md:py-20 py-12">
                <div className="container">
                    <div className="content flex items-center justify-center">
                        <div id="form-login" className='xl:w-1/3 lg:w-1/2 sm:w-2/3 w-full sm:p-12 p-8 border-4 border-line'>
                            <div className="text-heading text-center">Login</div>
                            <form className="md:mt-10 mt-6">
                                <div className="email ">
                                    <label htmlFor="username" className='text-title'>Username or email address*</label>
                                    <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg mt-2" id="username" type="email" placeholder="" required />
                                </div>
                                <div className="pass mt-5">
                                    <label htmlFor="password" className='text-title'>Password*</label>
                                    <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg mt-2" id="password" type="password" placeholder="" required />
                                </div>
                                <div className="flex items-center justify-between flex-wrap mt-5">
                                    <div className='flex items-center'>
                                        <div className="checkbox-input">
                                            <input
                                                type="checkbox"
                                                name='remember'
                                                id='remember'
                                            />
                                            <Icon.CheckSquare size={20} weight='fill' className='icon-checkbox' />
                                        </div>
                                        <label htmlFor='remember' className="pl-2 cursor-pointer text-caption text-secondary">Remember me</label>
                                    </div>
                                    <Link href={'#!'} className='text-caption text-secondary hover:underline'>Forget Your Password?</Link>
                                </div>
                                <div className="block-button md:mt-6 mt-4">
                                    <button className="button-main w-full text-center">Login</button>
                                </div>
                            </form>
                            <div className="flex items-center justify-center gap-1 mt-8">
                                <div className="text-caption text-secondary">Not a member?</div>
                                <Link href={'/register'} className='text-caption text-black hover:underline'>Register</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer borderTop={true} />
        </>
    )
}

export default Login