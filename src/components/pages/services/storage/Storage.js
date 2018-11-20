import React from 'react';
// Import routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Storage.scss';
import StorageImg from '../../../../assets/img/services/storageImg.jpg';

const Storage = props => (
    <div className="storage-page-content">
        <section className="storage-page-content__hero-banner">
            <div className="storage-page-content__hero-banner-overlay">
                <div className="hero-banner__title">
                    <h1>STORAGE & INVENTORY MANAGEMENT</h1>
                    <p>Having the right product to send to your customers when they need 
                        it is a major challenge. Knowing how much inventory you have and where 
                        it is located is critical to managing your business.
                    </p>
                </div>
            </div>
        </section>
        <section className="storage-page-content__description">
            <h1>Your Product Is Our Priority</h1>
            <div className="storage">
                <div className="storage__description">
                    <p>
                    Jacsonic has the tools to make your job easier. Our warehouse management system allows online, 
                    24/7 access to all of your shipments, receipts, and inventory levels which gives you the information 
                    you need to confidently serve your customers’ needs.  Inventory management is one of the keys to our 
                    customers' success. 
                    </p>
                    <br />
                    <p>
                    Online order entry, EDI, and instant reports ensure that you have the ability to ship what your customer 
                    needs—when they need it shipped.   
                    We know how to manage your inventory so you will have the confidence that when your customer needs product, 
                    it will be ready to ship. 
                    </p>
                </div>
            </div>
        </section>
        <br />
        <img src={StorageImg} style={{ width: '50%'}}/>
        <br />
        <section className="storage-page-content__description">
            <h1>Safe Storage Is Key</h1>
            <div className="storage">
                <div className="storage__description">
                    <p>
                    Let’s face it: maintaining your own warehouse facility is hard, not to mention expensive. For half of the year, 
                    you’re looking at a partially empty building and the other half, you’re piling product in the aisles. Product 
                    gets lost; product gets damaged; people get frustrated; customers are unhappy.
                    </p>
                    <br />
                    <p>
                    That’s why allowing us to do your warehousing is the perfect solution. You pay for the space you need—only when 
                    you need it. Your fixed expense becomes a variable expense. We provide the space, the manpower (and womanpower!), 
                    and the expertise to allow you to flex your supply chain muscle without having it becoming a logistical nightmare.
                    </p>
                </div>
            </div>
        </section>
        <section className="service-page-content__order-forms">
            <div>
                <h2>Get Your Quote Today!!</h2>
                <div className="order-forms__link"><Link to="/quoteform">Logistics Quote Form</Link></div>
            </div>
            <div>

            </div>
        </section>
    </div>
);

export default Storage;