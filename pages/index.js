import Image from "next/image";
import { data } from "@/data";
import Tmovies from "@/components/Tmovies";
import TrendingMovies from "@/components/TrendingMovies";
import SearchForm from "@/components/SearchForm";
import Search from "@/components/Search";
export default function Home() {
  return (
    <section className="text-white">
      <TrendingMovies />
      {/* <SearchForm /> */}
      {/* <Tmovies />  */}
      {/* <Search /> */}
    </section>
  );
}
