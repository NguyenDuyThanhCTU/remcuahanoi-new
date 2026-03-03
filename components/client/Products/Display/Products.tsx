import React from "react";
import ProductCard from "../ProductCard";
import { CategoryProps, ProductProps } from "@assets/props";

const Products = ({
  Data,
  ProductCategory,
}: {
  Data: ProductProps[];
  ProductCategory: CategoryProps[];
}) => {
  return (
    <div className="grid d:grid-cols-4 gap-5 p:grid-cols-2">
      {Data?.map((item, idx) => (
        <div key={idx}>
          <ProductCard Data={item} ProductCategory={ProductCategory} />
        </div>
      ))}
    </div>
  );
};

export default Products;
