'use client'

import ProductType from "@/types/ProductType"
import Image from "next/image"
// import { useContext } from "react"
import { useProductsContext } from "@/app/contexts/productsContext"

interface CardProps {
    product: ProductType
}

export default function Card({ product }: CardProps) {

    const { addProdToContext } = useProductsContext()

    return (
        <>
            <section className="flex flex-col justify-between items-center bg-zinc-700 rounded-md w-64 p-6">
                <Image src={product.imageURL}
                    width={200}
                    height={200}
                    alt={`Imagem de uma ${product.name}`}
                    className="rounded-sm"
                />

                <div className="w-full flex flex-col justify-start gap-3">
                    <p className="text-lg mt-5">{product.name}</p>
                    <p className="text-lg">R$ {product.price}</p>
                    <p className="text-sm mb-5">{product.description}</p>
                </div>

                <button className="bg-blue-500 hover:bg-blue-700 p-1 w-full rounded-md"
                   onClick={() => addProdToContext(product)}
                >
                    Comprar
                </button>
            </section>
        </>
    )
}