import React from "react";

const HomeTitle = ({ Title }: { Title: string }) => {
  return (
    <div className="flex items-center py-5">
      <div className="w-full h-[2px] bg-slate-200"></div>
      <div className="uppercase border-2 font-bold text-red-500 px-6 py-2">
        <p className="w-max d:text-[18px] p:text-[15px]">{Title}</p>
      </div>
      <div className="w-full h-[2px] bg-slate-200"></div>
    </div>
  );
};

export default HomeTitle;
