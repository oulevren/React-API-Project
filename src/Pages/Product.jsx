import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


const Product = () => {

    const { urunId } = useParams()

        const [urun,setUrun] = useState(null)
        const [error, setError] = useState(false)

        const make_api_request = async () => {
            try {
                const request = await fetch(`https://fakestoreapi.com/products/${urunId}`)
                const response = await request.json()
                console.log("DETAY APİ",response)
                setUrun(response)
            } catch {
                setError(true)
            }

        }

        useEffect(() => {
            make_api_request()
        }, [])

        if(urun === null && error !== true){
            return<div className='text-center'>
                <h3>Ürün yükleniyor lütfen bekleyin</h3>
            </div>
        }
        if(error){
            return <div>Böyle bir ürün bulunamadı</div>
        }


  return (
    <>
    
    
    <div className="d-flex" style={{flexWrap:'wrap', justifyContent:'space-around'}}>

                    <Card key={urun.id} className='m-3' style={{ width: '25%' }}>
                        <Card.Img variant="top" src={urun.image} />
                        <Card.Body>
                            <Card.Title>{urun.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link to={`/urunler/${urun.id}`} variant="primary">Ürün detayına git</Link>
                        </Card.Body>
                    </Card>
       

            </div>
    
    
    </>
  )
}

export default Product