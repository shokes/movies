import React from "react";
import { data } from "@/data";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";

const Tmovies = () => {
  return (
    <div className="wrapper flex overflow-x-auto gap-x-6 max-w-[1207px]">
      {data.map((item, index) => {
        const url = item?.thumbnail?.regular?.large;
        if (item.isTrending === true && item.category === "Movie") {
          return (
            <article key={index} className="">
              <div className="w-[470px] relative">
                <Image
                  src={`/${url}`}
                  width={470}
                  height={230}
                  alt={item.title}
                  className="rounded-2xl w-[470px] h-[230px] overflow-hidden"
                />
                <div className="absolute bottom-6 left-6 text-white">
                  <div className="flex items-center text-[13px] font-light mt-[8px] mb-[5px] opacity-75">
                    <p>{item.year}</p>
                    <BsDot />
                    <p className="pr-[6px] text-lg">
                      <MdLocalMovies />
                    </p>
                    <p>{item.category}</p>
                    <BsDot />
                    <p>{item.rating}</p>
                  </div>
                  <p className="text-[18px] font-medium text-white">
                    {item.title}
                  </p>
                </div>
              </div>
            </article>
          );
        }
        return (
          <article key={index} className="">
            <div className="w-[470px] relative">
              <Image
                src={`/${url}`}
                width={470}
                height={230}
                alt={item.title}
                className="rounded-2xl w-[470px] h-[230px] overflow-hidden"
              />
              <div className="absolute bottom-6 left-6 text-white">
                <div className="flex items-center text-[13px] font-light mt-[8px] mb-[5px] opacity-75">
                  <p>{item.year}</p>
                  <BsDot />
                  <p className="pr-[6px] text-lg">
                    <BiCameraMovie />
                  </p>
                  <p>{item.category}</p>
                  <BsDot />
                  <p>{item.rating}</p>
                </div>
                <p className="text-[18px] font-medium text-white">
                  {item.title}
                </p>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Tmovies;
