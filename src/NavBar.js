import React from 'react'
import { Link } from 'react-router-dom';

function NavBar({counter}) {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to="/">Product</Link></li>
                <li><Link to="/cart">Cart <p>{counter}</p></Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar