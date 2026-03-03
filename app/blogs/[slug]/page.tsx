import { CategoryProps, PostProps } from "@assets/props";
import BlogCard from "@components/client/Blogs/BlogCard";
import { PostMetadata } from "@components/Items/HandleMetadata";
import PageH1 from "@components/Items/PageH1";

import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";
import slugify from "slugify";

interface BlogPageProps {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function generateMetadata({
  params,
  searchParams,
}: BlogPageProps): Promise<Metadata> {
  const searchFilterParams: any = searchParams.filter;
  const searchCategory: any = searchParams.category;
  const Category: CategoryProps[] = await find("PostCategory");

  const PostTitle = await PostMetadata(
    searchCategory,
    searchFilterParams,
    Category,
    params.slug
  );

  return {
    title: PostTitle.CollectionName
      ? `${PostTitle.CollectionName} - Rèm Cửa Hà Nội`
      : "Blogs",
  };
}

// export async function generateStaticParams() {
//   const res: CategoryProps[] = await find("PostCategory", true);
//   const slugRes = res.map((items) =>
//     slugify(items.level0, { locale: "vi", lower: true })
//   );
//   return slugRes.map((res) => ({
//     slug: res,
//   }));
// }

const BlogPage = async ({ params, searchParams }: BlogPageProps) => {
  const searchFilterParams: any = searchParams.filter;
  const searchCategory: any = searchParams.category;

  const Posts: PostProps[] = await find("Posts");
  const Category: CategoryProps[] = await find("PostCategory");

  let Datashow: PostProps[] = [];

  if (params.slug) {
    const LV0Data = Posts?.filter((Slug) => Slug.level0 === params.slug);
    Datashow = LV0Data;

    if (searchCategory) {
      const LV1Data = LV0Data?.filter((item) => item.level1 === searchCategory);
      Datashow = LV1Data;
      if (searchFilterParams) {
        const LV2Data = LV1Data?.filter((item) =>
          item.level2?.includes(searchFilterParams)
        );

        Datashow = LV2Data;
      }
    }
  }
  const SimilarData = Posts?.filter((item: any) => item.level0 == params.slug);
  const PostTitle = await PostMetadata(
    searchCategory,
    searchFilterParams,
    Category,
    params.slug
  );
  return (
    <>
      <PageH1 Content={PostTitle?.CollectionName} />
      <div className=" text-white py-10 min-h-screen">
        <div className=" py-5  d:w-[1200px] d:mx-auto p:w-auto p:mx-2 ">
          <div className="grid p:grid-cols-1 d:grid-cols-3 gap-10">
            {Datashow?.map((item, idx) => (
              <div key={idx}>
                <BlogCard Data={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogPage;
