"use client";
import React, { useState } from "react";
import Category from "./Display/Category";
import Products from "./Display/Products";
import { CategoryProps, PostProps, ProductProps } from "@assets/props";

interface DisplayProps {
  Data: ProductProps[];
  Posts: PostProps[];
  ProductsData: ProductProps[];
  ProductCategory: CategoryProps[];
}
const Display = ({
  Data,
  Posts,
  ProductsData,
  ProductCategory,
}: DisplayProps) => {
  const [DataShow, setDataShow] = useState<ProductProps[]>(Data);
  return (
    <div className="d:w-[1300px] d:mx-auto p:w-auto p:mx-2 mt-5">
      <div className="grid p:grid-cols-1 d:grid-cols-5 gap-5">
        <div>
          <Category Products={ProductsData} Posts={Posts} />
        </div>
        <div className="col-span-4">
          <Products Data={Data} ProductCategory={ProductCategory} />
        </div>
      </div>
    </div>
  );
};

export default Display;
