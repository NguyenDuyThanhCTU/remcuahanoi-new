'use client';
import { ProductProps } from '@assets/props';
import { useRouter } from 'next/navigation';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

export type StateContextType = {
  isLoading: number;
  setIsLoading: (loading: any) => void;
  OpenCart: boolean;
  setOpenCart: (openCart: boolean) => void;

  FormData: any;
  setFormData: (formData: any) => void;
  HandleNavigate: (url: any) => void;
  Signal: any;
  setSignal: (signal: any) => void;
  isInView: number;
  CartItems: ProductProps[];
  setCartItems: (CartItems: any) => void;
  verify: boolean;
  setVerify: (verify: any) => void;
  CurrentUser: any;
  setCurrentUser: (currentUser: any) => void;
  Orders: any;
  setOrders: (orders: any) => void;
  isOpenLogin: any;
  setIsOpenLogin: (isOpen: any) => void;
  Config: Array<any>;
  setConfig: (Config: any) => void;
};

export const StateContext = createContext<StateContextType>({
  isLoading: 0,
  setIsLoading: () => {},

  OpenCart: false,
  setOpenCart: () => {},

  FormData: {},
  setFormData: () => {},
  HandleNavigate: () => {},
  Signal: {},
  setSignal: () => {},
  isInView: 0,
  CartItems: [],
  setCartItems: () => {},
  verify: false,
  setVerify: () => {},
  CurrentUser: {},
  setCurrentUser: () => {},
  Orders: [],
  setOrders: () => {},
  isOpenLogin: false,
  setIsOpenLogin: () => {},
  Config: [],
  setConfig: () => {},
});

export const StateProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(0);
  const [Signal, setSignal] = useState<any>();
  const [FormData, setFormData] = useState<any>({});
  const [Config, setConfig] = useState<Array<any>>([]);
  const router = useRouter();

  // animation position
  const [isInView, setisInView] = useState(0);

  const HandleNavigate = (url: any) => {
    router.push(`${url}`);

    setIsLoading(1000);
  };
  //

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset || document.documentElement.scrollTop;
      setisInView(position);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //Cart
  const [OpenCart, setOpenCart] = useState(false);
  const [CartItems, setCartItems] = useState<ProductProps[]>([]);
  const [Orders, setOrders] = useState<Array<any>>([]);
  //Auth
  const [verify, setVerify] = useState<boolean>(false);
  const [CurrentUser, setCurrentUser] = useState<any>();
  const [isOpenLogin, setIsOpenLogin] = useState<boolean>(false);
  return (
    <StateContext.Provider
      value={{
        Config,
        setConfig,
        isOpenLogin,
        setIsOpenLogin,
        Orders,
        setOrders,
        CurrentUser,
        setCurrentUser,
        verify,
        setVerify,
        setCartItems,
        CartItems,
        isInView,
        Signal,
        setSignal,
        HandleNavigate,
        FormData,
        setFormData,
        OpenCart,
        setOpenCart,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateProvider = () => useContext(StateContext);
