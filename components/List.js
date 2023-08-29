import React from "react";
import Image from "next/image";

const List = ({ title, category, rating, year, thumbnail }) => {
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
          <p>{year}</p>
          <p>{category}</p>
          <p>{rating}</p>
        </div>
      </div>
    </section>
  );
};

export default List;
