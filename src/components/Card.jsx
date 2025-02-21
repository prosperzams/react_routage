import React from 'react'
import { Link } from 'react-router'

export default function Card({products}) {
  return (
    <div className="card mb-3">
        <img src={products.image} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{products.title}</h5>
            <p className="card-text">
                <span>Price: {products.price}</span>
                <span>Category: {products.category}</span>
            </p>
            <Link to={`/product/${products.id}`} className="btn btn-primary">Learn more</Link>
        </div>
    </div>
  )
}


