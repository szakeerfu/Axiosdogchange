import React, { useEffect, useState } from 'react'
import './DataDog.css'
import axios from 'axios'

 

export const Datadog = () => {
    const [Dog, setDog] = useState([])

    const handleClicked = () => {


        const url = "https://dog.ceo/api/breeds/image/random";

        axios.get(url).then
            ((responce) => {
                //  console.log(responce.data)
                setDog(responce.data.message)
            })






    }
    useEffect(() => {
        handleClicked();

    }, [])





    return (
        <>
            <div>
                <img src={Dog} alt="Selected" width={600} height={500} />
            </div>
            <div className="sub">
                <button onClick={handleClicked} >
                    <span>Change Dog</span>
                </button>
            </div>
        </>

    )
}
