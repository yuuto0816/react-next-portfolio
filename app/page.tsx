import styles from "./page.module.css";
import Image from "next/image";
import { getBlogList } from "@/app/_libs/microcms";
import { TOP_NEWS_LIMIT } from "@/app/_constants";
import BlogList from "@/app/_components/BlogList";
import ButtonLink from "@/app/_components/ButtonLink";

export const revalidate = 60;

export default async function Home() {
    const data = await getBlogList({
        limit: TOP_NEWS_LIMIT,
    });

    return (
        <>
            <section className={styles.top}>
                <div>
                    <h1 className={styles.title}>三木 悠叶</h1>
                    <p className={styles.description}>
                        私はスーパーITエンジニア専攻で学んでいる学生です。
                        <br />
                        実践的なスキルを身につけることを目指して日々学んでいます。
                    </p>
                </div>
                <Image
                    className={styles.bgimg}
                    src="/img-mv.jpg"
                    alt=""
                    width={4000}
                    height={1200}
                    priority
                    sizes="100vw"
                />
            </section>
            <section className={styles.news}>
                <h2 className={styles.newsTitle}>News</h2>
                <BlogList news={data.contents} />
                <div className={styles.newsLink}>
                    <ButtonLink href="/blog">もっとみる</ButtonLink>
                </div>
            </section>
        </>
    );
}
