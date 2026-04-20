"use client";
import React, { useState } from "react";
import { useStateProvider } from "@context/StateProvider";
import { ProductProps } from "@assets/props";
import Image from "next/image";
import { MdDelete } from "react-icons/md";

interface CartProps {
  Data: ProductProps[];
}

const Cart = ({ Data }: CartProps) => {
  const { CartItems, setCartItems, HandleNavigate } = useStateProvider();

  const cartMap: any = {};

  CartItems?.forEach((itemId: any) => {
    cartMap[itemId] = (cartMap[itemId] || 0) + 1;
  });

  const cartProducts: any = [];
  let totalAmount = 0.0;
  let FinalCount = 0;
  Object.keys(cartMap).forEach((itemId) => {
    const product: any = Data?.find((product: any) => product.id === itemId);

    if (product) {
      const itemCount = cartMap[itemId];

      const priceAsNumber = parseFloat(
        product.newPrice ? product.newPrice : product.price,
      );

      const itemTotal = priceAsNumber * itemCount;

      totalAmount += itemTotal;
      FinalCount += itemCount;
      cartProducts.push({
        ...product,

        count: itemCount,
        total: itemTotal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "),
      });
    }
  });

  const handleRemoveFromCart = (productId: any) => {
    const updatedCartItems = CartItems.filter(
      (itemId: any) => itemId.id !== productId,
    );
    setCartItems(updatedCartItems);
  };
  return (
    <div>
      <div className="p:w-auto p:mx-2 d:w-[1300px] d:mx-auto py-14">
        <div className="border shadow-xl">
          <div className="p-2">
            <h3 className=" uppercase text-[24px] font-normail  w-max  pb-2">
              giỏ hàng của bạn
            </h3>
            <div className="grid grid-cols-5 w-full border-b pb-3 text-[22px] font-normal border-black text-center">
              <p className="col-span-3">Sản phẩm</p>

              <p className=" col-span-1">Số lượng</p>
              <p className=" col-span-1">Tạm tính</p>
            </div>
            <div className="text-center">
              <div>
                {cartProducts.map((product: any, idx: number) => {
                  return (
                    <div className="grid grid-cols-5 items-center">
                      <div
                        className={` ${
                          idx % 2 === 0 ? "bg-slate-50" : "bg-white"
                        } col-span-3  py-2 h-full  flex items-start flex-col`}
                      >
                        <div className="flex gap-2 px-5 items-center">
                          <div>
                            <Image
                              src={product.image}
                              alt="product"
                              width={100}
                              height={100}
                            />
                          </div>
                          <div className="text-start text-[18px]">
                            <p className="text-start">{product.title}</p>
                            <p className="text-main font-BriemHand">
                              Giá:{" "}
                              {product.newPrice
                                ? product.newPrice
                                    .toString()
                                    .replace(/\B(?=(\d{3})+(?!\d))/g, " ")
                                : product.price}
                              ₫
                            </p>
                            <p className="text-start font-light text-[16px]">
                              Mã sản phẩm: {product.id}
                            </p>
                            <div
                              className="p-1 text-[20px] cursor-pointer "
                              onClick={() => handleRemoveFromCart(product.id)}
                            >
                              <MdDelete className="text-main" />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>{product.count}</div>
                      <div>
                        {product.total
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                        ₫
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="py-4  flex w-full justify-between px-2">
                <div className=" "></div>
                <div className="flex flex-col gap-2  uppercase font-bold  text-redPrimmary text-[20px] ">
                  <div>
                    Tổng tiền hàng:{" "}
                    <span className="">
                      {totalAmount
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                      ₫
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <div></div>
          <div className="flex gap-5">
            <div
              onClick={() => HandleNavigate("/")}
              className="py-2 px-6  duration-300 cursor-pointer text-main border-main uppercase border rounded-full font-normal hover:text-orange-500 hover:border-orange-500"
            >
              Tiếp tục mua hàng
            </div>
            <div
              onClick={() => HandleNavigate("/dat-hang")}
              className="py-2 px-10 duration-300 cursor-pointer text-white bg-main border-main uppercase border rounded-full font-normal hover:bg-orange-500 hover:border-orange-500"
            >
              Đặt hàng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
