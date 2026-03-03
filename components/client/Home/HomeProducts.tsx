import React from "react";

import ProductCard from "../Products/ProductCard";

import slugify from "slugify";
import { CategoryProps, ProductProps } from "@assets/props";

const HomeProducts = ({
  Data,
  Category,
}: {
  Data: ProductProps[];
  Category: CategoryProps[];
}) => {
  return (
    <div className="bg-bgcontent text-white py-10 min-h-screen">
      <div className=" py-5 flex flex-col gap-5 ">
        {Category?.map((item, idx) => {
          const ProductFiltered = Data?.filter(
            (pitem) =>
              pitem.level0 ===
              slugify(item.level0, { lower: true, locale: "vi" })
          );
          return (
            <div key={idx} className="">
              {ProductFiltered?.length > 0 && (
                <>
                  {" "}
                  <div
                    key={idx}
                    className="flex items-center justify-between gap-2"
                  >
                    <div className="w-full h-[1px] bg-slate-300"></div>
                    <div className=" uppercase  text-blue-800 font-bold">
                      <p className="w-max d:text-[25px] p:text-[18px] underline">
                        {" "}
                        {item.level0}
                      </p>
                    </div>
                    <div className="w-full h-[1px] bg-slate-300"></div>
                  </div>
                  <p className="text-center text-red-600 font-normal py-2 ">
                    Chuyên tư vấn thi công rèm cửa
                  </p>
                  <div>
                    <div className="grid d:grid-cols-5 gap-5 py-5 p:grid-cols-2">
                      {ProductFiltered?.map((item, idx) => (
                        <div key={idx}>
                          <ProductCard Data={item} ProductCategory={Category} />
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeProducts;
