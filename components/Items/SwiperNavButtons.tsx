import React from "react";
import { BiChevronLeftCircle } from "react-icons/bi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import { useSwiper } from "swiper/react";

export const SwiperNavButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="flex items-center gap-2 absolute -top-10 z-40 left-36">
      <div
        className="text-[25px] text-white bg-blue-800 hover:bg-blue-950 py-3 px-6 rounded-sm"
        onClick={() => swiper?.slidePrev()}
      >
        <FaChevronLeft />
      </div>

      <div
        className="text-[25px] text-white bg-blue-800 hover:bg-blue-950 py-3 px-6 rounded-sm"
        onClick={() => swiper?.slideNext()}
      >
        <FaChevronRight />
      </div>
    </div>
  );
};
