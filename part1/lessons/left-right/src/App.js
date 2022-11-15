import { useState } from "react";

const History = (props) => {
  if (props.allClicks.lenght === 0) {
    return <div>the app is used by pressing the butons</div>;
  }
  return <div>button press history: {props.allClicks.join("")}</div>;
};

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>{text}</button>
);

const App = () => {
  const [left, setLeft] = useState(0);
  const [right, setRight] = useState(0);
  const [allClicks, setAllClicks] = useState([]);

  const handleLeftClick = () => {
    setAllClicks(allClicks.concat("L"));
    setLeft(left + 1);
  };

  const handleRightClick = () => {
    setAllClicks(allClicks.concat("R"));
    setRight(right + 1);
  };

  return (
    <div>
      {left}
      <Button handleClick={handleLeftClick} text="left" />
      <Button handleClick={handleRightClick} text="right" />
      {right}
      <p>{allClicks.join(" ")}</p>
      <History allClicks={allClicks} />
    </div>
  );
};

export default App;
