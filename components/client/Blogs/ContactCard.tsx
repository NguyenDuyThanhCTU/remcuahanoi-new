import { ContactProps, SEOProps, SocialMediaProps } from "@assets/props";
import { find } from "@config/lib/api";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";
import { FcFactory, FcGlobe, FcSmartphoneTablet } from "react-icons/fc";
import { SiZalo } from "react-icons/si";

const ContactCard = async () => {
  const Config = await find("Config");
  const SEO: SEOProps = Config?.find((item: any) => item.id === "SEOconfig");
  const SocialMedia: SocialMediaProps = Config?.find(
    (item: any) => item.id === "SocialMedia"
  );
  const contact: ContactProps = Config?.find(
    (item: any) => item.id === "contact"
  );

  return (
    <div className="text-[25px] p-5">
      <h3 className="text-center font-normal  ">
        <strong>{SEO?.Title}</strong>
      </h3>
      <div className="flex flex-col gap-2 mt-3 text-[20px]">
        <div className="flex gap-1 items-center">
          <FcFactory className="text-[22px]" />
          <p>
            <strong className="text-[15px]">Địa chỉ: </strong>
            <span className="text-[15px] ">{contact?.CompanyAddress}</span>
          </p>
        </div>
        <div className="flex gap-1 items-center">
          <FcSmartphoneTablet className="text-[22px]" />
          <div>
            <strong className="text-[15px]">Hotline: </strong>
            <Link
              href={`tel:${contact?.Hotline}`}
              className="text-[15px] hover:underline"
            >
              {contact?.Hotline}
            </Link>{" "}
            -{" "}
            <Link
              href={`tel:${contact?.PhoneNumber}`}
              className="text-[15px] hover:underline"
            >
              {contact?.PhoneNumber}
            </Link>
          </div>
        </div>

        <div className="flex gap-1 items-center">
          <FcGlobe className="text-[22px]" />
          <div className="text-[15px]">
            <strong>Website: </strong>
            <Link
              target="_blank"
              href={`https://www.google.com/search?q=${contact.WebsiteAddress}`}
              className=" hover:underline hover:text-blue-600"
            >
              {contact.WebsiteAddress}
            </Link>
          </div>
        </div>
        <div className="flex justify-center flex-col w-full items-center mt-5 font-LexendDeca">
          <div className=" flex  gap-2 text-black text-[14px] flex-wrap mt-2">
            <Link
              href={`${SocialMedia?.facebook}`}
              target="_blank"
              className="bg-white rounded-lg cursor-pointer group"
            >
              <div className="p-2 flex gap-1 items-center bg-gray-200 rounded-xl">
                <div className="rounded-full text-[20px] p-1 bg-white text-blue-500 ">
                  <FaFacebook />
                </div>
                <p className="group-hover:text-lime-400 duration-300">
                  Facebook
                </p>
              </div>
            </Link>
            <Link
              href={`${SocialMedia?.youtube}`}
              target="_blank"
              className="bg-white rounded-lg cursor-pointer group"
            >
              <div className="p-2 flex gap-1 items-center bg-gray-200 rounded-xl">
                <div className="rounded-full text-[20px] p-1 bg-white text-red-500">
                  <FaYoutube />
                </div>
                <p className="group-hover:text-lime-400 duration-300">
                  Youtube
                </p>
              </div>
            </Link>
            <Link
              href={`${SocialMedia?.tiktok}`}
              target="_blank"
              className="bg-white rounded-lg cursor-pointer group"
            >
              <div className="p-2 flex gap-1 items-center bg-gray-200 rounded-xl">
                <div className="rounded-full text-[20px] p-1 bg-white ">
                  <FaTiktok />
                </div>
                <p className="group-hover:text-lime-400 duration-300">Tiktok</p>
              </div>
            </Link>
            <Link
              href={`${SocialMedia?.zalo}`}
              target="_blank"
              className="bg-white rounded-lg cursor-pointer group"
            >
              <div className="p-2 flex gap-1 items-center bg-gray-200 rounded-xl">
                <div className="rounded-full text-[20px] p-1 bg-white text-blue-500">
                  <SiZalo />
                </div>
                <p className="group-hover:text-lime-400 duration-300">Zalo</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
