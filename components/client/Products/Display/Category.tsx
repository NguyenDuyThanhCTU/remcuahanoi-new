"use client";
import { PostProps, ProductProps } from "@assets/props";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CategoryProps {
  Products: ProductProps[];
  Posts: PostProps[];
}

const Category = ({ Products, Posts }: CategoryProps) => {
  const Bestselling = Products?.filter((item) => item.bestselling === true);
  const PostsData = Posts?.filter(
    (item) => item.level0 !== "dieu-khoan-su-dung" && item.id !== "introductory"
  );

  return (
    <div className="flex flex-col gap-4">
      <div className="d:block p:hidden">
        <div className="w-full  rounded-full text-[20px] font-semibold tracking-[2px] underline">
          Sản phẩm bán chạy
        </div>
        <div className="flex flex-col gap-4 py-4">
          {Bestselling?.slice(0, 6).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Link href={`/product/${item.url}`}>
                <div className="w-[70px] h-[70px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt="products"
                    width={70}
                    height={70}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>

              <div className="font-semibold flex-1">
                <Link
                  href={`/product/${item.url}`}
                  className="text-[14px] font-semibold truncate2"
                >
                  {item.title}
                </Link>
                {item.price && (
                  <p className="text-red-600  rounded-full font-LexendDeca">
                    <span className="">Giá: {item.price}đ</span>
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d:block p:hidden">
        <div className="w-full  rounded-full   text-[22px] font-semibold tracking-[2px] underline">
          Tin tức mới nhất
        </div>
        <div className="flex flex-col gap-4 py-4">
          {PostsData?.slice(0, 4).map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <Link href={`/${item.url}`}>
                <div className="w-[70px] h-[70px] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt="products"
                    width={70}
                    height={70}
                    className="w-full h-full object-cover"
                  />
                </div>
              </Link>
              <div className="font- flex-1">
                <Link
                  href={`/${item.url}`}
                  className="text-[14px] truncate2 font-semibold "
                >
                  {item.title}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
