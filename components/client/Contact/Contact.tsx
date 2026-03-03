"use client";
import React, { useState } from "react";
import { notification } from "antd";
import { useStateProvider } from "@context/StateProvider";
import { AiOutlineClockCircle } from "react-icons/ai";
import { BsPhone } from "react-icons/bs";
import { SiGmail, SiZalo } from "react-icons/si";

import { CiLocationOn } from "react-icons/ci";
import Input from "./Input";
import { ContactProps, SocialMediaProps } from "@assets/props";
import Link from "next/link";
import { FaFacebook, FaTiktok, FaYoutube } from "react-icons/fa";

const Contact = ({
  ContactData,
  SocialData,
}: {
  ContactData: ContactProps;
  SocialData: SocialMediaProps;
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [cities, setCities] = useState<any>("");
  const [districts, setDistricts] = useState("");
  const [wards, setWards] = useState("");
  const [content, setContent] = useState("");
  const { setIsLoading } = useStateProvider();

  const HandleDiscard = () => {
    setName("");
    setPhone("");
    setEmail("");
    setCities("");
    setDistricts("");
    setWards("");
    setContent("");
  };

  const HandleSubmit = async (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    if (!name || !phone) {
      notification["warning"]({
        message: "Thao tác KHÔNG thành công !",
        description: `
           Vui lòng nhập đầy đủ THÔNG TIN !`,
      });
      setIsLoading(false);
    } else {
      const dataFields = [
        { title: "Họ Tên:", value: name },
        { title: "SĐT:", value: phone },
        { title: "Email:", value: email },
        { title: "Khu vực:", value: `${cities} - ${districts} - ${wards}` },
        { title: "Nội dung lời nhắn:", value: content },
      ];
      let data: any = {};

      dataFields?.forEach((field) => {
        data[field.title] = field.value;
      });

      const response = await fetch(
        `https://formsubmit.co/ajax/${
          ContactData?.Email
            ? ContactData?.Email
            : "tmdvthienhuongfashion@gmail.com"
        }`,
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
        setIsLoading(false);
        HandleDiscard();
      } else {
        setIsLoading(false);
        notification["error"]({
          message: "Lỗi !",
          description: `
             Lỗi không xác định !`,
        });
      }
    }
  };
  return (
    <div className="font-LexendDeca">
      <div className="  ">
        <div className="py-4">
          <h2 className=" text-[20px]  font-semibold">
            Chúng tôi luôn lắng nghe bạn!
          </h2>
          <p className="font-[18px]  ">
            Hãy để lại thông tin đầy đủ theo mẫu phía dưới, Chúng sẽ liên hệ hỗ
            trợ bạn trong thời gian sớm nhất.
          </p>
          <p className="text-redPrimmary ">* là các thông tin bắt buộc</p>
        </div>
        <div className="flex flex-col gap-2">
          <Input text="Họ tên*" Value={name} setValue={setName} Input={true} />
          <Input
            text="Số điện thoại*"
            Value={phone}
            setValue={setPhone}
            Input={true}
          />
          <Input text="Email" Value={email} setValue={setEmail} Input={true} />

          <div className="flex flex-col gap-2">
            <label className="font-semibold ">Nội dung lời nhắn</label>
            <textarea
              className="p-2 border border-mainorange outline-none"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />
          </div>
          <div className="flex justify-center my-3">
            <div
              className="bg-mainOrange hover:bg-orange-600 duration-300 cursor-pointer uppercase px-14 text-white rounded-full py-2"
              onClick={(e) => HandleSubmit(e)}
            >
              Gửi yêu cầu{" "}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="d:w-[1600px] p:w-auto mx-auto grid p:grid-cols-1 d:grid-cols-2 gap-5 font-LexendDeca font-extralight">
          <div className="p:h-auto d:h-screen w-full border-r">
            <iframe src={ContactData?.GoogleMap} className="h-full w-[80%]">
              {" "}
            </iframe>
          </div>
          <div className="">
            <div className="flex flex-col gap-5">
              <h1 className="text-[26px] font-bold uppercase">
                Rèm Cửa Hà Nội
              </h1>
              <div className="w-10 h-1 bg-black"></div>
            </div>

            <div className="mt-5 flex flex-col gap-5">
              <div>
                <div className="flex items-center gap-2">
                  <CiLocationOn className="" />

                  <h2>Địa chỉ chúng tôi:</h2>
                </div>
                <p className="font-semibold">{ContactData?.CompanyAddress}</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <SiGmail className="" />

                  <h2>Email chúng tôi:</h2>
                </div>

                <p className="font-semibold">{ContactData?.Email}</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <BsPhone className="" />

                  <h2>Điện thoại:</h2>
                </div>
                <p className="font-semibold">{ContactData?.Hotline}</p> -{" "}
                <p className="font-semibold">{ContactData?.PhoneNumber}</p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <AiOutlineClockCircle className="" />

                  <h2>Thời gian làm việc:</h2>
                </div>
                <p className="font-semibold">{ContactData?.CompanyTime}</p>
              </div>
              <div className="w-full items-center">
                <h2 className=" font-normal text-[18px] ">
                  Chúng tôi trên Social Networks
                </h2>
                <div className=" flex  gap-2 text-black text-[14px] flex-wrap mt-2">
                  <Link
                    href={`${SocialData?.facebook}`}
                    target="_blank"
                    className="bg-white rounded-lg cursor-pointer group"
                  >
                    <div className="p-2 flex gap-1 items-center bg-gray-200 rounded-xl">
                      <div className="rounded-full text-[20px] p-1 bg-white text-blue-500 ">
                        <FaFacebook />
                      </div>
                      <p className="group-hover:text-lime-400 duration-300">
                        Facebook
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={`${SocialData?.youtube}`}
                    target="_blank"
                    className="bg-white rounded-lg cursor-pointer group"
                  >
                    <div className="p-2 flex gap-1 items-center bg-gray-200 rounded-xl">
                      <div className="rounded-full text-[20px] p-1 bg-white text-red-500">
                        <FaYoutube />
                      </div>
                      <p className="group-hover:text-lime-400 duration-300">
                        Youtube
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={`${SocialData?.tiktok}`}
                    target="_blank"
                    className="bg-white rounded-lg cursor-pointer group"
                  >
                    <div className="p-2 flex gap-1 items-center bg-gray-200 rounded-xl">
                      <div className="rounded-full text-[20px] p-1 bg-white ">
                        <FaTiktok />
                      </div>
                      <p className="group-hover:text-lime-400 duration-300">
                        Tiktok
                      </p>
                    </div>
                  </Link>
                  <Link
                    href={`${SocialData?.zalo}`}
                    target="_blank"
                    className="bg-white rounded-lg cursor-pointer group"
                  >
                    <div className="p-2 flex gap-1 items-center bg-gray-200 rounded-xl">
                      <div className="rounded-full text-[20px] p-1 bg-white text-blue-500">
                        <SiZalo />
                      </div>
                      <p className="group-hover:text-lime-400 duration-300">
                        Zalo
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
