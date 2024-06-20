import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import { Button } from "../components";

const SpecialOffers = () => {
  return (
    <section
      id="about-us"
      className="max-container justify-wrap flex items-center gap-10 max-xl:flex-col-reverse"
    >
      <div className="flex-1">
        <img
          src={offer}
          alt="Special Offer"
          width={773}
          height={687}
          className="w-full object-contain"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin text-4xl font-bold capitalize lg:max-w-lg">
          <span className="text-coral-red">Special</span> Offer
        </h2>
        <p className="info-text mt-4 lg:max-w-lg">
          Discover stylish nike arrivals, quality comfort, and innovation for
          your daily life. Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Ipsa dolorum eius maxime quos rem officiis!
        </p>
        <p className="info-text mt-6 lg:max-w-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit
          nulla maxime laboriosam architecto voluptatibus molestias! Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Doloribus, dolorem?
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="View Details" iconUrl={arrowRight} />
          <Button
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
