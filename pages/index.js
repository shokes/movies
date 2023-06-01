import Image from "next/image";
import { data } from "@/data";
import Trending from "@/components/Trending";
import TrendingMovies from "@/components/TrendingMovies";

export default function Home() {
  return (
    <section>
      <h1>greetings</h1>

      {/* <Trending /> */}
      <TrendingMovies />
    </section>
  );
}
