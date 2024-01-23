import React from "react";
import './styles/card.css';

const Card = ({service }) => {
    return (
        
        <div className="card-container">
            <div className="image-container">
                <img src={service.image} alt='Entregadores'/>
            </div>
            <div className="card-content">
                <div className="card-tittle">
                    <h3>{service.name}</h3>
                </div>
                <div className="card-body">
                    <p>{service.description.text}</p>
                </div>
            </div>
        </div>
            
    );
};

export default Card;  
