import React, { useEffect, useState } from 'react';
import Dog from '../Dog/Dog';

const Dogs = () => {

    const [dogs, getDogs] = useState([])

    useEffect(() => {
        fetch('https://api.thedogapi.com/v1/breeds')
            .then(res => res.json())
            .then(data => getDogs(data))
    }, [])

    return (
        <div>
            {
                dogs.map(dog => <Dog dog={dog}></Dog>)
            }
        </div>
    );
};

export default Dogs;