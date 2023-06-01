import Image from "next/image";
import { data } from "@/data";
import Trending from "@/components/Trending";

export default function Home() {
  return (
    <section>
      <h1>greetings</h1>
      {/* <div>
        {data.map((item, index) => {
          const url = item?.thumbnail?.regular?.small;
          return (
            <article key={index}>
              <h2>{item.title}</h2>
              <h3>{item.thumbnail.regular.small}</h3>
              <Image
                src={`/${url}`}
                alt={item.title}
                width={500}
                height={500}
                priority
              />
            </article>
          );
        })}
      </div> */}
      <Trending />
    </section>
  );
}
