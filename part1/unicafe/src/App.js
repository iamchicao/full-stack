import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

export const App = () => {
  const [good, setGod] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = (state, setState) => () => setState(state + 1);
  const total = good + neutral + bad;
  const average = ((good - bad) / total);
  const positive = (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increment(good, setGod)} text="good" />
      <Button onClick={increment(neutral, setNeutral)} text="neutral" />
      <Button onClick={increment(bad, setBad)} text="bad" />
      <h2>statics</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {average}</p>
      <p>positive {positive} %</p>
    </div>
  );
};

export default App;
