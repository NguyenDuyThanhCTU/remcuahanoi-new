import { ProductProps } from '@assets/props';
import Order from '@components/client/Payment/Order';
import { find } from '@config/lib/api';
import { Metadata } from 'next';
import React from 'react';
export const metadata: Metadata = {
  title: 'Đặt hàng',
};
const PaymentPage = async () => {
  const Products = await find('Products');
  const Orders = await find('Orders');

  Products?.forEach((item: ProductProps | any) => {
    item.price = Number(item?.price?.replace(/\D/g, ''));
  });

  return (
    <>
      <Order Data={Products} />
    </>
  );
};

export default PaymentPage;
