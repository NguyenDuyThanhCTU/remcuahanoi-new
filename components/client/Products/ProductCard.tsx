"use client";
import { CategoryProps, ProductProps } from "@assets/props";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoStarSharp } from "react-icons/io5";
import slugify from "slugify";
import { Badge, Space } from "antd";

const ProductCard = ({
  Data,
  ProductCategory,
}: {
  Data: ProductProps;
  ProductCategory?: CategoryProps[];
  type?: string;
}) => {
  return (
    <>
      {Data?.discount !== undefined ? (
        <>
          {" "}
          <Badge.Ribbon text={`-${Data?.discount}%`} color="red">
            <div className="shadow-sm shadow-slate-300">
              <div className="font-LexendDeca">
                <div className="w-full aspect-square  relative ">
                  <Link href={`/product/${Data?.url}`}>
                    <div className="overflow-hidden aspect-square">
                      <Image
                        src={Data?.image}
                        alt="product"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover  hover:scale-105 duration-300 flex flex-col-reverse"
                      />
                    </div>
                  </Link>
                </div>

                <div className=" text-black bg-white">
                  <div className=" w-full  text-mainYellow  px-4 ">
                    <div className="hover:text-mainBold  text-center truncate2 text-slate-600 font-normal text-[12px] ">
                      {ProductCategory?.map((item, index) => {
                        const slug = slugify(item.level0, {
                          locale: "vi",
                          lower: true,
                        });
                        let LV1 = "";
                        if (Data?.level0 === slug) {
                          LV1 = item.level0;
                        }
                        return <div key={index}>{LV1}</div>;
                      })}
                    </div>
                    <Link
                      href={`/product/${Data?.url}`}
                      className="text-[16px] w-full text-center font-normal text-orange-700"
                    >
                      <p className="text-center py-1 truncate2 p:h-auto d:h-[47px] hover:text-red-600 duration-300">
                        {" "}
                        {Data?.title}
                      </p>
                    </Link>
                    <div className="text-yellow-500 flex items-center text-[18px] justify-center py-2">
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                      <IoStarSharp />
                    </div>
                  </div>
                  {Data?.price ? (
                    <div className="flex items-center justify-center gap-5 ">
                      <div className="  text-center text-[16px] text-black line-through">
                        <div className="p-1">{Data?.price}₫</div>
                      </div>
                      <div className="  text-center text-[16px] text-red-600">
                        <div className="p-1">{Data?.newPrice}₫</div>
                      </div>
                    </div>
                  ) : (
                    <div className=" text-white text-center text-[16px] ">
                      <div className="p-1">Theo thời giá</div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Badge.Ribbon>
        </>
      ) : (
        <>
          {" "}
          <div className="shadow-sm shadow-slate-300">
            <div className="font-LexendDeca">
              <div className="w-full aspect-square  relative ">
                <Link href={`/product/${Data?.url}`}>
                  <div className="overflow-hidden aspect-square">
                    <Image
                      src={Data?.image}
                      alt="product"
                      width={600}
                      height={600}
                      className="w-full h-full object-cover  hover:scale-105 duration-300 flex flex-col-reverse"
                    />
                  </div>
                </Link>
              </div>

              <div className=" text-black bg-white">
                <div className=" w-full  text-mainYellow  px-4 ">
                  <div className="hover:text-mainBold  text-center truncate2 text-slate-600 font-normal text-[12px] ">
                    {ProductCategory?.map((item, index) => {
                      const slug = slugify(item.level0, {
                        locale: "vi",
                        lower: true,
                      });
                      let LV1 = "";
                      if (Data?.level0 === slug) {
                        LV1 = item.level0;
                      }
                      return <div key={index}>{LV1}</div>;
                    })}
                  </div>
                  <Link
                    href={`/product/${Data?.url}`}
                    className="text-[16px] w-full text-center font-normal text-orange-700"
                  >
                    <p className="text-center py-1 truncate2 p:h-auto d:h-[47px] hover:text-red-600 duration-300">
                      {" "}
                      {Data?.title}
                    </p>
                  </Link>
                  <div className="text-yellow-500 flex items-center text-[18px] justify-center py-2">
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                    <IoStarSharp />
                  </div>
                </div>
                {Data?.price ? (
                  <div className=" text-white text-center text-[16px] bg-red-600">
                    <div className="p-1">{Data?.price}₫</div>
                  </div>
                ) : (
                  <div className=" text-white text-center text-[16px] bg-red-600">
                    <div className="p-1">Theo thời giá</div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductCard;
