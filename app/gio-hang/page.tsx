import { ProductProps } from '@assets/props';
import Cart from '@components/client/Cart/Cart';
import { find } from '@config/lib/api';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Giỏ hàng',
};
const CartPage = async () => {
  const Products = await find('Products');
  Products?.forEach((item: ProductProps | any) => {
    item.price = Number(item?.price?.replace(/\D/g, ''));
  });
  return (
    <div>
      <Cart Data={Products} />
    </div>
  );
};

export default CartPage;
