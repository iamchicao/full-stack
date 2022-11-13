const Hello = () => {
  return (
    <div>
      <p>Hello world</p>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <h1>Grettings</h1>
      <Hello />
      <Hello />
      <Hello />
    </div>
  );
};

export default App;
