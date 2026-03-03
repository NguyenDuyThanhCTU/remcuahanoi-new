import { ProductProps } from '@assets/props';
import { Image } from 'antd';
import Link from 'next/link';
import React from 'react';
import { BsBox } from 'react-icons/bs';
import { TbListDetails } from 'react-icons/tb';
const ShortDetail = ({ Data }: { Data: ProductProps }) => {
  const Tags =
    Data?.level1 === 'heo-giong'
      ? 'Heo giống'
      : Data?.level0 === 'tinh-heo'
      ? 'Tinh heo'
      : Data?.level0 === 'gia-nhay-heo-duc' && 'Giá nhảy heo đực';
  return (
    <>
      <div className="grid p:grid-cols-1 d:grid-cols-2 font-LexendDeca font-light gap-5 text-[16px]">
        <div className="flex flex-col">
          <div className="h-[440px] overflow-hidden">
            <Image
              src={Data?.image}
              alt="main"
              className="h-full object-center"
            />
          </div>

          <div className="flex h-[84px] overflow-hidden ">
            {Data?.subimage?.map((item, idx) => (
              <Image.PreviewGroup key={idx}>
                <Image
                  className="p-2 h-full  object-contain hover:scale-110 duration-500"
                  src={item.url}
                />
              </Image.PreviewGroup>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-[25px]">{Data?.title}</h2>
          <div className="">
            Tags: <span className="text-blue-500">{Tags}</span> | Mã sản phẩm:{' '}
            <span className="text-blue-500"> {Data?.id}</span>
          </div>
          <p className="mt-3 text-[23px]">Giá:</p>
          <p className="text-red-500">
            {Data?.price ? `${Data?.price}₫` : 'Đang cập nhật'}
          </p>
          <div className="border-2 border-red-500 border-dashed relative mt-10">
            <div className="p-2">
              <div
                className="ck-content px-5 font-LexendDeca"
                dangerouslySetInnerHTML={
                  Data.detail ? { __html: Data?.detail } : { __html: '' }
                }
              ></div>
            </div>
            <div className="flex gap-2 items-center text-red-600  font-normal bg-white absolute -top-3 left-4 px-2">
              <div>
                <BsBox />
              </div>
              <p className="uppercase">Mô tả sản phẩm</p>
            </div>
          </div>
          <div className="flex justify-end mt-7">
            <Link
              href={`tel:0913498769`}
              className="border border-orange-600 rounded-lg uppercase py-2 px-6 text-orange-600 font-normal hover:bg-orange-600 hover:text-white duration-300 cursor-pointer"
            >
              Liên hệ ngay
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShortDetail;
