import { shoe8 } from "../assets/images";
import { Button } from "../components";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="max-container flex w-full items-center justify-between gap-10 max-lg:flex-col"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super</span>
          <br />
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Discover stylish nike arrivals, quality comfort, and innovation for
          your daily life. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ipsa dolorum eius maxime quos rem officiis!
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nulla maxime laboriosam architecto voluptatibus molestias!
        </p>
        <div className="mt-11">
          <Button label="View Details" />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <img
          src={shoe8}
          alt="shoe8"
          height={522}
          width={570}
          className="object-contain"
        />
      </div>
    </section>
  );
};

export default SuperQuality;
