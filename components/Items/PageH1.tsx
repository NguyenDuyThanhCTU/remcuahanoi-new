import Image from "next/image";
import React from "react";
const PageH1 = ({ Content }: { Content: String }) => {
  return (
    <div className="bg-[url(https://firebasestorage.googleapis.com/v0/b/cokhiphuongtung-960eb.appspot.com/o/ASTAIRE-Cam-12-00582_T.jpg?alt=media&token=3c946748-12cb-4b4f-8fdd-acca278510a1)] bg-cover bg-center bg-no-repeat object-top">
      <div className="bg-[rgba(0,0,0,0.58)] h-[300px] flex items-center justify-center ">
        <h1 className="text-center text-[30px] uppercase text-white font-bold ">
          {Content}
        </h1>
      </div>
    </div>
  );
};

export default PageH1;
