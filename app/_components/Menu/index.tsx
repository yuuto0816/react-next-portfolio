"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import cx from "classnames";
import styles from "./index.module.css";

export default function Menu() {
    const [isOpen, setOpen] = useState<boolean>(false);

    // メニューを開く関数
    const open = () => setOpen(true);

    // メニューを閉じる関数
    const close = () => setOpen(false);

    // リスト項目をクリックしたときにメニューを閉じる
    const handleLinkClick = () => {
        if (isOpen) {
            close(); // リストをクリックしたときにメニューを閉じる
        }
    };

    return (
        <div>
            <nav className={cx(styles.nav, isOpen && styles.open)}>
                <ul className={styles.items}>
                    <li>
                        <Link href="/blog" onClick={handleLinkClick}>
                            ブログ
                        </Link>
                    </li>
                    <li>
                        <Link href="/hobbies" onClick={handleLinkClick}>
                            趣味
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" onClick={handleLinkClick}>
                            お問い合わせ
                        </Link>
                    </li>
                </ul>
                <button
                    className={cx(styles.button, styles.close)}
                    onClick={close}
                >
                    <Image
                        src="/close.svg"
                        alt="閉じる"
                        width={24}
                        height={24}
                        priority
                    />
                </button>
            </nav>
            <button className={styles.button} onClick={open}>
                <Image src="/menu.svg" alt="メニュー" width={24} height={24} />
            </button>
        </div>
    );
}
