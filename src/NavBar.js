import React from 'react'

function NavBar({counter}) {
  return (
    <div>
        <nav>
            <ul>
                <li>Product</li>
                <li>Card <p>{counter}</p></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar