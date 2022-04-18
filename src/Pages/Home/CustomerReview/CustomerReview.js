import React from 'react';

const CustomerReview = ({customer}) => {
    const { name, img } = customer;
    return (
        <div className='g-5 col-sm-12 col-md-6 col-lg-4'>
            <div className="card" style={{ width: "25rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">I will recommend her catering services..Foods are really healthy and heigenic</p>
                </div>
            </div>
        </div>

    );
};

export default CustomerReview;