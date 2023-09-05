import React, { useState } from "react";
import { data } from "@/data";
import { useGlobalContext } from "@/context";
import List from "./List";
import Trending from "./Trending";
import Movie from "./Movie";
import NavHome from "../public/assets/icon-nav-home.svg";
import User from "../public/assets/image-avatar.png";
import Image from "next/image";
import HomeButton from "../public/assets/logo.svg";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  const {
    searchTerm,
    setSearchTerm,
    movie_list,
    moviesCategory,
    activeFilter,
  } = useGlobalContext();
  let category = [];

  {
    data.map((button) => {
      category.push(button.category);
    });
  }

  return (
    <section className="">
      {/* buttons */}
      <div className="flex gap-x-9">
        <div className="bg-[#161D2F] h-[960px] w-[96px] mt-8 ml-8 rounded-lg">
          <ul className="mt-[35.4px] mb-[75px] flex justify-center">
            <Image src={HomeButton} width={32} height={25.6} alt="homebutton" />
          </ul>
          <ul className="cursor-pointer h-[150px] flex flex-col justify-between text-center">
            {["all", ...new Set(category)].map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    moviesCategory(item);
                    //console.log(item);
                  }}
                  className={`text-sm capitalize opacity-25 ease-in-out duration-300  ${
                    activeFilter === item ? "text-sm opacity-100" : "null"
                  }`}
                >
                  {item}
                </li>
              );
            })}
          </ul>
          <ul className="mt-[552px] flex justify-center">
            <Image src={User} width={40} height={40} alt="user" />
          </ul>
        </div>
        {/* end of buttons */}

        <div className="mt-[65px] w-[2510px]">
          {/* search form */}
          <form className="flex mb-[35px]">
            <p className="my-auto text-white pr-6 text-2xl">
              <BiSearch />
            </p>
            <input
              index="searchInput"
              type="text"
              placeholder="Search for movies or TV series"
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
              className="text-white bg-transparent w-[400px] focus:outline-none"
            />
          </form>
          {/* search form end */}
          {/* movie list */}

          <div className=" ">
            <h3 className="text-[32px] font-light text-white mb-8">
              Recommmended for you
            </h3>
            <div className="flex flex-wrap gap-x-10 gap-y-8">
              {movie_list
                .filter((val) => {
                  if (searchTerm === "") {
                    return val;
                  } else if (
                    val.title.toLowerCase().includes(searchTerm.toLowerCase())
                  ) {
                    return val;
                  }
                })

                .map((val, index) => {
                  // if (val.isTrending === true && movie_list.length === 29) {
                  //   return <Trending key={index} {...val} className="" />;
                  // }
                  if (val.category === "Movie") {
                    return <Movie key={index} {...val} />;
                  } else {
                    return <List key={index} {...val} />;
                  }
                })}
            </div>
          </div>
          {/* movie list end */}
        </div>
      </div>
    </section>
  );
};

export default Search;
