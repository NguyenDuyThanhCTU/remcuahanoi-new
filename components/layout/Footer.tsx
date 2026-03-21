
import {
  BranchProps,
  ContactProps,
  PostProps,
  SocialMediaProps,
} from "@assets/props";
import { LocalFindById } from "@components/Items/Handle";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import {
  FaFacebookSquare,
  FaMapMarkerAlt,
  FaPhone,
  FaPhoneAlt,
  FaRegClock,
  FaUser,
} from "react-icons/fa";
import { FaEarthAmericas, FaSquarePhone } from "react-icons/fa6";
import { IoIosStar, IoMdMail } from "react-icons/io";
import { IoHomeSharp, IoLocation } from "react-icons/io5";
import { MdKeyboardArrowRight, MdOutlineEmail } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import slugify from "slugify";
interface FooterProps {
  Config: Array<any>;

  Branches: BranchProps[];
}

const HeaderItems = [
  {
    label: "Trang chủ",
    value: "",
  },

  {
    label: "Giới thiệu",
    value: "blogs/ve-dac-an-love",
  },
  {
    label: "Tin tức",
    value: "blogs/tin-tuc",
  },
  {
    label: "Liên hệ",
    value: "lien-he",
  },
];

const Footer = ({ Config, Branches }: FooterProps) => {
  const ContactData: ContactProps = LocalFindById(Config, "contact");

  const ContactItems = [
    {
      label: `${ContactData?.Hotline} `,
      value: "",
      icon: <FaPhoneAlt />,
    },
    {
      label: `${ContactData?.Hotline} (Zalo)`,
      value: "",
      icon: <SiZalo />,
    },
    {
      label: ContactData?.Email,
      value: `mailto:${ContactData?.Email}`,
      icon: <CiMail />,
    },
    {
      label: ContactData?.WebsiteAddress,
      value: ContactData?.WebsiteAddress,
      icon: <FaEarthAmericas />,
    },
  ];

  return (
    <div className="text-gray-600">
      <div className=" py-10 d:w-[1500px] d:mx-auto p:w-auto p:mx-2">
        <div className=" grid p:grid-cols-1 d:grid-cols-8 gap-5">
          <div className="p:col-span-1 d:col-span-3">
            <div className="text-[22px] font-normal">VỀ ĐẶC RÈM CỬA HÀ NỘI</div>
            <div className="font-light text-[14px] py-2 ">
              Với rất nhiều nhân viên tư vấn trên khắp mọi miền được đào tạo
              chuyên nghiệp về rèm cửa, không chỉ hướng dẫn và xử lý các vấn đề
              từ các loại mành rèm, chúng tôi luôn mong cùng chia sẻ các kinh
              nghiệm, giúp bạn có được một không gian nội thất hoàn hảo hơn với
              những bộ rèm sang trọng nhất.
            </div>
            <div className="flex flex-col gap-1 font-light text-[14px]">
              {ContactItems?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  {item.icon}
                  <Link href={`/${item.value}`}>{item.label}</Link>
                </div>
              ))}
            </div>{" "}
          </div>
          <div className="">
            <div className="text-[22px] font-normal">Liên kết</div>
            <div className="font-light text-[14px] py-2  flex flex-col gap-2">
              {HeaderItems.map((item, idx) => (
                <Link href={`/${item.value}`} key={idx}>
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="p:col-span-1 d:col-span-2">
            <div className="text-[22px] font-normal">ĐỊA CHỈ CÁC TRỤ SỞ</div>
            <div className="font-light text-[14px] py-2   grid d:grid-cols-2 p:grid-cols-1 gap-2">
              {Branches?.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="flex items-center  gap-2">
                    <FaMapMarkerAlt />
                    <span className="underline"> {item.title}</span>
                  </div>
                  {/* <p>
                    <strong> Hotline: </strong>
                    <Link
                      href={`tel:${item.hotline}`}
                      className="text-blue-700 hover:underline"
                    >
                      {item.hotline}{" "}
                    </Link>
                    - ({item.name})
                  </p> */}
                  <p>
                    {" "}
                    <strong>Địa chỉ:</strong> {item.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="p:col-span-1 d:col-span-2">
            <div className="text-[22px] font-normal">Rèm cửa Hà Nội</div>
            <div className="font-light text-[14px] py-2">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.3120342022603!2d105.80938809999999!3d21.0201972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab66585653a9%3A0x97444dfec25e0e18!2zMTAgTmcuIDIwIFAuIEh14buzbmggVGjDumMgS2jDoW5nLCBUaMOgbmggQ8O0bmcsIMSQ4buRbmcgxJBhLCBIw6AgTuG7mWkgMTAwMDAw!5e0!3m2!1sen!2s!4v1761365351258!5m2!1sen!2s"
                width="300"
                height="250"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
