import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(10)

  const handleChange = () => {
    console.log('cliked the button')
    setValue(0)
  }

  const hello = () => {
    const handler = () => console.log('Hello world')
    return handler
  }

  return (
    <div>
      {value}
      <button onClick={hello()}>button</button>
    </div>
  )
}

export default App;
