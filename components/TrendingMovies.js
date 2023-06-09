import React from "react";
import { useGlobalContext } from "@/context";
import { data } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
//import Trending from "./Trending";

const TrendingMovies = () => {
  const { movies, moviesCategory, addBookmark, tempStock, activeFilter } =
    useGlobalContext();
  const noOfMovies = movies.length;

  let category = [];
  {
    data.map((movie) => {
      category.push(movie.category);
    });
  }

  return (
    <section>
      <div className="flex justify-between">
        <div className="bg-[#161D2F] h-[960px] w-[96px] text-center">
          <ul>
            {["all", ...new Set(category)].map((item, index) => {
              if (item === "Movie") {
                return (
                  <li
                    className={`text-4xl ease-in duration-300 flex justify-center ${
                      activeFilter === item
                        ? "text-white cursor-pointer"
                        : "text-[#5A698F] cursor-pointer"
                    }`}
                    key={index}
                    onClick={() => {
                      moviesCategory(item);
                    }}
                  >
                    <MdLocalMovies />
                  </li>
                );
              }
              if (item === "TV Series") {
                return (
                  <li
                    className={`text-4xl ease-in duration-300 flex justify-center ${
                      activeFilter === item
                        ? "text-white cursor-pointer"
                        : "text-[#5A698F] cursor-pointer"
                    }`}
                    key={index}
                    onClick={() => {
                      moviesCategory(item);
                    }}
                  >
                    <BiCameraMovie />
                  </li>
                );
              }
              return (
                <li
                  className={`text-4xl ${
                    activeFilter === item
                      ? "text-white cursor-pointer"
                      : "text-[#5A698F] cursor-pointer"
                  }`}
                  key={index}
                  onClick={() => {
                    moviesCategory(item);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        {/* trending */}
        {/* <div>
          {data.map((item, index) => {
            const url = item?.thumbnail?.regular?.large;
            if (item.isTrending === true) {
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
                    <div className="absolute top-0 text-white">
                      <p>{item.year}</p>
                      <p>{item.category}</p>
                      <p>{item.rating}</p>
                      <p>{item.title}</p>
                    </div>
                  </div>
                </article>
              );
            }
            return null;
          })}
        </div> */}
        {/* end of trending */}
        <div>
          <div>
            <h3>{noOfMovies} available</h3>
            <div className="grid grid-cols-4 gap-x-7 gap-y-14 ga4 w-[1078px]">
              {movies.map((data, index) => {
                const url = data?.thumbnail?.regular.large;
                if (data.category === "Movie") {
                  return (
                    <article key={index}>
                      <Image
                        priority
                        src={`/${url}`}
                        width={280}
                        height={174}
                        alt={data.title}
                        className="w-auto h-auto overflow-hidden rounded-3xl"
                      />
                      <div className="flex items-center text-[13px] font-light mt-[8px] mb-[5px] opacity-75">
                        <p>{data.year}</p>
                        <BsDot />
                        <p className="pr-[6px] text-lg">
                          <MdLocalMovies />
                        </p>
                        <p>{data.category}</p>
                        <BsDot />
                        <p>{data.rating}</p>
                      </div>
                      <p className="text-[18px] font-medium text-white">
                        {data.title}
                      </p>
                    </article>
                  );
                } else null;
                return (
                  <article key={index}>
                    <Image
                      priority
                      src={`/${url}`}
                      width={280}
                      height={174}
                      alt={data.title}
                      className="w-auto h-auto overflow-hidden rounded-3xl"
                    />
                    <div className="flex items-center text-[13px] font-light mt-[8px] mb-[5px] opacity-75">
                      <p>{data.year}</p>
                      <BsDot />
                      <p className="pr-[6px] text-lg">
                        <BiCameraMovie />
                      </p>
                      <p>{data.category}</p>
                      <BsDot />
                      <p>{data.rating}</p>
                    </div>
                    <p className="text-[18px] font-medium text-white">
                      {data.title}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
