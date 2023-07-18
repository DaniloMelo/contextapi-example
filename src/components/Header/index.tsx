import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-zinc-800 flex justify-between items-center h-16">
            <div>
                <Link href="/" className="p-2 ml-5">
                    Logo
                </Link>
            </div>

            <div>
                <ul className="flex gap-10 mr-5">
                    <li>
                        <Link href="/products" className="p-2">Produtos</Link>
                    </li>
                    <li>
                        <Link href="/cart" className="p-2">Carrinho</Link>
                    </li>
                </ul>
            </div>
        </header>
    )
}