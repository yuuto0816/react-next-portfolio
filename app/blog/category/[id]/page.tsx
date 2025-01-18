import { getCategoryDetail, getBlogList } from "@/app/_libs/microcms";
import { notFound } from "next/navigation";
import BlogList from "@/app/_components/BlogList";
import Pagination from "@/app/_components/Pagination";
import Category from "@/app/_components/Category";
import { NEWS_LIST_LIMIT } from "@/app/_constants";

type Props = {
    params: {
        id: string;
    };
};

export default async function Page({ params }: Props) {
    const category = await getCategoryDetail(params.id).catch(notFound);

    const { contents: news, totalCount } = await getBlogList({
        limit: NEWS_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    });

    return (
        <>
            <p>
                <Category category={category} /> の一覧
            </p>
            <BlogList news={news} />
            <Pagination
                totalCount={totalCount}
                basePath={`/blog/category/${category.id}`}
            />
        </>
    );
}
