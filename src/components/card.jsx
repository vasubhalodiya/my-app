import React from 'react';
import './card.css';


const Card = (props) => {
    return (
        <div className="card">
            <img src="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg" alt="" />
            <div className="card-txt">
                <h2>{props.title}</h2>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default Card;