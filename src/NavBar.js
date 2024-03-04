import React, {useState } from 'react'
import { Link } from 'react-router-dom';

function NavBar({counter}) {
  const [products, setProducts] = useState([]);

  const handleCartClick = () => {
    fetch('https://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => {
    
      console.log('Fetched data:', data,products);
      setProducts(data);
  
    })
    .catch(error => {
      // Handle errors
      console.error('Error fetching data:', error);
    });
  }
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/cart" onClick={handleCartClick}>Cart <p>{counter}</p></Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar