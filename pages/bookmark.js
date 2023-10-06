import React from "react";
//import { Link } from "react-router-dom";
import { useGlobalContext } from "@/context";

const Bookmark = () => {
  const { bookmark } = useGlobalContext();

  if (bookmark.length < 1) {
    return <p className="text-white">nothing to show</p>;
  }
  return (
    <section className="text-white">
      <div>
        {bookmark.map((item) => {
          const { title, index } = item;
          return (
            <article key={index}>
              <p>{title}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Bookmark;
