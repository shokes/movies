import React from "react";
import Image from "next/image";
import { BsDot } from "react-icons/bs";
import Svg from "../public/assets/icon-nav-tv-series.svg";
import { useGlobalContext } from "@/context";
import { useParams } from "react-router-dom";

const List = ({ title, category, rating, year, thumbnail }) => {
  const { index } = useParams;
  const { addBookmark, removeBookmark } = useGlobalContext();

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
        <div>
          <button onClick={() => addBookmark(index)}>addBookmark</button>
          <button onClick={() => removeBookmark()}>removeBookmark</button>
        </div>
        <div className="mt-2 text-[13px] font-light flex gap-x-2 opacity-50">
          <p>{year}</p>
          <p className="my-auto">
            <BsDot />
          </p>
          <p className="flex">
            <Image
              src={Svg}
              width={12}
              height={12}
              alt="svg"
              className="mr-[6px] object-contain my-auto"
            />
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

export default List;
