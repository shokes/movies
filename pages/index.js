import Image from "next/image";
import { data } from "@/data";
import Tmovies from "@/components/Tmovies";
import TrendingMovies from "@/components/TrendingMovies";
export default function Home() {
  return (
    <section className="text-white">
      <TrendingMovies />
      {/* <Tmovies />  */}
    </section>
  );
}
