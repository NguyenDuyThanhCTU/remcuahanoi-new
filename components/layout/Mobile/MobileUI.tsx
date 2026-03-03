"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { PiHeartThin, PiShoppingCartThin, PiUserThin } from "react-icons/pi";
import {
  IoCart,
  IoLanguage,
  IoMenuOutline,
  IoSearch,
  IoSearchOutline,
} from "react-icons/io5";
import { Badge, Drawer } from "antd";

import Link from "next/link";
import { FiMenu } from "react-icons/fi";

import { IoIosMenu } from "react-icons/io";

import { FaSearch } from "react-icons/fa";
import Menu from "./Menu";
import { ContactProps } from "@assets/props";
import { useTypingEffect } from "@components/Items/ClientHandle";
import { useStateProvider } from "@context/StateProvider";

interface MobileProps {
  ContactData: ContactProps;
  Header: any;
  Config: any;
  setIsLanguage: (isOpen: boolean) => void;
}

const Mobile = ({
  ContactData,
  Header,
  Config,
  setIsLanguage,
}: MobileProps) => {
  const [isOpenMenu, setOpenMenu] = useState(false);
  const [search, setSearch] = useState("");
  const [isOpenSearch, setOpenSearch] = useState(false);
  const { CartItems } = useStateProvider();
  const texts = [
    "Bạn cần tìm gì ...?",
    "Nhập tên sản phẩm cần tìm ...",
    "Tìm kiếm sản phẩm ...",
  ];

  return (
    <div className="top-0 w-full z-50 bg-white  ">
      <div className="px-4 w-full flex justify-between items-center h-full bg-white border-4 rounded-md border-blue-600 text-main shadow-lg">
        <div className="text-[40px] p-2" onClick={() => setOpenMenu(true)}>
          <IoIosMenu />
        </div>
        <Link href={`/`} className="">
          <div className=" p-2">
            <Image
              src={ContactData?.LogoWebsite}
              width={100}
              height={100}
              alt="Logo"
              className="w-full h-full object-contain p-1"
            />
          </div>
        </Link>
        <div
          className="text-[22px] p-2"
          onClick={() => setOpenSearch(!isOpenSearch)}
        >
          <FaSearch />
        </div>
      </div>

      <div
        className={`${
          isOpenSearch
            ? " pullup h-[35px]"
            : " opacity-0 transform-none invisible h-0"
        }  bg-white w-full flex justify-between mt-[10px]  items-center shadow-xl gap-1  `}
      >
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none px-3"
          placeholder={useTypingEffect(texts, 50)}
        />
        <Link
          className="text-[22px]"
          href={`/?search=${search}`}
          onClick={() => {
            setSearch("");
            setOpenSearch(false);
          }}
        >
          <IoSearchOutline className=" text-white bg-main h-[35px] w-full px-3 " />
        </Link>
      </div>
      <>
        <Drawer
          onClose={() => setOpenMenu(false)}
          closeIcon={null}
          width={320}
          open={isOpenMenu}
          placement="left"
          className="reset_Drawer"
        >
          <Menu setIsOpen={setOpenMenu} HeaderItems={Header} Config={Config} />
        </Drawer>
      </>
    </div>
  );
};

export default Mobile;
