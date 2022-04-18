import React from 'react';
import customer2 from '../../../images/p2.png'
import customer3 from '../../../images/p3.png'
import customer4 from '../../../images/p4.png'
import customer5 from '../../../images/p5.jpg'
import customer6 from '../../../images/p3.png'
import CustomerReview from '../CustomerReview/CustomerReview';

const customers = [

    {id: 2, name: 'Chris Rock', img: customer2},
    {id: 3, name: 'Dwayne Rock', img: customer3},
    {id: 4, name: 'Messy Vai', img: customer4},
    {id: 5, name: 'Ronaldo Bro', img: customer5},
    {id: 6, name: 'Stachy Jhonson', img: customer6},
]

const CustomerReviews = () => {
    return (
        <div id="customers" className='container'>
            <h1 className='text-dark text-center mt-2 mb-2'>My Customers</h1>
            <div className="row">
                {
                    customers.map(customer => <CustomerReview
                        key={customer.id}
                        customer= {customer}
                    ></CustomerReview>)
                }
            </div>
        </div>
    );
};

export default CustomerReviews;