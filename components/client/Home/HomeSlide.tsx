"use client";
import { A11y, Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";

import Link from "next/link";
import slugify from "slugify";
import { CategoryProps, ProductProps } from "@assets/props";
import HomeTitle from "./HomeTitle";

import { GiReceiveMoney } from "react-icons/gi";
import { MdOutlineGroups } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { FaRegHandshake } from "react-icons/fa";

function HomeSlide({
  Data,
  Products,
}: {
  Data: ProductProps[];
  Products: ProductProps[];
}) {
  const Category = [
    {
      label: "RÈM VẢI",
      value: "san-pham/rem-vai",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-vai.jpg?alt=media&token=5b8ff0fd-35b5-450b-b510-7d8bf119e19b",
      quantity: Products?.filter((item) => item.level0 === "rem-vai").length,
    },
    {
      label: "RÈM CẦU VỒNG",
      value: "san-pham/rem-cau-vong",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-cau-vong.jpg?alt=media&token=95b9c77c-b3aa-409a-a7ec-79dee78b99ee",
      quantity: Products?.filter((item) => item.level0 === "rem-cau-vong")
        .length,
    },
    {
      label: "RÈM CUỐN",
      value: "san-pham/rem-cuon",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-cuon.jpg?alt=media&token=f6e59cea-67cd-4a2a-9c18-168de1ac03e3",
      quantity: Products?.filter((item) => item.level0 === "rem-cuon").length,
    },
    {
      label: "RÈM LÁ DỌC",
      value: "san-pham/rem-la-doc",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-la-doc.jpg?alt=media&token=c2c7200b-919d-4d37-9b71-36a86f21e3f8",
      quantity: Products?.filter((item) => item.level0 === "rem-la-doc").length,
    },
    {
      label: "RÈM GỖ",
      value: "san-pham/rem-go",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-go.jpg?alt=media&token=eac08c4e-08ae-43e0-bd11-e366718a3a78",
      quantity: Products?.filter((item) => item.level0 === "rem-go").length,
    },
    {
      label: "RÈM NHÔM",
      value: "san-pham/rem-nhom",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/Thiet-ke-chua-co-ten-3.jpg?alt=media&token=3bbe89ce-2ae4-49fc-ba53-b4707416c82c",
      quantity: Products?.filter((item) => item.level0 === "rem-nhom").length,
    },
    {
      label: "RÈM, VÁCH TỔ ONG",
      value: "san-pham/rem-vach-to-ong",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-vach-to-ong.jpg?alt=media&token=811606db-53d4-416f-bf0c-125c4495be25",
      quantity: Products?.filter((item) => item.level0 === "rem-vach-to-ong")
        .length,
    },

    {
      label: "CỬA CHỐNG MUỖI",
      value: "san-pham/cua-chong-muoi",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/cua-chong-muoi.jpg?alt=media&token=ed033c02-3bec-49aa-8040-e0ad433eff98",
      quantity: Products?.filter((item) => item.level0 === "cua-chong-muoi")
        .length,
    },

    {
      label: "BẠT CUỐN",
      value: "san-pham/bat-cuon",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/bat-cuon.jpg?alt=media&token=3b3ef201-4b73-4f11-af7e-67271f13b2df",
      quantity: Products?.filter((item) => item.level0 === "bat-cuon").length,
    },
    {
      label: "GIÀN PHƠI THÔNG MINH",
      value: "san-pham/dan-phoi-thong-minh",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/Gian-Phoi-11.jpg?alt=media&token=5825148a-85f8-49e7-875e-c704431ea65c",
      quantity: Products?.filter(
        (item) => item.level0 === "gian-phoi-thong-minh"
      ).length,
    },
    {
      label: "ĐỘNG CƠ RÈM",
      value: "san-pham/dong-co-rem",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/dong-co-rem.jpg?alt=media&token=f9fbd0f5-6163-40c8-8e32-4380b9a81c93",
      quantity: Products?.filter((item) => item.level0 === "dong-co-rem")
        .length,
    },
  ];

  return (
    <>
      {/* <div>
        <HomeTitle Title="Rèm cửa Hà Nội xưởng sản xuất giá tại gốc: Hứa ít - Làm nhiều" />
      </div>
      <p className="py-5">
        <strong className="text-blue-700">Rèm cửa</strong> là hàng mi diễm lệ
        của ô cửa sổ, là nét duyên dáng mang tâm hồn đẹp trong ngôi nhà bạn, với
        gần 20 năm hoạt động trong lĩnh vực{" "}
        <strong className="text-blue-700">rèm cửa</strong>, chúng tôi hiểu rõ
        nên làm thế nào, để hàng triệu ô cửa sổ luôn đẹp lộng lẫy và lãng mạn.
        Vì vậy mà <strong className="text-blue-700">Rèm cửa Hà Nội</strong> bằng
        tất cả niềm đam mê cháy bỏng, gửi cả tâm hồn của mình, tình cảm chân
        thành của mình vào từng ô cửa sổ trên khắp{" "}
        <strong className="text-blue-700">Việt Nam</strong>.
      </p> */}
      {/* <div>
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/BG.png?alt=media&token=dcaddadc-da92-44fe-ac93-18e9e471ab69"
          alt="bg"
          width={1200}
          height={800}
          className="border-2 border-black"
        />
      </div> */}
      <Swiper
        modules={[Navigation, Pagination, A11y, Autoplay]}
        spaceBetween={30}
        loop={true}
        centeredSlides={true}
        slidesPerView={1}
        slidesPerGroup={1}
        autoplay={{
          delay: 15000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        className="mySwiper relative"
      >
        {Data?.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`w-full p:h-[30vh] d:h-[60vh] bg-white flex items-center bg-no-repeat bg-cover bg-center relative bg-black`}
            >
              <Image
                src={item.image}
                alt="banner"
                width={1600}
                height={1600}
                className=" w-full h-full object-contain z-10"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div>
        <HomeTitle Title="Danh mục rèm cửa Hà Nội" />
        <div className="grid d:grid-cols-4 p:grid-cols-2 gap-5 py-5">
          {Category?.map((item, idx) => (
            <Link
              href={`/${item.value}`}
              key={idx}
              className="border shadow-lg"
            >
              <div className="w-full aspect-square">
                <Image
                  src={item.image}
                  alt="category"
                  width={200}
                  height={200}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-center uppercase py-5">
                <p className="font-bold">{item.label}</p>
                <p className="text-[14px]">{item.quantity} Sản phẩm</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default HomeSlide;
