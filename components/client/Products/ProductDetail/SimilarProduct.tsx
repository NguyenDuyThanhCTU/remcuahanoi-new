"use client";
import { useStateProvider } from "@context/StateProvider";
import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import ProductCard from "../ProductCard";
import PageH1 from "@components/Items/PageH1";
import { ProductProps } from "@assets/props";

const SimilarProducts = ({ Type, Data }: any) => {
  const SimilarProducts: ProductProps[] = Data?.filter(
    (item: any) => item.level1 === Type
  );
  return (
    <div>
      <div className="mt-4">
        <PageH1 Content="Sản phẩm liên quan" />
        <div className="mt-5 d:block p:hidden">
          <Swiper
            spaceBetween={30}
            slidesPerView={4}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            style={{ paddingBottom: "50px" }}
            modules={[Pagination]}
            className="mySwiper custom-pagination "
          >
            {SimilarProducts?.map((items, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard Data={items} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="mt-5 d:hidden p:block">
          <Swiper
            spaceBetween={30}
            slidesPerView={2}
            slidesPerGroup={1}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            style={{ paddingBottom: "20px" }}
            modules={[Pagination]}
            className="mySwiper custom-pagination "
          >
            {SimilarProducts?.map((items, idx) => (
              <SwiperSlide key={idx}>
                <ProductCard Data={items} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default SimilarProducts;
