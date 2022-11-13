const App = () => {
  const now = new Date()
  const number1 = 10;
  const number2 = 20;

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {number1} plus {number2} is {number1 + number2}
      </p>
    </div>
  );
};

export default App;
