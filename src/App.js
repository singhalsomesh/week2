import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from "./NavBar";
import Product from "./Product";
import Cart from "./Cart";

function App() {
  let [counter , setCounter] = useState(0);
  let [cart , setCart] = useState([]);

  const handleCounter = (counter) => {
    setCounter(counter);
  }

  const handleSetCart = (id) => {
    setCart([...cart,id]);
  }

  return (
    <Router>
      <div className="App">
      <NavBar counter={counter}/>
        <Routes>
          <Route path="/" element={<Product onAddCart={handleCounter} onSetCart={handleSetCart}/>} />
          <Route path="/cart" element={<Cart counter={cart}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
