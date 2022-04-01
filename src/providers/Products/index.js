import { createContext, useContext, useState } from "react";

const ProductContext = createContext({});

export const ProductProvider = ({ children }) => {
    const productListDatabase = [
        { id: 1, name: "iPhone 13 Pro Max 256gb - Grafite", price: 25000.00, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-graphite-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000" },
        { id: 2, name: "iPhone 13 Pro 256gb - Dourado", price: 21000.00, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-pro-max-gold-select?wid=470&hei=556&fmt=png-alpha&.v=1631652956000" },
        { id: 3, name: "iPhone 13 256gb - Meia noite", price: 19000.00, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-13-midnight-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1629907844000" },
        { id: 4, name: "iPhone 12 256gb - Roxo", price: 15000.00, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-purple-select-2021?wid=470&hei=556&fmt=png-alpha&.v=1617130317000" },
        { id: 5, name: "iPhone 12 Mini 256gb - Preto", price: 11000.00, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-12-mini-black-select-2020?wid=470&hei=556&fmt=png-alpha&.v=1604343705000" },
        { id: 6, name: "iPhone 11 256gb - (Product) RED", price: 9000.00, image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-red-select-2019?wid=470&hei=556&fmt=png-alpha&.v=1566956144763" },
    ]

    return (
        <ProductContext.Provider value={{ productListDatabase }}>
            {children}
        </ProductContext.Provider>
    )
}

export const useProduct = () => useContext(ProductContext)