"use client";

import React from "react";
import ProductCard from "../Products/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination } from "swiper/modules";
import { CategoryProps, ProductProps } from "@assets/props";

interface HomeTrendProps {
  Products: ProductProps[];
  ProductCategory: CategoryProps[];
}

const HomeTrend = ({ Products, ProductCategory }: HomeTrendProps) => {
  const Trend = Products?.filter((item) => item.bestselling);

  return (
    <div className="d:w-[1500px] p:w-auto d:mx-auto p:mx-2 py-10">
      <div className="">
        <h3 className="pb-3 text-center w-full font-semibold border-b uppercase text-red-700 text-[25px]">
          {" "}
          Sản phẩm nổi bật
        </h3>
      </div>
      <div className="d:block p:hidden">
        <Swiper
          slidesPerView={4}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={30}
          modules={[Pagination]}
          className="mt-5"
        >
          {Trend?.map((item, idx) => (
            <SwiperSlide key={idx} className="py-5">
              <ProductCard Data={item} ProductCategory={ProductCategory} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="d:hidden p:block">
        <Swiper
          slidesPerView={2}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={30}
          modules={[Pagination]}
          className="mt-5 "
        >
          {Trend?.map((item, idx) => (
            <SwiperSlide key={idx}>
              <ProductCard Data={item} ProductCategory={ProductCategory} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeTrend;
