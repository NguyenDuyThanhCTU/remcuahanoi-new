import React from "react";
import { NewCard } from "./HomeNew";
import HomeTitle from "./HomeTitle";
import { PostProps } from "@assets/props";

const HomePolicy = ({ Data }: { Data: PostProps[] }) => {
  return (
    <div>
      <HomeTitle Title="Chính sách" />
      <div className=" d:flex-row p:flex-col col-span-4 p:relative d: gap-5 mt-5 grid d:grid-cols-4 p:grid-cols-1">
        {Data?.map((item, idx) => (
          <div key={idx}>
            <NewCard Data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePolicy;
