'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import { useWishlist } from '@/context/WishlistContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useCart } from '@/context/CartContext';
import { useModalSearchContext } from '@/context/ModalSearchContext';
import { useRouter } from 'next/navigation'

const MenuTwo = () => {
  const pathname = usePathname()
  const { openModalCart } = useModalCartContext()
  const { cartState } = useCart()
  const { openModalWishlist } = useModalWishlistContext()
  const { wishlistState } = useWishlist()
  const { openModalSearch } = useModalSearchContext()
  const [fixedHeader, setFixedHeader] = useState(false)
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const [openMenuMobile, setOpenMenuMobile] = useState(false)
  const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)
  const [searchKeyword, setSearchKeyword] = useState('');
  const router = useRouter()

  const handleSearch = (value: string) => {
    router.push(`/search-result?query=${value}`)
    setSearchKeyword('')
    setOpenMenuMobile(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
      setLastScrollPosition(scrollPosition);
    };

    // Gắn sự kiện cuộn khi component được mount
    window.addEventListener('scroll', handleScroll);

    // Hủy sự kiện khi component bị unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPosition]);

  const handleMenuMobile = () => {
    setOpenMenuMobile((toggleOpen) => !toggleOpen)
  }

  const handleOpenSubNavMobile = (index: number) => {
    setOpenSubNavMobile(openSubNavMobile === index ? null : index)
  }

  return (
    <>
      <div className={`header-menu style-two box-shadow md:h-[80px] h-[60px] ${fixedHeader ? 'fixed' : 'relative'}`}>
        <div className="container mx-auto h-full">
          <div className="header-main flex justify-between h-full relative">

            <div className="menu-main h-full max-lg:hidden">
              <ul className='flex items-center gap-10 h-full'>
                <li className='h-full relative'>
                  <Link href="#!" className={`text-button duration-300 h-full flex items-center justify-center gap-1 ${pathname.includes('/homepages/') ? 'active' : ''}`}>
                    Home
                    <Icon.CaretDown size={12} className='text-grey' />
                  </Link>
                  <ul className='absolute sub-menu bg-white duration-300'>
                    <li>
                      <Link href="/" className='text-button duration-300'>
                        Homepage One
                      </Link>
                    </li>
                    <li>
                      <Link href="/homepages/home2" className={`text-button duration-300 ${pathname === '/homepages/home2' ? 'active' : ''}`}>
                        Homepage Two
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='h-full relative'>
                  <Link href="#!" className={`text-button duration-300 h-full flex items-center justify-center gap-1 first-letter ${pathname.includes('/shop/') ? 'active' : ''}`}>
                    Shop
                    <Icon.CaretDown size={12} className='text-grey' />
                  </Link>
                  <ul className='absolute sub-menu bg-white duration-300'>
                    <li>
                      <Link href="/shop/shop-grid-fullwidth" className={`text-button duration-300 ${pathname === '/shop/shop-grid-fullwidth' ? 'active' : ''}`}>
                        Shop Grid Fullwidth
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/shop-grid-sidebar" className={`text-button duration-300 ${pathname === '/shop/shop-grid-sidebar' ? 'active' : ''}`}>
                        Shop Grid Sidebar
                      </Link>
                    </li>
                    <li>
                      <Link href="/shop/shop-list-sidebar" className={`text-button duration-300 ${pathname === '/shop/shop-list-sidebar' ? 'active' : ''}`}>
                        Shop List Sidebar
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className='h-full'>
                  <Link href="/about" className={`text-button duration-300 h-full flex items-center justify-center ${pathname.includes('/about') ? 'active' : ''}`}>
                    About
                  </Link>
                </li>
                <li className='h-full'>
                  <Link href="/blog" className={`text-button duration-300 h-full flex items-center justify-center ${pathname.includes('/blog') ? 'active' : ''}`}>
                    Blog
                  </Link>
                </li>
                <li className='h-full'>
                  <Link href="/contact" className={`text-button duration-300 h-full flex items-center justify-center ${pathname.includes('/contact') ? 'active' : ''}`}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <Link href={'/'} className='flex items-center justify-center h-full w-fit xl:absolute xl:left-1/2 xl:top-1/2 xl:-translate-x-1/2 xl:-translate-y-1/2'>
              <Image
                src="/images/logo.svg"
                width={400}
                height={300}
                alt="Logo"
                priority={true}
                className='md:h-9 h-7 w-auto'
              />
            </Link>
            <div className="right-content flex gap-8">
              <div className="login-block flex items-center justify-center max-md:hidden">
                <Link href={'/login'} className='text-caption text-secondary'>Login/Register</Link>
              </div>
              <div className="list-icon flex">
                <div className="max-[450px]:hidden search-icon flex items-center justify-center md:pr-5 pr-3 cursor-pointer" onClick={openModalSearch}>
                  <Icon.MagnifyingGlass size={24} color='black' />
                </div>
                <div className="max-[450px]:hidden wishlist-icon flex items-center justify-center md:pr-7 pr-4 relative cursor-pointer"
                  onClick={openModalWishlist}
                >
                  <Icon.Heart size={24} color='black' />
                  <span className="quantity wishlist-quantity absolute md:right-5 md:top-5 right-2 top-2.5 text-xs text-white bg-orange w-5 h-5 flex items-center justify-center rounded-full">
                    {wishlistState.wishlistArray.length}
                  </span>
                </div>
                <div className="max-[450px]:mr-1 cart-icon flex items-center justify-center relative cursor-pointer"
                  onClick={openModalCart}
                >
                  <Icon.Bag size={24} color='black' />
                  <span className="quantity cart-quantity absolute md:top-5 -right-2 top-2.5 text-xs text-white bg-orange w-5 h-5 flex items-center justify-center rounded-full">
                    {cartState.cartArray.length}
                  </span>
                </div>
                <div className="menu-bumburger-icon flex items-center justify-center md:pl-7 pl-4 lg:hidden cursor-pointer" onClick={handleMenuMobile}>
                  <Icon.List size={24} color='black' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="menu-mobile" className={`${openMenuMobile ? 'open' : ''}`}>
        <div className="menu-container bg-white h-full">
          <div className="container h-full">
            <div className="menu-main h-full overflow-hidden">
              <div className="heading py-2 relative flex items-center justify-center">
                <div
                  className="close-menu-mobile-btn absolute right-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center"
                  onClick={handleMenuMobile}
                >
                  <Icon.X size={14} />
                </div>
                <Link href={'/'} className='logo text-center'>
                  <Image
                    src="/images/logo.svg"
                    width={172}
                    height={43}
                    alt="Logo"
                    priority={true}
                    className='max-md:w-[120px]'
                  />
                </Link>
              </div>
              <div className="form-search relative mt-2">
                <Icon.MagnifyingGlass size={20} className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer'
                  onClick={() => {
                    handleSearch(searchKeyword)
                  }} />
                <input type="text" placeholder='Search something...' className=' h-12 rounded-lg border border-line text-sm w-full pl-12 pr-4'
                  value={searchKeyword}
                  onChange={(e) => setSearchKeyword(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchKeyword)} />
              </div>
              <div className="list-nav mt-6">
                <ul>
                  <li
                    className={`${openSubNavMobile === 1 ? 'open' : ''}`}
                    onClick={() => handleOpenSubNavMobile(1)}
                  >
                    <div className={`text-button-lg flex items-center justify-between`}>Home
                      <span className='text-right'>
                        <Icon.CaretRight />
                      </span>
                    </div>
                    <div className="sub-nav-mobile">
                      <div
                        className="back-btn flex items-center gap-2"
                        onClick={() => handleOpenSubNavMobile(1)}
                      >
                        <Icon.CaretLeft />
                        Back
                      </div>
                      <div className="list-nav-item w-full grid grid-cols-2 pt-2 pb-6">
                        <ul>
                          <li>
                            <Link href="/" className={`nav-item-mobile link duration-300 `}>
                              Homepage One
                            </Link>
                          </li>
                          <li>
                            <Link href="/homepages/home2" className={`nav-item-mobile link duration-300 ${pathname === '/homepages/home2' ? 'active' : ''}`}>
                              Home Two
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li
                    className={`${openSubNavMobile === 2 ? 'open' : ''}`}
                    onClick={() => handleOpenSubNavMobile(2)}
                  >
                    <div className={`text-button-lg flex items-center justify-between mt-3`}>Shop
                      <span className='text-right'>
                        <Icon.CaretRight />
                      </span>
                    </div>
                    <div className="sub-nav-mobile">
                      <div
                        className="back-btn flex items-center gap-2"
                        onClick={() => handleOpenSubNavMobile(2)}
                      >
                        <Icon.CaretLeft />
                        Back
                      </div>
                      <div className="list-nav-item w-full grid grid-cols-2 pt-2 pb-6">
                        <ul>
                          <li>
                            <Link href="/shop/shop-grid-fullwidth" className={`nav-item-mobile link duration-300 ${pathname === '/shop/shop-grid-fullwidth' ? 'active' : ''}`}>
                              Shop Grid fullwidth
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop/shop-grid-sidebar" className={`nav-item-mobile link duration-300 ${pathname === '/shop/shop-grid-sidebar' ? 'active' : ''}`}>
                              Shop grid sidebar
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop/shop-list-sidebar" className={`nav-item-mobile link duration-300 ${pathname === '/shop/shop-list-sidebar' ? 'active' : ''}`}>
                              Shop list sidebar
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href={'/about'} className={`text-button-lg flex items-center justify-between mt-3`}>About
                      <span className='text-right'>
                        <Icon.CaretRight />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/blog'} className={`text-button-lg flex items-center justify-between mt-3`}>Blog
                      <span className='text-right'>
                        <Icon.CaretRight />
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href={'/contact'} className={`text-button-lg flex items-center justify-between mt-3`}>Contact
                      <span className='text-right'>
                        <Icon.CaretRight />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MenuTwo