
import { CategoryProps, ContactProps, SocialMediaProps } from "@assets/props";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookMessenger,
  FaFacebookSquare,
  FaInstagram,
  FaPhoneAlt,
  FaSearch,
} from "react-icons/fa";
import { IoCart, IoLanguage } from "react-icons/io5";

import { IoIosArrowDown, IoMdCart } from "react-icons/io";

import { Badge, Modal } from "antd";
import { usePathname } from "next/navigation";

import { SiZalo } from "react-icons/si";
import slugify from "slugify";
import { Dropdown3LV } from "./Header/Dropdown";

import Mobile from "./Mobile/MobileUI";
import { FiSearch } from "react-icons/fi";
import Translate from "./Translate";
import { MdOutlineEmail } from "react-icons/md";
import { CiClock2 } from "react-icons/ci";

interface HeaderProps {
  Config: Array<any>;
  ProductCategory: CategoryProps[];
  PostsCategory: CategoryProps[];
}

const Header = ({ Config, ProductCategory, PostsCategory }: HeaderProps) => {
  const ContactData: ContactProps = Config?.find(
    (items: any) => items.id === "contact"
  );
  const SocialMedia: SocialMediaProps = Config?.find(
    (item: any) => item.id === "SocialMedia"
  );


  const HeaderItems = [
    {
      label: "TRANG CHỦ",
      value: "",
      image: "",
      children: [""],
    },
    // {
    //   label: "Rèm cửa",
    //   value: "san-pham/rem-cua",

    //   children: ProductCategory?.filter(
    //     (item) =>
    //       slugify(item.level0, { locale: "vi", lower: true }) === "rem-cua"
    //   ),
    // },
    {
      label: "RÈM VẢI",
      value: "san-pham/rem-vai",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-vai.jpg?alt=media&token=5b8ff0fd-35b5-450b-b510-7d8bf119e19b",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) === "rem-vai"
      ),
    },
    {
      label: "RÈM CẦU VỒNG",
      value: "san-pham/rem-cau-vong",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-cau-vong.jpg?alt=media&token=95b9c77c-b3aa-409a-a7ec-79dee78b99ee",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) === "rem-cau-vong"
      ),
    },
    {
      label: "RÈM CUỐN",
      value: "san-pham/rem-cuon",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-cuon.jpg?alt=media&token=f6e59cea-67cd-4a2a-9c18-168de1ac03e3",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) === "rem-cuon"
      ),
    },
    {
      label: "RÈM LÁ DỌC",
      value: "san-pham/rem-la-doc",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-la-doc.jpg?alt=media&token=c2c7200b-919d-4d37-9b71-36a86f21e3f8",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) === "rem-la-doc"
      ),
    },
    {
      label: "RÈM GỖ",
      value: "san-pham/rem-go",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-go.jpg?alt=media&token=eac08c4e-08ae-43e0-bd11-e366718a3a78",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) === "rem-go"
      ),
    },
    {
      label: "RÈM NHÔM",
      value: "san-pham/rem-nhom",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-go.jpg?alt=media&token=eac08c4e-08ae-43e0-bd11-e366718a3a78",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) === "rem-nhom"
      ),
    },
    {
      label: "RÈM, VÁCH TỔ ONG",
      value: "san-pham/rem-vach-to-ong",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-vach-to-ong.jpg?alt=media&token=811606db-53d4-416f-bf0c-125c4495be25",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) ===
          "rem-vach-to-ong"
      ),
    },

    {
      label: "CỬA CHỐNG MUỖI",
      value: "san-pham/cua-chong-muoi",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/cua-chong-muoi.jpg?alt=media&token=ed033c02-3bec-49aa-8040-e0ad433eff98",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) ===
          "cua-chong-muoi"
      ),
    },

    {
      label: "BẠT CUỐN",
      value: "san-pham/bat-cuon",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/bat-cuon.jpg?alt=media&token=3b3ef201-4b73-4f11-af7e-67271f13b2df",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) === "bat-cuon"
      ),
    },
    {
      label: "GIÀN PHƠI THÔNG MINH",
      value: "san-pham/gian-phoi-thong-minh",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/Gian-Phoi-11.jpg?alt=media&token=5825148a-85f8-49e7-875e-c704431ea65c",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) ===
          "gian-phoi-thong-minh"
      ),
    },
    {
      label: "ĐỘNG CƠ RÈM",
      value: "san-pham/dong-co-rem",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/dong-co-rem.jpg?alt=media&token=f9fbd0f5-6163-40c8-8e32-4380b9a81c93",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) === "dong-co-rem"
      ),
    },
    {
      label: "DECOR KHÁC",
      value: "san-pham/decor-khac",
      image:
        "https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/bat-cuon.jpg?alt=media&token=3b3ef201-4b73-4f11-af7e-67271f13b2df",
      children: ProductCategory?.filter(
        (item) =>
          slugify(item.level0, { locale: "vi", lower: true }) === "decor-khac"
      ),
    },
    {
      label: "TIN TỨC",
      value: "blogs/tin-tuc",
      image: "",
      children: [""],
    },
  ];

  const ContactItems = [
    {
      icon: <FaFacebookSquare />,
      backlink: SocialMedia?.facebook
        ? SocialMedia?.facebook
        : "https://www.facebook.com",
    },
    {
      icon: <SiZalo />,
      backlink: SocialMedia?.zalo ? SocialMedia?.zalo : "https://www.zalo.me",
    },
    {
      icon: <FaFacebookMessenger />,
      backlink: SocialMedia?.messenger
        ? SocialMedia?.messenger
        : "https://www.m.me",
    },
    {
      icon: <FaInstagram />,
      backlink: SocialMedia?.instagram
        ? SocialMedia?.instagram
        : "https://www.instagram.com",
    },
  ];

  return (
    <>
      <div className="d:block p:hidden top-0 w-full fixed z-50 bg-white">
        <div className="bg-blue-700 text-white ">
          <div className="w-[1300px] mx-auto flex justify-between items-center py-1 text-[13px] font-semibold">
            <p className="uppercase l">kiến tạo không gian</p>
            <div className="flex items-center gap-2">
              <Link
                href={`mailto:${ContactData?.Email}`}
                className="flex items-center gap-2 border-r-[1px] px-3"
              >
                <MdOutlineEmail />
                <p className="uppercase">Contact</p>
              </Link>
              <div className="flex items-center gap-2 border-r-[1px] px-3 border-slate-300">
                <CiClock2 />
                <p>{ContactData?.CompanyTime}</p>
              </div>
              <Link
                href={`tel:${ContactData?.Hotline}`}
                className="flex items-center gap-2 px-3 "
              >
                <FaPhoneAlt />
                <p>{ContactData?.Hotline}</p>
              </Link>
              <div className="ml-3 flex items-center gap-2 text-[16px]">
                {ContactItems?.map((item, idx) => (
                  <Link href={item.backlink} key={idx}>
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full bg-white shadow-lg">
          <div className="w-[1300px] mx-auto ">
            <div className="flex items-center gap-2 col-span-2 justify-center">
              <div>
                <Image
                  src={ContactData?.LogoWebsite}
                  alt="logo"
                  width={150}
                  height={150}
                />
              </div>
              <div className="grid grid-cols-7">
                {HeaderItems?.map((item, idx) => (
                  <div key={idx}>
                    {item.children.map((LV0Item: any, LV0idx) => (
                      <div key={LV0idx} className="group relative">
                        <Link
                          href={`/${item.value}`}
                          className="flex items-center gap-1 py-1 px-2"
                        >
                          <div className=" text-[14px] hover:text-blue-400 py-2 duration-300 border-b text-main border-white hover:border-main uppercase font-bold ">
                            {item.label}
                          </div>

                          {LV0Item.level1 !== undefined &&
                            LV0Item.level1.length > 0 && (
                              <IoIosArrowDown className="text-[10px]" />
                            )}
                          {item.value === "bang-gia" && (
                            <IoIosArrowDown className="text-[10px]" />
                          )}
                        </Link>
                        {LV0Item.level1 !== undefined &&
                          LV0Item.level1.length > 0 && (
                            <Dropdown3LV ServiceItem={LV0Item} />
                          )}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d:hidden p:block">
        <Mobile
          ContactData={ContactData}
          Header={HeaderItems}
          Config={Config}
        />
      </div>

      {/* <Modal
        footer={null}
        open={isLanguage}
        onCancel={() => setLanguage(false)}
      >
        <>
          <h3 className="text-center font-bold text-[22px] ">Chọn ngôn ngữ</h3>
          <div className="w-full h-[35px] mt-5">
            <Translate />
          </div>
        </>
      </Modal> */}
    </>
  );
};

export default Header;
