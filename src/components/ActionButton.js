export const ActionButton = (props) => {
  const handleClick = () => {
    console.log("clicked");
    props.onActionButtonClick();
  };

  return <button onClick={handleClick}>{props.label}</button>;
};
