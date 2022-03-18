import React, { useEffect, useState } from 'react';
import Dog from '../Dog/Dog';
import "./Dogs.css"

const Dogs = () => {

    const [dogs, getDogs] = useState([])

    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => getDogs(data))
    }, [])

    return (
        <div className='main'>
            {
                dogs.map(dog => <Dog dog={dog}></Dog>)
            }
        </div>
    );
};

export default Dogs;