import { getBlogList } from "@/app/_libs/microcms";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import BlogList from "@/app/_components/BlogList";
import SearchField from "@/app/_components/SearchField";

type Props = {
    searchParams: {
        q?: string;
    };
};

export default async function Page({ searchParams }: Props) {
    const { contents: news } = await getBlogList({
        limit: NEWS_LIST_LIMIT,
        q: searchParams.q,
    });

    return (
        <>
            <SearchField />
            <BlogList news={news} />
        </>
    );
}
