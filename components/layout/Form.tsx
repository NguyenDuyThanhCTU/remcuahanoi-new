'use client';
import { IconType } from 'react-icons/lib';
import { FaPhoneSquareAlt, FaSearchLocation, FaUser } from 'react-icons/fa';
import { IoMdMail, IoMdTime } from 'react-icons/io';
import { ContactProps } from '@assets/props';
import { useStateProvider } from '@context/StateProvider';
import { notification } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { TfiHeadphoneAlt } from 'react-icons/tfi';
// import { useScrollAnimation } from '@context/CustomHook';

interface BlogsForm {
  name: string;
  phone: string;
  tour: string;
  gmail: String;
  note: string;
}

interface InputFormProps {
  isForm: any;
  setForm: (isForm: any) => void;
  placeholder: string;
  type: string;
  icon: string;
  label: string;
}
interface IconMappingType {
  [key: string]: IconType;
}

export const InputForm = ({
  isForm,
  setForm,
  placeholder,
  type,
  icon,
  label,
}: InputFormProps) => {
  const IconTopFooterFormMapping: IconMappingType = {
    FaUser: FaUser,
    FaPhoneSquareAlt: FaPhoneSquareAlt,
    FaSearchLocation: FaSearchLocation,
    IoMdMail: IoMdMail,
    IoMdTime: IoMdTime,
  };

  const Icon = IconTopFooterFormMapping[icon];
  return (
    <div className="bg-white text-black rounded-md shadow-lg">
      <div className="p-2 flex gap-2 items-center">
        <Icon />
        <input
          placeholder={placeholder}
          value={isForm[label]}
          onChange={(e) => setForm({ ...isForm, [label]: e.target.value })}
          type={type}
          className="w-full outline-none"
        />
      </div>
    </div>
  );
};

const TopFooterForm = ({ ConfigData }: { ConfigData: Array<any> }) => {
  const [isForm, setForm] = useState({
    name: '',
    phone: '',
    service: '',
    gmail: '',
    note: '',
  });

  const { HandleNavigate } = useStateProvider();
  const FieldItems = [
    {
      type: 'text',
      label: 'name',
      placeholder: 'Nhập họ tên của bạn',
      icon: 'FaUser',
    },
    {
      type: 'text',
      label: 'phone',
      placeholder: 'Nhập số điện thoại của bạn',
      icon: 'FaPhoneSquareAlt',
    },
    {
      type: 'text',
      value: 'service',
      label: 'tour',
      placeholder: 'Thông tin món + số lượng...',
      icon: 'FaSearchLocation',
    },
    {
      type: 'text',
      label: 'gmail',
      placeholder: 'Nhập gmail của bạn',
      icon: 'IoMdMail',
    },
    {
      type: 'text',
      label: 'note',
      placeholder: 'Ghi chú',
      icon: 'IoMdTime',
    },
  ];
  const ContactData: ContactProps = ConfigData?.find(
    (item) => item.id === 'contact'
  );

  const HandleDiscard = () => {
    setForm({
      name: '',
      phone: '',
      service: '',
      gmail: '',
      note: '',
    });
  };

  const HandleSubmit = async () => {
    HandleNavigate(3000);
    if (!isForm.name || !isForm.phone) {
      notification['warning']({
        message: 'Thao tác KHÔNG thành công',
        description: 'Vui lòng nhập tên và số điện thoại',
      });
    } else {
      const dataFields = [
        { title: 'Họ Tên:', value: isForm.name },
        { title: 'SĐT:', value: isForm.phone },
        { title: 'Email:', value: isForm.gmail },
        { title: 'Ghi chú:', value: isForm.note },
        { title: 'Thông tin món & số lượng:', value: isForm.service },
      ];
      let data: any = {};

      dataFields?.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        `https://formsubmit.co/ajax/${ContactData?.Email}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        notification['success']({
          message: 'Thành công !',
          description: `
               Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
        HandleDiscard();
      } else {
        notification['error']({
          message: 'Lỗi !',
          description: `
               Lỗi không xác định !`,
        });
      }
    }
  };
  return (
    <div
      className={` bg-[url(https://firebasestorage.googleapis.com/v0/b/gachoplatvanquan.appspot.com/o/biet-thu-2-tang-mai-thai-can-tho-chi-nguyet-7.webp?alt=media&token=ce76c4da-2a6c-4c3c-9a08-8a4eae716fb0)] bg-no-repeat bg-cover bg-center relative`}
      id="topFooterForm"
    >
      <div className="bg-[rgba(0,0,0,0.7)] absolute top-0 w-full h-full"></div>
      <div className="bg-slate-300 absolute bottom-0 w-full h-20"></div>

      <div className="d:w-[1200px] d:mx-auto p:mx-2 p:w-auto py-10 text-white relative z-20">
        <div className={`flex flex-col gap-3`}>
          <h2 className="text-[25px] uppercase">Đặt xe ngay</h2>
          <div className="bg-white h-[2px] w-28"></div>
          <p className="text-[14px]">
            Văn phòng của chúng tôi mở cửa tất cả các ngày trong tuần <br /> và
            nhân viên của chúng tôi sẽ rất vui lòng trả lời kịp thời mọi câu hỏi
            của bạn 24/7 <br /> qua Gọi điện thoại, email, SMS, Zalo, Facebook,
            . Tất cả nhân viên của chúng tôi <br /> cam kết phục vụ và làm cho
            chuyến đi của bạn trở nên thú vị và khó quên!
          </p>
        </div>
        <div className={`grid p:grid-cols-1 d:grid-cols-3 mt-5 gap-5 `}>
          <div className="col-span-2">
            <div className=" grid p:grid-cols-1 d:grid-cols-2 gap-3">
              {FieldItems.map((item, idx) => (
                <div key={idx}>
                  <InputForm
                    icon={item.icon}
                    isForm={isForm}
                    label={item.label}
                    placeholder={item.placeholder}
                    setForm={setForm}
                    type={item.type}
                  />
                </div>
              ))}
              <div
                className="bg-blue-500 text-white rounded-md shadow-lg cursor-pointer hover:bg-blue-600 duration-300"
                onClick={() => HandleSubmit()}
              >
                <div className="p-2 text-center uppercase font-normal">
                  Gửi ngay
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 bg-white text-black gap-3 mt-5 items-center">
              <div className="px-5">
                Bạn có thể liên hệ số hotline để được tư vấn miễn phí
              </div>
              <div className="text-red-500 font-normal flex items-center gap-4 py-4">
                <div className="text-[25px] p-1">
                  <TfiHeadphoneAlt />
                </div>
                <div>
                  <strong className="text-black">Hotline 24/7 </strong>
                  <div>
                    {ContactData?.Hotline && (
                      <Link href={`tel:${ContactData?.Hotline}`}>
                        {ContactData?.Hotline}
                      </Link>
                    )}
                    <br />
                    {ContactData?.PhoneNumber && (
                      <Link href={`tel:${ContactData?.PhoneNumber}`}>
                        {ContactData?.PhoneNumber}
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="max-h-[268px] w-full ">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/thuexetienchuyen-f7d79.appspot.com/o/418542449_765948105555783_1660988577420912873_n.jpg?alt=media&token=f2632223-0d54-4c6b-8f78-83eb658bcfb8"
              alt="banner"
              width={1000}
              height={1000}
              className="h-full w-full object-cover  object-top"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopFooterForm;
