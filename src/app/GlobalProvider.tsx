import React from 'react'
import { CartProvider } from '@/context/CartContext'
import { ModalCartProvider } from '@/context/ModalCartContext'
import { WishlistProvider } from '@/context/WishlistContext'
import { ModalWishlistProvider } from '@/context/ModalWishlistContext'
import { ModalQuickviewProvider } from '@/context/ModalQuickviewContext'
import { ModalSearchProvider } from '@/context/ModalSearchContext'

const GlobalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <CartProvider>
            <ModalCartProvider>
                <WishlistProvider>
                    <ModalWishlistProvider>
                        <ModalQuickviewProvider>
                            <ModalSearchProvider>
                                {children}
                            </ModalSearchProvider>
                        </ModalQuickviewProvider>
                    </ModalWishlistProvider>
                </WishlistProvider>
            </ModalCartProvider>
        </CartProvider>
    )
}

export default GlobalProvider