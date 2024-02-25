import React, { useEffect, useState } from 'react'

function Product({onAddCart}) {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (productId) => {

       setCartItems(prevCartItems => {
        const newCartItems = [...prevCartItems, productId];
        console.log('Item added to cart with id!', productId);
        console.log(newCartItems);
        onAddCart(newCartItems.length);
        return newCartItems;
      });
  };

  const handleRemoveFromCart = (productId) => {
      setCartItems(prevCartItems => {
        const newCartItems = prevCartItems.filter((id) => id !== productId);
        console.log('Item Removed from cart with id!', productId);
        console.log(newCartItems);
        onAddCart(newCartItems.length);
        return newCartItems;
      });
  };

  const isItemInCart = (productId) => {
    return cartItems.includes(productId);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className='container'>
      {products && products.map((data, index) => (
        <div className='item'>
          <div className='image'>
            <img src={data.image} alt='not declare'/>
          </div>
          <div className='product'>
              <h2>Rs {data.price}</h2>
              <h3>{data.title}</h3>
              <button
              className="addToCartBtn"
              onClick={() => handleAddToCart(data.id)}
              id={`add-${data.id}`}
              style={{ display: isItemInCart(data.id) ? 'none' : 'block' }}
            >
              Add to Cart
            </button>
            <button
              className="removeFromCartBtn"
              onClick={() => handleRemoveFromCart(data.id)}
              id={`remove-${data.id}`}
              style={{ display: isItemInCart(data.id) ? 'block' : 'none' }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Product