export const SingleOffer = (props) => {
  return (
    <li>
      <span>{props.offer.title}: </span>
      <span>
        <strong>{props.offer.price}&nbsp;PLN</strong>
      </span>
    </li>
  );
};
