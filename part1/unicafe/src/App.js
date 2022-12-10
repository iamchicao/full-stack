import { useState } from "react";

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StaticLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = `${(good / total) * 100} %`;

  return total > 0 ? (
    <>
      <h2>statics</h2>
      <StaticLine text="good" value={good} />
      <StaticLine text="neutral" value={neutral} />
      <StaticLine text="bad" value={bad} />
      <StaticLine text="total" value={total} />
      <StaticLine text="average" value={average} />
      <StaticLine text="positive" value={positive} />
    </>
  ) : (
    <p>No feedback given</p>
  );
};

export const App = () => {
  const [good, setGod] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const increment = (state, setState) => () => setState(state + 1);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={increment(good, setGod)} text="good" />
      <Button onClick={increment(neutral, setNeutral)} text="neutral" />
      <Button onClick={increment(bad, setBad)} text="bad" />
      <Statics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
