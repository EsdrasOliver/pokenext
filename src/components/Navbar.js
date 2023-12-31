import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav>
            <div>
                <Image src="/images/pokeball.png" width="30" height="30" alt="Pokenext" />
                <h1>Pokenext</h1>
            </div>
            <ul>
                <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>Sobre</a>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}