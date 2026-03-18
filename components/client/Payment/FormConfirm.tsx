"use client";

import { ProductProps } from "@assets/props";
import { useStateProvider } from "@context/StateProvider";
import { notification } from "antd";
import React from "react";
import PaymentMethodSelector from "./FormOrder/PaymentMethodSelector";

interface FormConfirmProps {
  setStep: (step: any) => void;
  Data: any;
  ProductData: ProductProps[];
}

const FormConfirm = ({ setStep, Data, ProductData }: FormConfirmProps) => {
  const { CartItems, setCartItems } = useStateProvider();
  const { setIsLoading, HandleNavigate } = useStateProvider();

  const cartMap: any = {};

  CartItems?.forEach((itemId: any) => {
    cartMap[itemId] = (cartMap[itemId] || 0) + 1;
  });

  const cartProducts: any = [];
  let totalAmount = 0.0;
  let FinalCount = 0;
  Object.keys(cartMap).forEach((itemId) => {
    const product: any = ProductData.find(
      (product: any) => product.id === itemId,
    );

    if (product) {
      const { date, ...productWithoutCreatedAt } = product;
      const itemCount = cartMap[itemId];

      const priceAsNumber = parseFloat(productWithoutCreatedAt.price);

      const itemTotal = priceAsNumber * itemCount;

      totalAmount += itemTotal;
      FinalCount += itemCount;

      cartProducts.push({
        ...productWithoutCreatedAt,

        count: itemCount,
        total: itemTotal,
      });
    }
  });

  const HandleContinue = async () => {
    setIsLoading(5000);
    const currentTime = new Date();

    const dataFields = [
      { title: "Họ Tên người đặt hàng:", value: Data.name },
      { title: "Số điện thoại:", value: Data.phone },
      { title: "Email:", value: Data.email },
      { title: "Địa chỉ nhận hàng: ", value: Data.address },
      { title: "Ghi chú cho đơn hàng:", value: "" },
      { title: "Tổng số lượng sản phẩm", value: `${FinalCount} Sản phẩm` },
      {
        title: "Chi tiết hóa đơn",
        value: `${cartProducts
          .map((items: any, idx: any) => {
            return `----------------------------------------------- Sản phẩm ${idx} ------------------------------------------------- \nTên sản phẩm: ${items.title} \n số lượng: ${items.count} \n mã sản phẩm: ${items.ListColor} \n loại: ${items.type} \n Giá: ${items.price} VNĐ \n `;
          })
          .join("")}
      `,
      },
      {
        title: "Tổng Giá trị hóa đơn",
        value: `${totalAmount.toFixed(3)} VNĐ`,
      },
      { title: "Thời gian đặt", value: currentTime },
    ];
    let data: any = {};

    dataFields?.forEach((field) => {
      data[field.title] = field.value;
    });

    const response = await fetch(
      `https://formsubmit.co/ajax/ctydacan2025@gmail.com`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      },
    );

    if (response.ok) {
      notification["success"]({
        message: "Thành công !",
        description: `
             Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
      });
      setIsLoading(false);
      setCartItems([]);
    } else {
      setIsLoading(false);
      notification["error"]({
        message: "Lỗi !",
        description: `
             Lỗi không xác định !`,
      });
    }
  };
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-[25px] font-normal">Thông tin đơn hàng</h2>
      <div className="grid grid-cols-2 gap-5">
        <div className="border">
          <div className="p-4 flex flex-col gap-2">
            <p>
              <strong>Khách hàng:</strong> {Data?.name}
            </p>
            <p>
              <strong>Số điện thoại:</strong> {Data?.phone}
            </p>
            <p>
              <strong>Địa chỉ:</strong> {Data?.address}
            </p>

            <p>
              <strong>Ghi chú: </strong>
              {Data?.note}
            </p>
          </div>
        </div>
        <div className="border">
          <div className=" p-4 flex h-full justify-between flex-col">
            <div className="w-full flex justify-between">
              <div className="flex items-center gap-2 text-[18px]">
                <p>Đơn hàng </p>{" "}
                <div
                  onClick={() => HandleNavigate("/gio-hang")}
                  className="text-main italic underline hover:text-orange-500 duration-300 cursor-pointer"
                >
                  Xem chi tiết
                </div>
              </div>
              <div></div>
            </div>
            <div className="flex w-full justify-between border-t pt-2">
              <div className="text-[22px] font-normal">Tổng thanh toán:</div>
              <div>
                <span className="text-[22px] font-normal">
                  {totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}{" "}
                  ₫
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PaymentMethodSelector />
      <div className="grid grid-cols-2">
        <div className="font-normal text-[18px] flex justify-between w-full">
          <div>Tổng tiền hàng</div>
          <div>
            <span className=" font-normal">
              {totalAmount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")} ₫
            </span>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex w-full  gap-5">
        <div
          className="py-2 px-6  duration-300 cursor-pointer text-main border-main uppercase border rounded-full font-normal hover:text-orange-500 hover:border-orange-500"
          onClick={() => setStep(1)}
        >
          Quay về
        </div>
        <div
          className="py-2  px-10 duration-300 cursor-pointer text-white bg-main border-main uppercase border rounded-full font-normal hover:bg-orange-500 hover:border-orange-500"
          onClick={() => {
            setStep(3);
            HandleContinue();
          }}
        >
          Tiếp tục
        </div>
      </div>
    </div>
  );
};

export default FormConfirm;
