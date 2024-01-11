import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Cards from '../Components/Cards';

//api
// https://randomuser.me/api/?results=5000

const Personels = () => {

    const [user, setUser] = useState(null)

    const make_api_request = async () => {

        const request = await fetch("https://randomuser.me/api/?results=100")
        const respone = await request.json()
        console.log("APİDEN GELEN", respone)
        setUser(respone.results)

    }

    useEffect(() => {
        make_api_request()
    },[])

    if(user === null) {
        return <div className='text-center'>
            <h3>SAYFA YÜKLENİYOR LÜTFEN BEKLEYİN...</h3>
        </div>
    }


    return (
        <>

            <div className="d-flex" style={{flexWrap:'wrap', justifyContent:'space-around'}}>
                {user?.map((item) => {
                    return <Cards key={item.login.uuid} data = {item} service="randomuser"></Cards>
                })}

            </div>



        </>
    )
}

export default Personels