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
    <section className="flex justify-between">
      {/* buttons */}
      <div>
        <div>
          <ul>
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

        {/* search form */}
        <form className="flex">
          <p className="my-auto text-white pr-6 text-2xl">
            <BiSearch />
          </p>
          <input
            index="searchInput"
            type="text"
            placeholder="Search for movies or TV series..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className="text-white bg-transparent"
          />
        </form>
        {/* search form end */}

        {/* movie list */}
        <div className="grid grid-cols-4">
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
              if (val.isTrending === true) {
                return <Trending key={index} {...val} />;
              } else {
                return <List key={index} {...val} />;
              }
            })}
        </div>
        {/* movie list end */}
      </div>
    </section>
  );
};

export default Search;
