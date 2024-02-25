import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  let [counter , setCounter] = useState(0);
  const handleCounter = (counter) => {
    setCounter(counter);
  }
  return (
    <Router>
      <div className="App">
      <NavBar counter={counter} />
        <Routes>
          <Route path="/" element={<Product onAddCart={handleCounter} />} />
          <Route path="/cart" element={<Cart/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
