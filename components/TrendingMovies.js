import React from "react";
import { useGlobalContext } from "@/context";
import { data } from "@/data";
import Image from "next/image";
import Link from "next/link";
import Bookmark from "@/pages/Bookmark";

const TrendingMovies = () => {
  const { movies, activeFilter, moviesCategory } = useGlobalContext();

  const noOfMovies = movies.length;
  let category = [];
  {
    data.map((movie) => {
      category.push(movie.category);
    });
  }

  return (
    <section>
      <Link href="/Bookmark">bookmark</Link>
      <div>
        <ul>
          {["all", ...new Set(category)].map((item, index) => {
            return (
              <li
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
      TrendingMovieshhblibiewf
      <p>{noOfMovies} are available</p>
      {movies.map((data, index) => {
        const url = data?.thumbnail?.regular.large;

        return (
          <article key={index}>
            <div>
              <Image
                src={`/${url}`}
                width={500}
                height={500}
                alt={movies.title}
                className="w-[500px] h-[500px]"
                priority
              />
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default TrendingMovies;
