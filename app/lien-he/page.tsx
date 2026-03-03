import Contact from "@components/client/Contact/Contact";
import { find } from "@config/lib/api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Liên Hệ - Rèm Cửa Hà Nội",
};

const ContactPage = async () => {
  const Config = await find("Config");
  const ContactData = Config?.find((item: any) => item.id === "contact");
  const SocialData = Config?.find((items: any) => items.id === "SocialMedia");
  return (
    <>
      <div className="bg-white  py-10">
        <div className="d:w-[1200px] d:mx-auto p:w-auto p:mx-2">
          <Contact ContactData={ContactData} SocialData={SocialData} />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
