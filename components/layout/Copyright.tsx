"use client";
import { RevalidateTags } from "@app/action";
import { useStateProvider } from "@context/StateProvider";
import { useEffect } from "react";

interface CopyrightProps {
  Config: Array<any>;
}

const Copyright = ({ Config }: CopyrightProps) => {
  const { setConfig } = useStateProvider();

  useEffect(() => {
    setConfig(Config);
  }, []);
  return (
    <>
      <div
        className="flex justify-center text-center px-2 text-[14px] font-Montserrat font-normal py-5 bg-black text-white cursor-pointer"
        onClick={() => RevalidateTags()}
      >
        <p className="pr-2">©2025 All Rights reserved</p>
        <p className="pl-2 border-l-[1px] border-gray-400">
          Designed by ADS Company
        </p>
      </div>
    </>
  );
};

export default Copyright;
