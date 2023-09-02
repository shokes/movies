import React from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import { TbMovie } from "react-icons/tb";

const Movie = ({ title, category, rating, year, thumbnail }) => {
  return (
    <section className="">
      <div>
        <Image
          src={`/${thumbnail.regular.large}`}
          width={280}
          height={174}
          priority
          className="w-[280px] h-[174px] rounded-md"
          alt={title}
        />
        <div className="mt-2 text-[13px] font-light flex gap-x-2 opacity-50">
          <p>{year}</p>
          <p className="my-auto">
            <BsDot />
          </p>
          <p className="flex">
            <span className="my-auto mr-[6px]">
              <TbMovie />
            </span>
            {category}
          </p>
          <p className="my-auto">
            <BsDot />
          </p>
          <p>{rating}</p>
        </div>
        <div className="mt-[5px]">
          <p className="text-[18px] font-medium">{title}</p>
        </div>
      </div>
    </section>
  );
};

export default Movie;
