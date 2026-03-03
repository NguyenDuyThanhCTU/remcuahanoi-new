'use client';
import { CategoryProps } from '@assets/props';
import { Drawer } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoOptionsSharp } from 'react-icons/io5';
import slugify from 'slugify';

const CollectionCategory = ({ Data }: { Data: CategoryProps[] }) => {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div
        className="flex items-center text-[20px] uppercase mt-2 mb-5 gap-2 hover:text-mainOrange duration-300 cursor-pointer"
        onClick={() => setOpen(true)}
      >
        <div>
          <IoOptionsSharp />
        </div>
        <p>Danh mục sản phẩm </p>
      </div>
      <>
        <Drawer
          placement="left"
          closable={false}
          width={300}
          onClose={() => setOpen(false)}
          open={isOpen}
        >
          <div>
            <div className="bg-mainOrange text-white py-1 text-center text-[20px] uppercase font-semibold">
              Danh mục sản phẩm
            </div>
            <div className="flex flex-col gap-3 py-3 text-[18px]">
              {Data?.map((item, idx) => (
                <div
                  className="text-black hover:text-orange-600 duration-300"
                  key={idx}
                >
                  <Link
                    href={`/collections/${slugify(item.level0, {
                      locale: 'vi',
                      lower: true,
                    })}`}
                  >
                    {item.level0}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </Drawer>
      </>
    </>
  );
};

export default CollectionCategory;
