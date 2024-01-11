import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';





const Cards = (props) => {


const item = props.data

const api_data = { }

if(props.service === "fakestore") {
    api_data.title = item.title
    api_data.image = item.image
    api_data.href = `/urunler/${item.id}`
    api_data.id = item.id
}else if (props.service === "randomuser"){
    api_data.title = item.name.first
    api_data.image = item.picture.large
    api_data.href = `/urunler/${item.id}`
    api_data.id = item.id.name
}


const arrangeData = () => {







        return <Card className='m-3' style={{ width: '25%' }} key={api_data.id}>
                        <Card.Img variant="top" src={api_data.image} />
                        <Card.Body>
                            <Card.Title>{api_data.title}</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the
                                bulk of the card's content.
                            </Card.Text>
                            <Link className='btn btn-success' to={`/urunler/${api_data.href}`}>Ürün detayına git</Link>
                        </Card.Body>
                    </Card>
      //else{

//                     return <Card  className='m-3' style={{ width: '25%' }}>
//                         <Card.Img variant="top" src={api_data.picture.large} />
//                         <Card.Body>
//                             <Card.Title>{api_data.title}</Card.Title>
//                             <Card.Text>
//                                 Some quick example text to build on the card title and make up the
//                                 bulk of the card's content.
//                             </Card.Text>
//                             <Link className='btn btn-success' to={`/urunler/${api_data.href}`}>Ürün detayına git</Link>
//                         </Card.Body>
//                     </Card>
// }
}


  return (
    <>
    
        {arrangeData()}
    
    
    
    </>
  )
}

export default Cards