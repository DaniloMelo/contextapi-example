import { useContext } from "react"
import { ProductsContext } from "@/contexts/productsContext"

export default function cartPage () {

    const { products } = useContext(ProductsContext)
    
    return(
        <div>
            página carrinho.
            {products.map(p => {
                return(
                    <div>
                        {p.name}
                    </div>
                )
            })}
        </div>
    )
}

