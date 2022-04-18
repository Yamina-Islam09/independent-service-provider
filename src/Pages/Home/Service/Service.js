import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const { name, img, description, price} = service;
    const navigate = useNavigate();

    const navigateToServiceDetail =()=>{
        navigate('/checkout');
    }
    return (
        <div className='service mt-2 mb-5'>
            <img className='w-100' src={img} alt="" />
            <h2> {name}</h2>
            <p>Price: {price}BDT</p>
            <p><small>{description}</small></p>
            <button onClick={ navigateToServiceDetail} className='btn btn-warning'  style={{color:'black'}}>Book: {name}</button>
        </div>
    );
};

export default Service;