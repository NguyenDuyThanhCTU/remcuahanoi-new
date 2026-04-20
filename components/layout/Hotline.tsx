"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaYoutube,
  FaPhone,
  FaTiktok,
  FaFacebookMessenger,
  FaInstagram,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

import { MdOutlineGroups } from "react-icons/md";
import { IconType } from "react-icons/lib";
import { useEffect, useState } from "react";
import { FaPhoneFlip } from "react-icons/fa6";

import Image from "next/image";
import { LocalFindById } from "@components/Items/Handle";
import { ContactProps, SocialMediaProps } from "@assets/props";

interface IconMappingType {
  [key: string]: IconType;
}
export const HotlineIconMapping: IconMappingType = {
  FaFacebookF: FaFacebookF,
  FaYoutube: FaYoutube,
  FaPhone: FaPhone,
  FaTiktok: FaTiktok,
  FaFacebookMessenger: FaFacebookMessenger,
  FaInstagram: FaInstagram,
  SiZalo: SiZalo,
  MdOutlineGroups: MdOutlineGroups,
};

function Hotline({ Config }: { Config: Array<any> }) {
  const Contact: ContactProps = LocalFindById(Config, "contact");
  const SocialMedia: SocialMediaProps = LocalFindById(Config, "SocialMedia");

  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const HotlineItems = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/120px-Facebook_f_logo_%282019%29.svg.png",
      label: "Facebook",
      link: SocialMedia?.facebook
        ? SocialMedia?.facebook
        : "https://facebook.com",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Tiktok_icon.svg/120px-Tiktok_icon.svg.png?_=20240827133148",
      label: "Tiktok",
      link: SocialMedia?.tiktok ? SocialMedia?.tiktok : "https://tiktok.com",
    },
  ];

  return (
    <>
      <div className="d:block p:hidden fixed right-0 top-[50%] z-50">
        <div className="flex flex-col gap-1">
          {HotlineItems.map((item, idx) => (
            <Link href={item.link} key={idx} target="_blank">
              <div className=" relative -right-[157px] border border-gray-300 w-[200px] bg-white cursor-pointer hover:-translate-x-[157px] duration-300">
                <div className="p-2  items-center grid grid-cols-3">
                  <div className="w-[25px] h-[25px]">
                    <img
                      src={item.icon}
                      alt="zalo"
                      width={50}
                      height={50}
                      className="w-full h-full"
                    />
                  </div>
                  <div className="col-span-2">{item.label}</div>
                </div>
              </div>
            </Link>
          ))}

          <div
            onClick={handleScrollToTop}
            className={`${
              showButton ? " pullup " : " opacity-0 transform-none invisible"
            } mt-[10px]`}
          >
            <div className=" relative -right-[157px] border border-gray-300 w-[200px] bg-white cursor-pointer hover:-translate-x-[157px] duration-300">
              <div className="p-2  items-center grid grid-cols-3">
                <div className="w-[25px] h-[25px]">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Firefox_Home_-_logo.png/120px-Firefox_Home_-_logo.png"
                    alt="zalo"
                    width={50}
                    height={50}
                    className="w-full h-full"
                  />
                </div>
                <div className="col-span-2">Lên đầu trang</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d:hidden p:block fixed right-0 top-[40%] z-50">
        <div className="flex flex-col gap-1">
          {HotlineItems.map((item, idx) => (
            <Link href={item.link} key={idx} target="_blank">
              <div className=" relative border border-gray-300  bg-white cursor-pointer ">
                <div className="p-2 ">
                  <div className="w-[25px] h-[25px]">
                    <img
                      src={item.icon}
                      alt="zalo"
                      width={50}
                      height={50}
                      className="w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </Link>
          ))}

          <div
            onClick={handleScrollToTop}
            className={`${
              showButton ? " pullup " : " opacity-0 transform-none invisible"
            } mt-[10px]`}
          >
            <div className=" relative border border-gray-300  bg-white cursor-pointer ">
              <div className="p-2">
                <div className="w-[25px] h-[25px]">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Firefox_Home_-_logo.png/120px-Firefox_Home_-_logo.png"
                    alt="zalo"
                    width={50}
                    height={50}
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hotline;
