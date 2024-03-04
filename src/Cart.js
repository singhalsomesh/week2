import React, { useEffect, useState } from 'react'

function Cart({counter}) {
   
  const [ids, setIds] = useState(counter);
  const [dataList, setDataList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const fetchDataPromises = ids.map(async (id) => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          if (!response.ok) {
            throw new Error(`Failed to fetch data for ID ${id}`);
          }
          return response.json();
        });

        const fetchedDataList = await Promise.all(fetchDataPromises);
        setDataList(fetchedDataList);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [ids]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;


  return (
    <div className='container'>
      {dataList && dataList.map((data, index) => (
        <div className='item'>
          <div className='image'>
            <img src={data.image} alt='not declare'/>
          </div>
          <div className='product'>
              <h2>Rs {data.price}</h2>
              <h3>{data.title}</h3>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Cart