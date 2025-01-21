import Link from "next/link";
import styles from "./index.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="/blog" className={styles.link}>
                            ブログ
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/hobbies" className={styles.link}>
                            趣味
                        </Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact" className={styles.link}>
                            お問い合わせ
                        </Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>© MIKI YUTO. All Rights Reserved 2024</p>
        </footer>
    );
}
