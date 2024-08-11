import { SingleOffer } from "./SingleOffer";

export const Offers = (props) => {
  return (
    <section>
      <h3>Offers:</h3>
      <ul>
        {props.offers.map((currentOffer) => (
          <SingleOffer offer={currentOffer} key={currentOffer.title} />
        ))}
      </ul>
    </section>
  );
};

/*

  const offers = [
    { title: "offer 1", price: 200 },
    { title: "offer 2", price: 250 },
    { title: "offer 3", price: 100 },
  ];

    <li>offer 1: 200 PLN</li>

  */
