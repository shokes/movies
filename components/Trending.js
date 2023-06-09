import React from "react";
import { data } from "@/data";
import Image from "next/image";
import { useGlobalContext } from "@/context";

const Trending = () => {
  const { movies, moviesTrending } = useGlobalContext();
  let trending = [];

  {
    trending.map((movie) => {
      movie.isTrending === true;
    });
  }

  return (
    <section>
      <h3>Trending</h3>
      <div className="flex flex-nowrap overflow-x-scroll gap-x-6">
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
      </div>
    </section>
  );
};

export default Trending;
