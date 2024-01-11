import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Cards from '../Components/Cards';


//api
// https://fakestoreapi.com/products


const Products = () => {

        const [product, setProduct] = useState(null)

    const make_api_req = async () => {
        const endpoint = "https://fakestoreapi.com/products"
        const req = await fetch(endpoint)
        const response = await req.json()
        console.log("STORE APİ",response)
        setProduct(response)
    }

useEffect(() => {
    make_api_req()
}, [])
        
if(product === null) {
    return <div className='text-center'>
        <h3>SAYFA YÜKLENİYOR LÜTFEN BEKLEYİN...</h3>
    </div>
}

  return (
    <>
    
    
    <div className="d-flex" style={{flexWrap:'wrap', justifyContent:'space-around'}}>
                {product?.map((products) => {
                    return <Cards data= {products} service="fakestore" key={products.id}></Cards>
                })}

            </div>
    
    
    
    </>
  )
}

export default Products