import { useGlobalContext } from "@/context";
import React from "react";
import { data } from "@/data";

const List = ({ title, year }) => {
  const { searchTerm } = useGlobalContext();

  return (
    <section>
      <p>
        {title}
        {year}
      </p>
    </section>
  );
};

export default List;
