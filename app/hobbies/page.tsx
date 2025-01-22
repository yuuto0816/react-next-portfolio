import Image from "next/image";
import { getHobbiesList } from "@/app/_libs/microcms";
import { HOBBIES_LIST_LIMIT } from "@/app/_constants";
import styles from "./page.module.css";

export default async function Page() {
    const data = await getHobbiesList({ limit: HOBBIES_LIST_LIMIT });
    return (
        <div className={styles.container}>
            {data.contents.length === 0 ? (
                <p className={styles.empty}>趣味が登録されていません。</p>
            ) : (
                <ul>
                    {data.contents.map((hobbies) => (
                        <li key={hobbies.id} className={styles.list}>
                            <Image
                                src={hobbies.image.url}
                                alt=""
                                width={hobbies.image.width}
                                height={hobbies.image.height}
                                className={styles.image}
                            />
                            <dl>
                                <dt className={styles.name}>{hobbies.name}</dt>
                                <dd className={styles.position}>
                                    {hobbies.position}
                                </dd>
                                <dd className={styles.profile}>
                                    {hobbies.profile}
                                </dd>
                            </dl>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
