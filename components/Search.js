import React, { useState } from "react";
import { data } from "@/data";
import { useGlobalContext } from "@/context";
import List from "./List";
import Trending from "./Trending";

import { BiSearch } from "react-icons/bi";

const Search = () => {
  const { searchTerm, setSearchTerm, movie_list, moviesCategory } =
    useGlobalContext();
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
        <div className="bg-[#161D2F] h-[960px] mt-8 ml-8 rounded-lg ">
          <ul className="cursor-pointer ">
            {["all", ...new Set(category)].map((item, index) => {
              return (
                <li
                  key={index}
                  onClick={() => {
                    moviesCategory(item);
                    //console.log(item);
                  }}
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
        {/* end of buttons */}

        <div className="mt-[65px]">
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
          <div className="flex flex-wrap gap-x-10">
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
                if (val.isTrending === true && movie_list.length === 29) {
                  return (
                    <>
                      {" "}
                      <div className="">
                        <Trending key={index} {...val} />
                      </div>
                    </>
                  );
                } else {
                  return <List key={index} {...val} />;
                }
              })}
          </div>
          {/* movie list end */}
        </div>
      </div>
    </section>
  );
};

export default Search;
