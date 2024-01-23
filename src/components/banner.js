import React from 'react';
import './styles/banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <h1>Contrate com impacto</h1>
            <p>Divulgamos serviços e organizações que oferecem serviços, gerando impacto social</p>
            <div className="search-bar">
                <input type="text" placeholder= "Pesquisar Serviços"/>
                <button>Buscar</button> 
            </div>
        </div>
    );
};

export default Banner;