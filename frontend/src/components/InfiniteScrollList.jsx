import React, { useEffect, useRef, useState } from 'react'
import { fetchProducts } from '../api/ProductApi';

const InfiniteScrollList = () => {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const loaderRef = useRef(null);

  useEffect(()=>{
    const loadMore = async()=>{
    const data = await fetchProducts(page);
    
    setItems((prev)=>[...prev,...data.products])

        if (page >= data.totalPages) {
        setHasMore(false);
        }
    };
    loadMore();
  }
  ,[page]);

   // Intersection Observer for Infinite Scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1 }
    );

    if (loaderRef.current) observer.observe(loaderRef.current);
  }, [hasMore]);
  

  return (
    <div>
        <div className='products-container' style={{ width: "400px", margin: "auto" }}> 
            <h2>Infinite Scroll Products</h2>

            {items.map((item, index) => (
            <div className='product-card'
                key={index}
                style={{
                    padding: "12px",
                    margin: "6px 0",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                }}
                >
                <div>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span>Price : {item.price}</span>
                </div>
            </div>
            ))}

             <div className='pagination' style={{ marginTop: "20px" }}>
                {Array.from({ length: page }, (_, i) => (
                <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    style={{
                    margin: "0 5px",
                    padding: "5px 10px",
                    background: page === i + 1 ? "#333" : "#eee",
                    color: page === i + 1 ? "#fff" : "#000",
                    }}
                >
                    {i + 1}
                </button>
                ))}
            </div>

            {hasMore && <div ref={loaderRef} style={{ height: "40px",background: "#f7f7f7" }}>Loading...</div>}
        </div>
    </div>
  )
}

export default InfiniteScrollList
