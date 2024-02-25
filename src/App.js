import { useState } from "react";
import NavBar from "./NavBar";
import Product from "./Product";

function App() {
  let [counter , setCounter] = useState(0);
  const handleCounter = (counter) => {
    setCounter(counter);
  }
  return (
    <div className="App">
      <NavBar counter={counter}/>
      <Product onAddCart = {handleCounter}/>
    </div>
  );
}

export default App;
