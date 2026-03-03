"use client";

import React from "react";
import {
  A11y,
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import "swiper/css/effect-fade";
import { SwiperNavButtons } from "@components/Items/SwiperNavButtons";
import { PostProps, ProductProps } from "@assets/props";

const HomeProject = ({ Data }: { Data: ProductProps[] }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, A11y, Autoplay]}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        className="mySwiper relative"
      >
        {Data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div>
              <Link href={`/product/${item.url}`}>
                <Image
                  src={item.image}
                  alt="banner"
                  width={3000}
                  height={3000}
                  className=" w-full d:h-[90vh] p:h-[50vh] object-contain z-10"
                />
              </Link>
              <div className="d:block p:hidden">
                <div className="relative">
                  <div className="p:px-2 d:px-8 p:py-2 d:py-10 flex flex-col justify-center  gap-4 p:w-[300px] d:w-[800px] mx-auto absolute bg-white d:bottom-0 p:bottom-20 right-0">
                    <Link
                      href={`/product/${item.url}`}
                      className="p:text-[20px] d:text-[35px] text-blue-900 font-bold hover:text-blue-950 "
                    >
                      {item?.title}
                    </Link>
                    <p className="font-LexendDeca font-light d:text-[16px] p:text-[14px]">
                      {item?.description}
                    </p>
                    <div className="flex">
                      <Link
                        href={`/product/${item.url}`}
                        className="flex items-center gap-2 bg-[#192285] font-semibold text-white hover:bg-blue-950 px-6 py-2 rounded-md d:text-[16px] p:text-[14px]"
                      >
                        TÌM HIỂU NGAY
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="relative h-[49px]">
          <SwiperNavButtons />
        </div>
      </Swiper>
    </div>
  );
};

export default HomeProject;
