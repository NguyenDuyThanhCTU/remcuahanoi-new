import { find, findById } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";
import dynamic from "next/dynamic";
import { ProductProps } from "@assets/props";
import ProductDetail from "@components/client/Products/ProductDetail";

type ProductDetailProps = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | any };
};

export async function generateMetadata({
  searchParams,
}: ProductDetailProps): Promise<Metadata> {
  const searchValue = searchParams.poid;

  const products = await find("Products");
  const Products = products?.find((item: any) => item.id == searchValue);

  return {
    title: `${Products?.title} - Rèm Cửa Hà Nội`,
    description: Products?.description,
    keywords: Products?.keywords,
  };
}

const ProductDetailPage = async ({ searchParams }: ProductDetailProps) => {
  const searchValue = searchParams.poid;
  const Data: ProductProps = await findById("Products", searchValue);
  const Products = await find("Products");
  const Config = await find("Config");
  const ProductCategory = await find("ProductCategory");

  return (
    <div className="d:w-[1300px] d:mx-auto p:w-auto p:mx-2 py-5">
      <ProductDetail
        Data={Data}
        Products={Products}
        Config={Config}
        id={searchValue}
        Category={ProductCategory}
      />
    </div>
  );
};

export default ProductDetailPage;
