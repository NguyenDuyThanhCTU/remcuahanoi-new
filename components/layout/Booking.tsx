"use client";
import { ContactProps } from "@assets/props";
import { useStateProvider } from "@context/StateProvider";
import { notification } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { TfiHeadphoneAlt } from "react-icons/tfi";

interface BlogsForm {
  name: string;
  phone: string;
  tour: string;
  gmail: String;
  date: string;
}

interface InputFormProps {
  isForm: any;
  setForm: (isForm: any) => void;
  placeholder: string;
  type: string;
  icon: string;
  label: string;
}

export const InputForm = ({
  isForm,
  setForm,
  placeholder,
  type,
  icon,
  label,
}: InputFormProps) => {
  return (
    <div className="bg-white text-black rounded-md shadow-lg">
      <div className="p-2 flex gap-2 items-center">
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

const BookingPage = ({ ConfigData }: { ConfigData: Array<any> }) => {
  const [isForm, setForm] = useState({
    name: "",
    phone: "",

    gmail: "",
    date: "",
  });

  const FieldItems = [
    {
      type: "text",
      label: "name",
      placeholder: "Nhập họ tên của bạn",
      icon: "FaUser",
    },
    {
      type: "text",
      label: "phone",
      placeholder: "Nhập số điện thoại của bạn",
      icon: "FaPhoneSquareAlt",
    },

    {
      type: "text",
      label: "gmail",
      placeholder: "Nhập gmail của bạn",
      icon: "IoMdMail",
    },
    {
      type: "text",
      label: "date",
      placeholder: "Sản phẩm bạn quan tâm",
      icon: "IoMdTime",
    },
  ];
  const ContactData: ContactProps = ConfigData?.find(
    (item) => item.id === "contact"
  );

  const HandleDiscard = () => {
    setForm({
      name: "",
      phone: "",

      gmail: "",
      date: "",
    });
  };

  const HandleSubmit = async () => {
    if (!isForm.name || !isForm.phone) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công",
        description: "Vui lòng nhập tên và số điện thoại",
      });
    } else {
      const dataFields = [
        { title: "Họ Tên:", value: isForm.name },
        { title: "SĐT:", value: isForm.phone },
        { title: "Email:", value: isForm.gmail },
        { title: "Thời gian:", value: isForm.date },
      ];
      let data: any = {};

      dataFields?.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        `https://formsubmit.co/ajax/${ContactData?.Email}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        notification["success"]({
          message: "Thành công !",
          description: `
               Chúng tôi sẽ liên hệ trong thời gian sớm nhất !`,
        });
        HandleDiscard();
      } else {
        notification["error"]({
          message: "Lỗi !",
          description: `
               Lỗi không xác định !`,
        });
      }
    }
  };

  return (
    <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/ASTAIRE-Cam-12-00582_T.jpg?alt=media&token=3c946748-12cb-4b4f-8fdd-acca278510a1)] bg-no-repeat bg-cover bg-center relative">
      <div className="bg-[rgba(0,0,0,0.7)] absolute top-0 w-full h-full"></div>
      <div className="bg-slate-300 absolute bottom-0 w-full h-20"></div>

      <div className="d:w-[1200px] d:mx-auto p:mx-2 p:w-auto py-10 text-white relative z-20">
        <div className="flex flex-col gap-3">
          <h2 className="text-[25px] uppercase">Tư vấn chi tiết nhanh chóng</h2>
          <div className="bg-white h-[2px] w-28"></div>
          <p className="text-[14px]">
            Văn phòng của chúng tôi mở cửa tất cả các ngày trong tuần <br /> và
            nhân viên của chúng tôi sẽ rất vui lòng trả lời kịp thời mọi câu hỏi
            của bạn 24/7 <br /> qua Gọi điện thoại, email, SMS, Zalo, Facebook,
            .
          </p>
        </div>
        <div className="grid p:grid-cols-1 d:grid-cols-3 mt-5 gap-5">
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
                    <Link href={`tel:${ContactData?.Hotline}`}>
                      {ContactData?.Hotline}
                    </Link>{" "}
                    {/* -{" "}
                    <Link href={`tel:${ContactData?.PhoneNumber}`}>
                      {ContactData?.PhoneNumber}
                    </Link>{" "} */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-full w-full ">
            <Image
              src="https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/rem-cua-so-phong-ngu-2.jpg?alt=media&token=0a22bee5-fc5b-4179-ad5c-9337d57ac4ab"
              alt="banner"
              width={1000}
              height={1000}
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;
