import React from "react";
import { useGlobalContext } from "@/context";
import { data } from "@/data";

const Button = () => {
  const { movies, moviesCategory } = useGlobalContext();
  let category = [];

  {
    data.map((movie) => {
      category.push(movie.category);
    });
  }
  return (
    <section>
      <ul>
        {["all", ...new Set(category)].map((item, index) => {
          return (
            <>
              <li
                className="cursor-pointer"
                key={index}
                onClick={() => {
                  moviesCategory(item);
                }}
              >
                {item}
              </li>
            </>
          );
        })}
      </ul>
    </section>
  );
};

export default Button;
