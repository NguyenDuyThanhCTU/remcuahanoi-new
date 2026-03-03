import { PostProps } from "@assets/props";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaUser } from "react-icons/fa";

const BlogCard = ({ Data }: { Data: PostProps }) => {
  return (
    <div className="text-black">
      <Link href={`/${Data?.url}`}>
        <div className="border border-t-mainYellow h-[225px] overflow-hidden rounded-t-md">
          <Image
            src={Data?.image}
            alt="Blogs"
            width={500}
            height={500}
            className="h-full w-full object-cover hover:scale-105 duration-300 rounded-t-md"
          />
        </div>
      </Link>
      <div className="rounded-b-md bg-white px-4 py-3 flex flex-col gap-2">
        <Link
          className="  duration-300  truncate2 hover:text-lime-400"
          href={`/${Data?.url}`}
        >
          {Data?.title}
        </Link>

        <div>
          <div className="font-light text-[14px] truncate2 text-gray-500">
            {Data?.description}
          </div>
        </div>
        <div className=" text-[14px] text-main gap-2">
          <div className="flex items-center gap-1">
            <CiClock1 />
            <span>{Data?.date}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
