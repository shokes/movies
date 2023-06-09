import Image from "next/image";
import { data } from "@/data";
import Trending from "@/components/Trending";
import TrendingMovies from "@/components/TrendingMovies";
import SearchForm from "@/components/SearchForm";
export default function Home() {
  return (
    <section className="text-white">
      {/* <Trending /> */}
      <TrendingMovies />
      {/* <SearchForm /> */}
    </section>
  );
}
