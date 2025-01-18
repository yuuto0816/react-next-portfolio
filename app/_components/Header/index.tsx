import Image from "next/image";
import Link from "next/link";
import styles from "./index.module.css";
import Menu from "../Menu";

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href="/" className={styles.logoLink}>
                <Image
                    src="/logo.png"
                    alt="icon"
                    className={styles.logo}
                    width={600}
                    height={300}
                    priority
                />
            </Link>
            <Menu />
        </header>
    );
}
