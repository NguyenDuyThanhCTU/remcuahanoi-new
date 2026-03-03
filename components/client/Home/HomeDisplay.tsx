import { ProductProps } from "@assets/props";
import React from "react";
import ProductCard from "../Products/ProductCard";
import HomeTitle from "./HomeTitle";

const HomeDisplay = ({ Data }: { Data: ProductProps[] }) => {
  return (
    <div
      className={`bg-[url(https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/LUGANO-cam-08-00928_T.jpg?alt=media&token=b3e647ea-29ee-4505-8eab-ece54ff9ec2f)] bg-no-repeat bg-cover `}
    >
      <div className="bg-[#0000007f]">
        <div className="flex items-center py-5">
          <div className="w-full h-[2px] bg-slate-200"></div>
          <div className="uppercase border-2 font-bold text-white px-6 py-2">
            <p className="w-max d:text-[18px] p:text-[15px]">
              Sản phẩm khuyến mãi
            </p>
          </div>
          <div className="w-full h-[2px] bg-slate-200"></div>
        </div>
        <div className="grid p:grid-cols-2 d:grid-cols-5 p-10 gap-5">
          {Data.slice(0, 10)?.map((item, idx) => (
            <div key={idx}>
              <ProductCard Data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeDisplay;
