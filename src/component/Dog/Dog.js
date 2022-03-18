import React from 'react';
import './Dog.css'
const Dog = (props) => {
    console.log(props.dog)
    const { name, life_span, weight, image } = props.dog
    return (
        <div className='dog-style'>

            <img src={image.url} alt="" />
            <h1>Name: {name}</h1>
            <h3>Life span: {life_span}</h3>
            <h4>Weight: {weight.imperial}</h4>

        </div>
    );
};

export default Dog;