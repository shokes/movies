import React from "react";
import { useGlobalContext } from "@/context";
import { data } from "@/data";
import Image from "next/image";

const TrendingMovies = () => {
  const { movies, activeFilter } = useGlobalContext();

  const noOfMovies = movies.length;
  let collection = [];
  {
    data.map((movie) => {
      collection.push(movie.collection);
    });
  }

  return (
    <section>
      TrendingMovies
      <p>{noOfMovies} are available</p>
      {data.map((movies, index) => {
        const url = movies?.thumbnail?.regular.large;

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
