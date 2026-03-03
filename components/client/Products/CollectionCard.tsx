'use client';
import { CategoryProps, ContactProps, ProductProps } from '@assets/props';
import { Modal, Tooltip } from 'antd';
import Image from 'next/image';
import React, { useState } from 'react';
import { FaShoppingCart, FaTags } from 'react-icons/fa';
import { IoEyeSharp } from 'react-icons/io5';
import { useStateProvider } from '@context/StateProvider';
import Link from 'next/link';
import ShortDetail from './CollectionCard/ShortDetail';
import slugify from 'slugify';

interface CollectionCardProps {
  Data: ProductProps;
  Category: CategoryProps[];
}

const CollectionCard = ({ Data, Category }: CollectionCardProps) => {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [isData, setIsData] = useState<ProductProps | any>();
  const { HandleNavigate, Config } = useStateProvider();
  const contactData: ContactProps = Config?.find(
    (item) => item.id === 'contact'
  );

  const Tags = Category?.find(
    (item) =>
      slugify(item.level0, { locale: 'vi', lower: true }) === Data.level0
  )?.level0;
  const matchedItem = Category?.find((item) =>
    item.level1?.some(
      (level) => slugify(level, { locale: 'vi', lower: true }) === Data.level1
    )
  );
  const TagsLV1 = matchedItem
    ? matchedItem?.level1.find(
        (level) => slugify(level, { locale: 'vi', lower: true }) === Data.level1
      )
    : undefined;
  return (
    <>
      <div className="bg-white">
        <div className="h-[250px] border-2 border-gray-100 relative group overflow-hidden ">
          <Image
            src={Data?.image}
            alt="Card"
            width={500}
            height={800}
            className={`${
              Data.level1 === 'heo-giong' && 'border-dashed border-mainOrange'
            } w-full h-full object-cover object-center border-2  cursor-pointer hover:scale-105 duration-300`}
            onClick={() => HandleNavigate(`/product/${Data?.url}`)}
          />

          <div className="flex w-full text-[22px]  justify-center absolute group-hover:bottom-5 cursor-pointer -bottom-14 duration-300">
            <Tooltip title="Tùy chọn">
              <div
                className=" p-3 bg-white rounded-l-md border-r hover:bg-black hover:text-white duration-300"
                onClick={() => HandleNavigate(`/product/${Data?.url}`)}
              >
                <FaShoppingCart />
              </div>
            </Tooltip>
            <Tooltip title="Xem nhanh">
              <div
                className=" p-3 bg-white rounded-r-md hover:bg-black hover:text-white duration-300"
                onClick={() => {
                  setIsOpenModal(true);
                  setIsData(Data);
                }}
              >
                <IoEyeSharp />
              </div>
            </Tooltip>
          </div>
        </div>
        <div className="bg-gray-100 border shadow-md">
          <div className="py-4 px-3 flex flex-col gap-2  cursor-pointer ">
            {/* <div className="justify-start w-full flex items-center gap-1 text-[14px] text-gray-500 h-[21px]">
              <FaTags />{' '}
              <p className="truncate">{Data?.level1 ? TagsLV1 : Tags}</p>
            </div> */}
            <Link
              href={`/product/${Data?.url}`}
              className=" text-yellow-600 text-center font-bold hover:text-blue-800  truncate2 h-[46px] "
            >
              {Data.title}
            </Link>
            <p className="text-red-600 text-[14px] text-center">
              {Data.price ? `${Data.price} ₫` : 'Liên hệ'}
            </p>

            {/* <p>
              Liên Hệ:{' '}
              <Link
                href={`tel:${contactData?.Hotline}`}
                className="text-red-600 font-bold"
              >
                {contactData?.Hotline}
              </Link>{' '}
            </p> */}
            {/* <div className="flex justify-center">
              <div
                className="bg-red-600 px-5 py-1 rounded-full text-white cursor-pointer hover:bg-red-700"
                onClick={() => HandleNavigate(`/${Data.url}`)}
              >
                Xem thêm
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <Modal
        footer={null}
        open={isOpenModal}
        width={1000}
        onCancel={() => setIsOpenModal(false)}
        destroyOnClose={true}
      >
        <ShortDetail Data={isData} />
      </Modal>
    </>
  );
};

export default CollectionCard;
