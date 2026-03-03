import { CategoryProps, PostProps, ProductProps } from "@assets/props";
import Display from "@components/client/Products/Display";
import PageH1 from "@components/Items/PageH1";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";
import slugify from "slugify";

function filterTitlePageBySlug(
  ProductCategory: CategoryProps[],
  slugParams: string
) {
  for (const item of ProductCategory) {
    for (const key in item) {
      const value = item[key];

      if (Array.isArray(value)) {
        for (const val of value) {
          const slug = slugify(val, { lower: true, locale: "vi" });
          if (slug === slugParams) {
            return val;
          }
        }
      } else if (typeof value === "string") {
        const slug = slugify(value, { lower: true, locale: "vi" });
        if (slug === slugParams) {
          return value;
        }
      }
    }
  }
}
export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const ProductCategory: CategoryProps[] = await find("ProductCategory");
  const TitlePage = filterTitlePageBySlug(ProductCategory, params.slug);

  return {
    title: `Những sản phẩm ${TitlePage} - Rèm Cửa Hà Nội`,
  };
}

function filterProductsBySlug(products: ProductProps[], slugParam: string) {
  const matchedLevel2 = [];
  const matchedLevel1 = [];
  const matchedLevel0 = [];

  for (const product of products) {
    let matched = false;

    // Ưu tiên kiểm tra level2 (mảng)
    if (Array.isArray(product.level2)) {
      for (const val of product.level2) {
        if (slugify(val, { lower: true, locale: "vi" }) === slugParam) {
          matchedLevel2.push(product);
          matched = true;
          break;
        }
      }
    }

    if (matched) continue;

    // Sau đó kiểm tra level1 (chuỗi)
    if (
      typeof product.level1 === "string" &&
      slugify(product.level1, { lower: true, locale: "vi" }) === slugParam
    ) {
      matchedLevel1.push(product);
      continue;
    }

    // Cuối cùng kiểm tra level0 (chuỗi)
    if (
      typeof product.level0 === "string" &&
      slugify(product.level0, { lower: true, locale: "vi" }) === slugParam
    ) {
      matchedLevel0.push(product);
    }
  }

  // Trả về danh sách theo đúng thứ tự ưu tiên
  return [...matchedLevel2, ...matchedLevel1, ...matchedLevel0];
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const ProductCategory: CategoryProps[] = await find("ProductCategory");
  const Products: ProductProps[] = await find("Products");
  const Posts: PostProps[] = await find("Posts");
  let TitlePage = filterTitlePageBySlug(ProductCategory, params.slug);

  const filteredProducts = filterProductsBySlug(Products, params.slug);

  return (
    <>
      <PageH1 Content={`Sản phẩm "${TitlePage}"`} />
      <div className="  min-h-screen py-5">
        <Display
          Data={filteredProducts}
          Posts={Posts}
          ProductsData={Products}
          ProductCategory={ProductCategory}
        />
      </div>
    </>
  );
};

export default ProductPage;
