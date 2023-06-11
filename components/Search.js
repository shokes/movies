import React, { useState } from "react";
import { data } from "@/data";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
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
    </>
  );
};

export default Search;
