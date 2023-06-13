import React, { useState } from "react";
import { data } from "@/data";
import { useGlobalContext } from "@/context";

const Search = () => {
  const { searchTerm, setSearchTerm } = useGlobalContext();
  return (
    <section>
      <div>
        <div>
          <input
            index="searchInput"
            type="text"
            placeholder="search here..."
            onChange={(event) => {
              setSearchTerm(event.target.value);
            }}
            className="text-black"
          />
        </div>
        <div>
          {data
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
              return (
                <article key={index}>
                  <p>{val.title}</p>
                </article>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default Search;
