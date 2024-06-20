import { reviews } from "../constants";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3 className="text-center font-palanquin text-4xl font-bold">
        What Our <span className="text-coral-red">Customers</span> Says?
      </h3>
      <p className="info-text m-auto mt-6 max-w-lg text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        error? Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Excepturi, commodi?
      </p>

      <div className="mt-24 flex flex-1 items-center justify-evenly gap-14 max-lg:flex-col">
        {reviews.map((review) => (
          <ReviewCard key={review.customerName} {...review} />
        ))}
      </div>
    </section>
  );
};

export default CustomerReviews;
