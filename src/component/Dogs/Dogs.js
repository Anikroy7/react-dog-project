import React, { useEffect, useState } from 'react';

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
                dogs.map(dog => console.log(dog))
            }
        </div>
    );
};

export default Dogs;