import React, { useEffect, useState } from 'react'
import Carousel from '../components/Carousel'
import axios from 'axios';
import Card from '../components/Card';


export default function Home() {

    const [products, setProducts] = useState([])

    async function fetchProducts() {
        try {
            const response = await axios.get('https://fakestoreapi.com/products')
            setProducts(response.data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        fetchProducts()
    }, [])
    
  return (
    <>
        <Carousel/>
        <main className='container mt-4'>
            <h1 className='text-center'>Tout les articles</h1>
            <section className='row'>
                {
                    products.map((product, index) => {
                        return(
                            <div key={index} className="col-lg-3 col-md-6">
                                <Card products={product}/>
                            </div>
                        )
                    })
                }
            </section>
        </main>
    </>
    
  )
}
