import { PostProps } from "@assets/props";
import Link from "next/link";
import { FaAngleDown } from "react-icons/fa";

import slugify from "slugify";

export const Dropdown3LV = ({ ServiceItem }: { ServiceItem: any }) => {
  return (
    <div className="flex flex-col top-5 absolute  left-0   ">
      <div className="bg-none w-full h-3 "></div>
      <div className="group-hover:opacity-100 group-hover:visible group-hover:transform-none  dropdown border border-black  border-t   relative bg-white min-w-[200px] h-0">
        <div className="absolute w-2 h-2 bg-mainOrange rotate-45  -top-2 left-[20%] -z-10"></div>

        <div className="bg-white z-10 relative">
          <div className=" flex flex-col w-full bg-white shadow-md shadow-slate-500 ">
            {ServiceItem?.level1?.map((LV1Item: any, LV1idx: any) => {
              const LV1Slug = slugify(LV1Item, {
                locale: "vi",
                lower: true,
              });
              return (
                <div
                  className=" w-full group/submenu relative text-black "
                  key={LV1idx}
                >
                  <Link
                    href={`/san-pham/${LV1Slug}`}
                    className="duration-300 text-[14px]   hover:bg-main  flex items-center justify-between hover:text-white p-2 "
                  >
                    <span> {LV1Item}</span>
                    {ServiceItem[LV1Slug]?.length > 0 && (
                      <FaAngleDown className="group-hover:-rotate-90" />
                    )}
                  </Link>
                  {ServiceItem[LV1Slug]?.length > 0 && (
                    <div className="group-hover/submenu:opacity-100 group-hover/submenu:visible group-hover/submenu:transform-none dropdown absolute left-[101%] -top-1 min-w-52  border-t border-t-mainOrange shadow-md shadow-slate-500  bg-white text-[14px] border-black">
                      <div className="flex flex-col ">
                        {ServiceItem[LV1Slug]?.map(
                          (LV2item: string, LV2idx: number) => {
                            const LV2Slug = slugify(LV2item, {
                              locale: "vi",
                              lower: true,
                            });

                            return (
                              <Link
                                href={` /san-pham/${LV2Slug}`}
                                key={LV2idx}
                                className=" p-2 w-full hover:bg-main hover:text-white duration-300"
                              >
                                {LV2item}
                              </Link>
                            );
                          }
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

// export const PostDropdown = ({ ServiceItem }: { ServiceItem: any }) => {
//   return (
//     <div className="flex flex-col top-10 absolute  left-0   ">
//       <div className="bg-none w-full h-3 "></div>
//       <div className="group-hover:opacity-100 group-hover:visible group-hover:transform-none  dropdown border border-black  border-t   relative bg-white min-w-[200px] h-0">
//         <div className="absolute w-2 h-2 bg-mainOrange rotate-45  -top-2 left-[20%] -z-10"></div>
//         <div>
//           <div className=" flex flex-col w-full bg-white shadow-md shadow-slate-500 ">
//             {ServiceItem?.map((Posts: PostProps, idx: any) => {
//               return (
//                 <div
//                   className=" w-full group/submenu relative text-black "
//                   key={idx}
//                 >
//                   <Link
//                     href={`/${Posts?.url}`}
//                     className="duration-300 text-[14px]   hover:bg-main  flex items-center justify-between hover:text-white p-2 "
//                   >
//                     <span> {Posts.title}</span>
//                   </Link>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
