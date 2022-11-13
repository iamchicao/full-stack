const Hello = (props) => {
  return (
    <div>
      <p>{props.name} and my position on div is {props.position}</p>
    </div>
  )
}


const App = () => {
  return (
    <div>
      <h1>Grettings</h1>
      <Hello name="George" position={1} />
      <Hello name="Lucas" position={2} />
      <Hello name="Francisco" position={3} />
    </div>
  );
};

export default App;
