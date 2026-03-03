import React from "react";
import ProductCard from "../Products/ProductCard";
import Link from "next/link";
import { MdChevronRight } from "react-icons/md";
import { CategoryProps, ProductProps } from "@assets/props";

interface HomeNewestProps {
  Products: ProductProps[];
  ProductCategory: CategoryProps[];
}

const HomeNewest = ({ Products, ProductCategory }: HomeNewestProps) => {
  return (
    <div className=" py-10">
      <div className="flex justify-between">
        <h3 className="pb-3 border-b-2 border-red-700 w-max uppercase text-red-700 text-[25px]">
          {" "}
          Những sản phẩm bán chạy nhất
        </h3>
      </div>
      <div className="grid p:grid-cols-2 d:grid-cols-5 mt-5 gap-4">
        {Products?.slice(0, 10)?.map((item, idx) => (
          <div key={idx}>
            <ProductCard Data={item} ProductCategory={ProductCategory} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeNewest;
