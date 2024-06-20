import { useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import Button from "../components/Button";
import ShoeCard from "../components/ShoeCard";
import { shoes, statistics } from "../constants";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(bigShoe1);

  return (
    <section
      id="home"
      className="max-container flex min-h-screen w-full flex-col justify-center gap-10 xl:flex-row"
    >
      <div className="max-xl:padding-x relative flex w-full flex-col items-start justify-center pt-28 xl:w-2/5">
        <p className="font-montserrat text-xl text-coral-red">
          Our Summer Collection
        </p>
        <h1 className="mt-10 font-palanquin text-8xl font-bold max-sm:text-4xl">
          <span className="relative z-10 pr-10 xl:whitespace-nowrap xl:bg-white">
            The New Arrivals
          </span>
          <br />
          <span className="relative z-20 inline-block text-coral-red">
            Nike
          </span>{" "}
          <span className="relative z-20">Shoes</span>
        </h1>
        <p className="mb-14 mt-6 font-montserrat text-lg leading-8 text-slate-gray sm:max-w-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
          aliquam maiores praesentium dignissimos, quos voluptate!
        </p>
        <Button label="Shop Now" iconUrl={arrowRight}></Button>
        <div className="item-start mt-20 flex w-full flex-wrap justify-start gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-palanquin text-4xl font-bold">{stat.value}</p>
              <p className="font-montserrat leading-7 text-slate-gray">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="relative flex flex-1 items-center justify-center bg-primary bg-hero bg-cover bg-center max-xl:py-40 xl:min-h-screen">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          width={610}
          height={500}
          className="relative z-10 object-contain"
        />
        <div className="absolute -bottom-[5%] flex gap-4 max-sm:p-6 sm:left-[10%] sm:gap-6">
          {shoes.map((shoe) => (
            <div className="" key={shoe.thumbnail}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImg={(shoe) => {
                  setBigShoeImg(shoe);
                }}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
