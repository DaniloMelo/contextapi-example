import Card from "@/components/Card"
import products from "../../data/products"

export default function productsPage () {
    return (
        <section className="flex gap-5 flex-wrap p-10">
            {products.map(p => {
                return(
                    <Card product={p}/>
                )
            })}
        </section>
    )
}