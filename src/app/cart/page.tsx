'use client'

import { useProductsContext } from "../contexts/productsContext"

export default function cartPage() {

    const { products } = useProductsContext()
    return (
        <div>
            <h1 className="text-center mt-5 mb-5">Meu carrinho de compras</h1>
            <div className="flex justify-center items-start h-screen">
                <table className="border border-zinc-500 w-4/5">
                    <thead className="bg-zinc-800">
                        <tr>
                            <td className="text-center">Produto</td>
                            <td className="text-center">Descrição</td>
                            <td className="text-center">Valor</td>
                        </tr>
                    </thead>

                    <tbody>
                        {products.map(p => {
                            return (
                                <tr key={p.id}>
                                    <td className="border border-zinc-500">{p.name}</td>
                                    <td className="border border-zinc-500">{p.description}</td>
                                    <td className="border border-zinc-500">{p.price}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}



