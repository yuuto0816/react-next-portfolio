import Link from 'next/link';
import styles from "./index.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="/news">趣味</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/members">自己紹介</Link>
                    </li>
                    <li className={styles.item}>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>© SIMPLE. All Rights Reserved 2024</p>
        </footer>
    );
}
