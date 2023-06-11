import React from "react";
import { useGlobalContext } from "@/context";
import { data } from "@/data";
import Image from "next/image";
import Link from "next/link";
import { BsDot } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { BiCameraMovie } from "react-icons/bi";
import Logo from "../public/assets/logo.svg";
import Avatar from "../public/assets/image-avatar.png";
import { CgMenuBoxed } from "react-icons/cg";
import Tmovies from "./Tmovies";
import SearchForm from "./SearchForm";
import { useParams } from "react-router-dom";

const TrendingMovies = () => {
  const { index } = useParams();
  const {
    allMovies,
    movies,
    moviesCategory,
    addBookmark,
    tempStock,
    activeFilter,
  } = useGlobalContext();

  //const single = allMovies.find((item) => item.index === index);
  const noOfMovies = movies.length;

  let category = [];
  {
    data.map((movie) => {
      category.push(movie.category);
    });
  }

  return (
    <section className="mx-9">
      <div className="flex gap-x-9">
        <div className="bg-[#161D2F] h-[960px] w-[96px] text-center my-8 rounded-2xl flex flex-col justify-between py-8">
          <ul className="">
            <Image
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="mx-auto mb-[75px]"
            />
            {["all", ...new Set(category)].map((item, index) => {
              if (item === "Movie") {
                return (
                  <li
                    className={`text-4xl ease-in duration-300 flex justify-center my-10 ${
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
                    className={`text-4xl ease-in duration-300 flex justify-center  ${
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
                  <CgMenuBoxed />
                </li>
              );
            })}
          </ul>
          <div className="flex justify-center">
            <Image
              src={Avatar}
              alt="avatar"
              width={40}
              height={40}
              className="cursor-pointer"
            />
          </div>
        </div>
        {/* trending */}
        {/* end of trending */}
        <div>
          {/* <div className="mt-[64px] mb-[34px]">
            <SearchForm />
          </div> */}
          <div>
            {/* trending */}
            <Tmovies />
            {/* end of trending */}
            <h3 className="text-[32px] font-light pb-[38px]">
              {noOfMovies} Available
            </h3>
            <div className="grid grid-cols-4 gap-x-7 gap-y-14 w-[1078px]">
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
                    <Link
                      href="/bookmark"
                      onClick={() => addBookmark(tempStock)}
                    >
                      add to bookmark
                    </Link>
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
