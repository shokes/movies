import React from "react";
import { data } from "@/data";
import Photo from "../small.jpg";
import Image from "next/image";
const Trending = () => {
  return (
    <section>
      <Image src={Photo} width={500} height={500} />
    </section>
  );
};

export default Trending;
