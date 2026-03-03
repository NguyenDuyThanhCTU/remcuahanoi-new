"use client";

import { useStateProvider } from "@context/StateProvider";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiMailSend, BiSolidSend } from "react-icons/bi";
import { IoMdArrowDropright } from "react-icons/io";
import { GrSend } from "react-icons/gr";
import { RxCross2 } from "react-icons/rx";
import slugify from "slugify";
import { ContactProps, SocialMediaProps } from "@assets/props";
import { LocalFindById } from "@components/Items/Handle";
import { useTypingEffect } from "@components/Items/ClientHandle";

interface MenuProps {
  setIsOpen: (isOpen: boolean) => void;
  HeaderItems: any;
  Config: Array<any>;
}

const Menu = ({ setIsOpen, HeaderItems, Config }: MenuProps) => {
  const [isOpenMenu, setOpenMenu] = useState("");

  const ContactData: ContactProps = LocalFindById(Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(Config, "SocialMedia");

  const texts = ["Bạn cần tư vấn?", "Nhập địa chỉ email của bạn..."];

  const SocialItems = [
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/klatexpress.appspot.com/o/facebook__6__53aaa8d352524d3eb025af5203eaa437_icon.webp?alt=media&token=2b491511-e084-4c3a-9100-b56e765415eb",
      link: SocialMedia?.facebook ? SocialMedia?.facebook : "",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/klatexpress.appspot.com/o/tik-tok_d85bb4e7468c43ac9ed5437649b7405c_icon.webp?alt=media&token=617e6e75-c600-4d32-a764-f0026d42b63e",
      link: SocialMedia?.tiktok ? SocialMedia?.tiktok : "",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/klatexpress.appspot.com/o/youtube__5__4f04522e10494557a651f53a33ad4d76_icon.webp?alt=media&token=dd0a7105-47c9-4852-ae3b-9dcd0c80841e",
      link: SocialMedia?.youtube ? SocialMedia?.youtube : "",
    },
    {
      icon: "https://firebasestorage.googleapis.com/v0/b/klatexpress.appspot.com/o/z5851627838739_4a80404aef3cea1f5a9d6ed52df04917.png?alt=media&token=69e862a4-4aee-411e-9c65-858ed2adb892",
      link: SocialMedia?.zalo ? SocialMedia?.zalo : "",
    },
  ];

  return (
    <div className="font-Nunito h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between px-5 text-[24px] items-center py-2 border-b">
          <h3 className="font-normal">Menu</h3>
          <div onClick={() => setIsOpen(false)}>
            <RxCross2 />
          </div>
        </div>
        <div className="p-4 flex flex-col gap-4 text-[13px]">
          {HeaderItems.map((item: any, idx: any) => {
            return (
              <div key={idx}>
                <div className="flex flex-col gap-4 ">
                  {item.children?.map((LV1Item: any, idx: any) => {
                    return (
                      <div key={idx}>
                        <div
                          className={`${
                            isOpenMenu === item.value && "text-main "
                          } flex justify-between items-center font-semibold`}
                        >
                          <Link
                            onClick={() => setIsOpen(false)}
                            href={`/${item.value}`}
                          >
                            {item.label}
                          </Link>
                          {LV1Item.level1 !== undefined &&
                            LV1Item.level1.length > 0 && (
                              <IoMdArrowDropright
                                className="group-hover:-rotate-90"
                                onClick={() => {
                                  if (item.level0 === isOpenMenu) {
                                    setOpenMenu("");
                                  } else {
                                    setOpenMenu(LV1Item.level0);
                                  }
                                }}
                              />
                            )}
                        </div>
                        {LV1Item.level1 !== undefined &&
                          LV1Item.level1.length > 0 &&
                          LV1Item.level0 === isOpenMenu && (
                            <div>
                              <div className="flex flex-col ">
                                {LV1Item?.level1.map(
                                  (LV2item: string, LV2idx: number) => {
                                    const LV1Slug = slugify(LV2item, {
                                      locale: "vi",
                                      lower: true,
                                    });
                                    return (
                                      <Link
                                        onClick={() => setIsOpen(false)}
                                        href={`/san-pham/${LV1Slug}`}
                                        key={LV2idx}
                                        className=" p-2 w-full hover:bg-main hover:text-white duration-300"
                                      >
                                        {LV2item}
                                      </Link>
                                    );
                                  }
                                )}
                              </div>
                            </div>
                          )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-3 py-2 font-normal flex flex-col gap-2">
        <h3 className="text-red-600 text-[20px] uppercase font-semibold">
          Hỗ trợ 24/7
        </h3>
        <p className="text-gray-500 text-[16px]">
          Đừng ngần ngại liên hệ chúng tôi, hổ trợ 24/7 từ thứ 2 - thứ 7.
          <br /> Hotline:{" "}
          <Link
            onClick={() => setIsOpen(false)}
            className="text-blink hover:underline "
            href={`tel:${ContactData?.Hotline}`}
          >
            {ContactData?.Hotline}
          </Link>
        </p>
        <div className="border ">
          <div className="w-full flex justify-between p-1">
            <input
              type="text"
              className="w-full outline-none text-[17px] px-2 font-light text-black "
              placeholder={useTypingEffect(texts, 50)}
            />
            <div className="text-[23px] px-2">
              <GrSend className="" />
            </div>
          </div>
        </div>

        <div className="flex gap-4">
          {SocialItems.map((item, idx) => (
            <Link
              href={item.link}
              target="_blank"
              key={idx}
              className="w-7 h-7 rounded-full"
            >
              <Image
                src={item.icon}
                alt="social"
                width={100}
                height={100}
                className="w-full h-full object-cover"
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
