'use client'

import ProductType from "@/types/ProductType";
import { createContext, useContext, useState } from "react";

interface ProductsContextProps {
    products: ProductType[]
    addProdToContext: (product: ProductType) => void
}

const ProductsContext = createContext<ProductsContextProps>({
    products: [],
    addProdToContext: () => {}
})

export const ProductsProvider = ({children}: {children: React.ReactNode}) => {
    
    const [products, setProducts] = useState<ProductType[]>([])

    const addProdToContext = (product: ProductType) => {
        setProducts(prevProd => [...prevProd, product])
    }

    return(
        <ProductsContext.Provider value={{products, addProdToContext}}>
            {children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => useContext(ProductsContext)