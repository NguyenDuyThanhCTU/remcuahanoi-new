"use client";
import React, { useState } from "react";
import { Image } from "antd";
import Link from "next/link";
import { CategoryProps, ProductProps } from "@assets/props";
import { useStateProvider } from "@context/StateProvider";
import SimilarProducts from "./ProductDetail/SimilarProduct";
import slugify from "slugify";
import QuotePopup from "./QuotePopup";

interface ProductDetailProps {
  Data: ProductProps;
  Products: ProductProps[];
  Config: Array<any>;
  id: string;
  Category: CategoryProps[];
}

const ProductDetail = ({
  Data,
  Products,
  Config,
  id,
  Category,
}: ProductDetailProps) => {
  const ContactData = Config?.find((item: any) => item.id === "contact");
  const { setCartItems, HandleNavigate, CartItems } = useStateProvider();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const HandleOrder = (type: string) => {
    if (type === "buy") {
      setCartItems((prevItems: any) => [...prevItems, id]);
      HandleNavigate("/gio-hang");
    } else {
      setCartItems((prevItems: any) => [...prevItems, id]);
      setIsPopupOpen(true);
    }
  };
  let GropData;
  if (Data?.group) {
    GropData = Category.find((item) => item.group === true);
  }

  return (
    <>
      <div className="grid p:grid-cols-1 d:grid-cols-2 gap-5">
        <div className="w-full flex justify-center  flex-col">
          {/* <div className="p:h-auto d:h-[450px] w-full overflow-hidden"> */}
          <img
            className="h-full w-full object-cover"
            width={650}
            height={400}
            src={Data?.image}
          />
          {/* </div> */}
          {/* <div className="flex  overflow-hidden bg-gray-100">
            {Data?.subimage?.map((item, idx) => (
              <div key={idx} className="border-2 m-2 h-[84px] overflow-hidden">
                <Image.PreviewGroup>
                  <Image
                    className="p-2 h-full  object-cover hover:scale-110 duration-500 max-w-[84px] max-h-[84px]"
                    src={item.url}
                  />
                </Image.PreviewGroup>
              </div>
            ))}
          </div> */}
        </div>
        <div className="flex flex-col gap-3">
          <div>
            <h3 className="text-[22px] uppercase">{Data?.title}</h3>
            <div className="bg-black w-24 h-1"></div>
          </div>

          <div className="font-normal text-[25px] text-red-500">
            {Data?.price ? (
              <div>
                <div className="line-through text-[16px] text-black">
                  {Data.price} ₫
                </div>
                <div>Giá: {Data?.newPrice}₫</div>
              </div>
            ) : (
              <Link
                className="hover:underline hover:text-blue-500 duration-300 "
                href={`${ContactData ? `tel:${ContactData.Hotline}` : "tel:"}`}
              >
                Liên hệ để được báo giá(*)
              </Link>
            )}
          </div>

          <div className="bg-white">
            <div className="p-3 flex flex-col gap-2 text-[14px] font-light">
              <div className="grid grid-cols-5 py-1 border-b ">
                <div className="col-span-2 font-normal">Khuyến mãi:</div>
                <div className="col-span-3 italic ">
                  <p>* Đang cập nhật</p>
                </div>
              </div>
              <div className="grid grid-cols-5 py-1 border-b ">
                <div className="col-span-2 ">Thông số sản phẩm:</div>
                <div
                  className="col-span-3 italic"
                  dangerouslySetInnerHTML={
                    Data?.detail
                      ? { __html: Data?.detail }
                      : { __html: "<p>Đang cập nhật</p>" }
                  }
                ></div>
              </div>
              {GropData && GropData.level1?.length > 0 && (
                <>
                  {GropData.level1.map((item, idx) => {
                    const slugKey = slugify(item, {
                      locale: "vi",
                      lower: true,
                      remove: /[*+~.()'"!:@,]/g,
                    });

                    const values = GropData[slugKey] || [];

                    return (
                      <div className="grid grid-cols-5 py-1" key={idx}>
                        <div className="col-span-2 font-normal">{item}:</div>
                        <div className="col-span-3 ">
                          {values.length > 0 ? (
                            <div className="flex items-center gap-1">
                              {values.map((item: string, idx: number) => (
                                <div
                                  key={idx}
                                  className="px-2 py-1 border hover:bg-slate-100 duration-300 cursor-pointer"
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p>Đang cập nhật</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </>
              )}
            </div>
          </div>
          <div className="flex flex-col items-center gap-2 text-white ">
            {Data?.price ? (
              <>
                {" "}
                <div
                  className="bg-red-700 text-center py-2 w-full rounded-md uppercase hover:bg-yellow-600 mt-2 cursor-pointer"
                  onClick={() => HandleOrder("buy")}
                >
                  Mua ngay
                </div>
                <div
                  className="bg-blue-500 text-center py-2 w-full rounded-md uppercase hover:bg-blue-700  cursor-pointer"
                  onClick={() => HandleOrder("add")}
                >
                  Thêm vào giỏ hàng
                </div>
              </>
            ) : (
              <Link
                className="bg-blue-500 text-center py-2 w-full rounded-md uppercase hover:bg-blue-700  cursor-pointer"
                href={`tel:${ContactData?.Hotline}`}
              >
                Liên hệ
              </Link>
            )}

            <p className="text-black text-[14px]">
              Gọi đặt mua{" "}
              <Link
                className="text-main hover:text-blue-900 duration-300"
                href={`tel:${ContactData?.Hotline}`}
              >
                {ContactData?.Hotline}
              </Link>{" "}
              -{" "}
              <Link
                className="text-main hover:text-blue-900 duration-300"
                href={`tel:${ContactData?.PhoneNumber}`}
              >
                {ContactData?.PhoneNumber}
              </Link>{" "}
              (8:30 - 21:00){" "}
            </p>
          </div>
        </div>
      </div>

      <div className="border-[1px] border-gray-300 rounded-lg  mt-5 overflow-hidden">
        <div className="p-4">
          <h2 className="text-[22px] font-semibold text-mainColorHover uppercase text-mainYellow  border-b-2 w-full pb-1 border-mainYellow">
            Thông tin chi tiết
          </h2>
          <div
            className="mt-2 font-light ck-content min-h-[50vh] p-3 "
            dangerouslySetInnerHTML={
              Data?.describe
                ? { __html: Data?.describe }
                : { __html: "Đang cập nhật" }
            }
          ></div>
          <div>
            <p className="text-[20px] tracking-[2px] ">
              <>
                Nếu quý khách muốn nhận tư vấn miễn phí, vui lòng liên hệ:{" "}
                <Link
                  href={`${
                    ContactData ? `tel:${ContactData.Hotline}` : "tel:"
                  }`}
                  className="font-bold"
                >
                  {ContactData?.Hotline}
                </Link>{" "}
                -{" "}
                <Link
                  href={`${
                    ContactData ? `tel:${ContactData.PhoneNumber}` : "tel:"
                  }`}
                  className="font-bold"
                >
                  {ContactData?.PhoneNumber}
                </Link>{" "}
                chúng tôi sẽ liên hệ và tư vấn miễn phí cho quý khách.
              </>
            </p>
          </div>
        </div>
      </div>
      <SimilarProducts
        Type={Data?.level1}
        Data={Products}
        Category={Category}
      />
      <QuotePopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </>
  );
};

export default ProductDetail;
