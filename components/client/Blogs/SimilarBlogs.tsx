"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Pagination } from "swiper/modules";
import BlogCard from "./BlogCard";
import { PostProps } from "@assets/props";

const SimilarBlogs = ({ Data }: { Data: PostProps[] }) => {
  return (
    <>
      <div className="d:block p:hidden p-5">
        <Swiper
          slidesPerView={3}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={30}
          modules={[Pagination]}
          className="custom-pagination  "
          // style={{ paddingBottom: "50px" }}
        >
          {Data.map((item, idx) => (
            <SwiperSlide className="h-full w-full" key={idx}>
              <BlogCard Data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="d:hidden p:block p-5">
        <Swiper
          slidesPerView={1}
          slidesPerGroup={1}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          spaceBetween={30}
          modules={[Pagination]}
          className="custom-pagination  "
          style={{ paddingBottom: "50px" }}
        >
          {Data.map((item, idx) => (
            <SwiperSlide className="h-full w-full" key={idx}>
              <BlogCard Data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default SimilarBlogs;
