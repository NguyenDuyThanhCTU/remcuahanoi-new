import { ProductProps, SEOProps } from "@assets/props";
import HomeNewest from "@components/client/Home/HomeNewest";
import HomeSlide from "@components/client/Home/HomeSlide";
import dynamic from "next/dynamic";

const HomeDisplay = dynamic(
  () => import("@components/client/Home/HomeDisplay"),
);
const HomeNew = dynamic(() => import("@components/client/Home/HomeNew"));
const HomePolicy = dynamic(() => import("@components/client/Home/HomePolicy"), {
  ssr: false,
});
const HomeProducts = dynamic(
  () => import("@components/client/Home/HomeProducts"),
);
const HomeTrend = dynamic(() => import("@components/client/Home/HomeTrend"));
import ProductCard from "@components/client/Products/ProductCard";
import { LocalFindById } from "@components/Items/Handle";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";

export async function generateMetadata(): Promise<Metadata> {
  const Config = await find("Config");
  const SEOmetaTag: SEOProps = LocalFindById(Config, "SEOconfig");
  return {
    description: SEOmetaTag?.Description,
    keywords: SEOmetaTag?.Keyword,
    title: SEOmetaTag?.Title,
  };
}

const HomePage = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | any };
}) => {
  const Slides = await find("Slides");
  const Posts = await find("Posts");
  const Products: ProductProps[] = await find("Products");
  const ProductCategory = await find("ProductCategory");

  const searchValue = searchParams.search;
  let DataShow: any;
  if (searchValue) {
    DataShow = Products?.filter((posts: ProductProps) =>
      posts?.title?.toLowerCase().includes(searchValue.toLowerCase()),
    );
  }
  const newsData = Posts?.filter((item) => item.level0 === "tin-tuc");
  const isBestselling = Products?.filter((item) => item.bestselling);
  const isSale = Products?.filter((item) => item.newPrice !== undefined);
  const policyData = Posts?.filter((item) => item.level0 === "policy");

  return (
    <div className="">
      {searchValue ? (
        <div className="min-h-screen ">
          <div className="bg-blue-700 text-white uppercase py-10 p:text-[20px] d:text-[25px] d:text-left p:text-center">
            <div className="d:w-[1300px] p:w-auto d:mx-auto ">
              kết quả tìm kiếm cho: "<span>{searchValue}</span>"
            </div>
          </div>
          <div className=" p:w-auto d:w-[1300px] d:mx-auto p:mx-2 grid d:grid-cols-5 p:grid-cols-2 py-5 gap-5">
            {DataShow?.map((item: ProductProps, idx: number) => (
              <div key={idx}>
                <ProductCard Data={item} ProductCategory={ProductCategory} />
              </div>
            ))}
          </div>
        </div>
      ) : (
        <>
          {Products && (
            <>
              <HomeSlide Data={Slides} Products={Products} />

              <HomeDisplay Data={isSale} />
              <HomeNewest
                Products={isBestselling}
                ProductCategory={ProductCategory}
              />
              <HomeProducts Category={ProductCategory} Data={Products} />
              <HomePolicy Data={policyData} />
              <HomeNew Data={newsData} />
            </>
          )}
        </>
      )}
    </div>
  );
};

export default HomePage;
