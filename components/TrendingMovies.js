import React from "react";
import { useGlobalContext } from "@/context";
import { data } from "@/data";
import Image from "next/image";
import Link from "next/link";

const TrendingMovies = () => {
  const { movies, moviesCategory, addBookmark, tempStock } = useGlobalContext();

  const noOfMovies = movies.length;
  const categoryPage = moviesCategory.title;
  let category = [];
  {
    data.map((movie) => {
      category.push(movie.category);
    });
  }

  return (
    <section>
      <div>
        <ul>
          {["all", ...new Set(category)].map((item, index) => {
            return (
              <li
                className="cursor-pointer"
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
      {/* title */}
      <div></div>
      {/* movie list */}
      <div>
        <h3>{categoryPage}</h3>

        <h3>{noOfMovies} available</h3>
        <div className="grid grid-cols-4 gap-x-6 gap-y-14 w-[1078px]">
          {movies.map((data, index) => {
            const url = data?.thumbnail?.regular.large;

            return (
              <article key={index}>
                {/* <h3>{data.category}</h3> */}
                <div>
                  <Image
                    src={`/${url}`}
                    width={280}
                    height={174}
                    alt={data.title}
                    className="w-auto h-auto overflow-hidden rounded-3xl"
                    priority
                  />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrendingMovies;
