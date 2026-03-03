import { PostProps } from "@assets/props";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import HomeTitle from "./HomeTitle";
import { FaHandHoldingDollar } from "react-icons/fa6";
import { MdOutlineGroups } from "react-icons/md";
import { FaRegHandshake } from "react-icons/fa";
import { TbTargetArrow } from "react-icons/tb";

export const NewCard = ({ Data }: { Data: PostProps }) => {
  return (
    <div className="">
      <Link href={`/${Data?.url}`} className="p-2">
        <div className="aspect-square">
          <Image
            src={Data?.image}
            alt="new"
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="py-2">
          <div
            className="text-center my-2 truncate2
        "
          >
            {Data?.title}
          </div>
        </div>
      </Link>
    </div>
  );
};

const HomeNew = ({ Data }: { Data: PostProps[] }) => {
  const policyItems = [
    {
      icon: <FaHandHoldingDollar />,
      value: (
        <>
          <strong className="text-blue-700">Hoàn tiền</strong> nếu sản phẩm
          không như ý
        </>
      ),
    },
    {
      icon: <MdOutlineGroups />,
      value: (
        <>
          <strong className="text-blue-700">Tư vấn</strong> và lắp đặt tại nhà
          miễn phí
        </>
      ),
    },
    {
      icon: <FaRegHandshake />,
      value: (
        <>
          <strong className="text-blue-700">Thiết kế</strong> đẹp xu hướng thẩm
          mỹ
        </>
      ),
    },
    {
      icon: <TbTargetArrow />,
      value: (
        <>
          <strong className="text-blue-700">Nâng tầm</strong>cửa sổ, tối ưu chi
          phí
        </>
      ),
    },
  ];
  return (
    <div className="">
      <div>
        <HomeTitle Title="Rèm cửa Hà Nội Cam Kết" />
      </div>
      <div className="grid p:grid-cols-1 d:grid-cols-4 gap-10 py-10">
        {policyItems?.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="text-[50px] text-blue-600 p-2">{item.icon}</div>
            <p>{item.value}</p>
          </div>
        ))}
      </div>
      <div>
        <HomeTitle Title="Tin tức" />
        <div className=" d:flex-row p:flex-col col-span-4 p:relative d: gap-5 mt-5 grid d:grid-cols-4 p:grid-cols-1">
          {Data?.map((item, idx) => (
            <div key={idx}>
              <NewCard Data={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeNew;
