import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import axios from 'axios'

export default function ProductDet() {
    
    const [product, setProduct] = useState(null)
    const { id } = useParams()

    async function fetchProduct() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`)
            setProduct(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchProduct()
    }, [id])

    if (product === null) {
        return (
            <main className="container mt-5">
                <div className="d-flex justify-content-center">
                    <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            </main>
        )
    }

    return (
        <main className="container mt-5">
            <section className="row">
                <h3 className="text-center mb-3">Product {id}</h3>
                <div className="col-lg-6">
                    <img src={product.image} alt="" className="img-fluid img-thumbnail" />
                </div>
                <div className="col-lg-6">
                    <h1 className="text-center">{product.title}</h1>
                    <p className="text-center">
                        <span>Price: {product.price} $</span> <br />
                        <span>Category: {product.category}</span>
                    </p>
                    <p className="text-center">
                        {product.description}
                    </p>
                </div>
            </section>
        </main>
    )
}
