import { ActionButton } from "./components/ActionButton";
import { Offers } from "./components/Offers/Offers";
import { UserInfo } from "./components/UserInfo";

const App = () => {
  const user = {
    name: "Adam",
    age: 40,
  };

  const user2 = {};

  const offers = [
    { title: "offer 1", price: 200 },
    { title: "offer 2", price: 250 },
    { title: "offer 3", price: 100 },
  ];

  const showAlert = () => {
    alert("clicked");
  };

  return (
    <div id="app">
      <h1>test</h1>
      <UserInfo user={user} />
      <UserInfo user={user2} />
      <Offers offers={offers} />
      <ActionButton onActionButtonClick={showAlert} label={"click me!"} />
    </div>
  );
};

export default App;
