import React from 'react'

const products = [
  {
    id: 1,
    title: "Summer Ribbed Dress",
    price: "$29.99",
    image: "https://images.pexels.com/photos/1827130/pexels-photo-1827130.jpeg",
  },
  {
    id: 2,
    title: "Oversized Graphic Tee",
    price: "$24.99",
    image: "https://images.pexels.com/photos/7679728/pexels-photo-7679728.jpeg",
  },
  {
    id: 3,
    title: "Vintage Denim Jacket",
    price: "$49.99",
    image: "https://images.pexels.com/photos/1027130/pexels-photo-1027130.jpeg",
  },
]

export default function App() {
  return (
    <main style={{ fontFamily: 'Arial', maxWidth: '1000px', margin: 'auto', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>TrendWave Clothing</h1>
      <p style={{ textAlign: 'center', color: '#666', marginBottom: '2rem' }}>
        Affordable American fashion for everyday life
      </p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {products.map((product) => (
          <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '12px', padding: '1rem', width: '280px' }}>
            <img src={product.image} alt={product.title} style={{ width: '100%', borderRadius: '8px' }} />
            <h2 style={{ fontSize: '1.25rem', marginTop: '0.5rem' }}>{product.title}</h2>
            <p style={{ fontWeight: 'bold' }}>{product.price}</p>
            <button style={{ width: '100%', padding: '0.5rem', marginTop: '0.5rem', background: 'black', color: 'white', border: 'none', borderRadius: '6px' }}>
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </main>
  )
}
