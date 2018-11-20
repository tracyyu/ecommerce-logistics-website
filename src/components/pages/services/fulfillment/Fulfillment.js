import React from 'react';
// Import routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Fulfillment.scss';
import FulfillmentImg from '../../../../assets/img/services/fufillmentImg.jpg';

const Fulfillment = props => (
    <div className="fulfillment-page-content">
        <section className="fulfillment-page-content__hero-banner">
            <div className="fulfillment-page-content__hero-banner-overlay">
                <div className="hero-banner__title">
                    <h1>SPEED IS KEY</h1>
                    <p> Wherever your customers lead you, we’ll help you get there. 
                    This is multichannel fulfillment in motion – from shopping cart 
                    to your customer’s door, there is no faster, more cost-effective 
                    way to get your products from here to there.
                    </p>
                </div>
            </div>
        </section>
        <section className="fulfillment-page-content__description">
            <h1>E-Commerce Fulfillment is Our Specialty</h1>
            <div className="fulfillment">
                <div className="fulfillment__description">
                    <p>
                    Whether you’re an established e-commerce retailer shipping 4,000 orders per day or 
                    moving into e-commerce as a new sales channel for your product(s), Jacsonic has the resources 
                    and know-how to help you grow your online brand.
                    </p>
                    <br />
                    <p>
                    As an e-commerce business, you know the importance of maintaining strong fulfillment in order 
                    to maintain high levels of customer satisfaction. The sooner you reach buyers with your products, 
                    the more likely you are to receive good reviews and frequent word-of-mouth referrals. The better 
                    your packaging and the presentation of your e-commerce order, the more satisfied your customers 
                    will be.
                    </p>
                    <br />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '3rem', justifyItems: 'center', alignItems: 'center'}}>
                        <ul style={{ fontSize: '16px', fontWeight: '900', letterSpacing: '2px', lineHeight: '2.5rem'}}>
                            <li>Automated integration with your shopping cart and/or e-commerce platform</li>
                            <li>Custom packing slip to brand your internet business</li>
                            <li>Low, low, low volume shipping rates!</li>
                            <li>Same day order fulfillment</li>
                            <li>Real-time inventory management</li>
                        </ul>
                        <img src={FulfillmentImg} style={{ width: '100%', height: 'auto'}}/>
                    </div>
                </div>
            </div>
        </section>
        <section className="service-page-content__order-forms">
            <div>
                <h2>Get Your Quote Today!!</h2>
                <div className="order-forms__link"><Link to="/quoteform">Logistics Quote Form</Link></div>
            </div>
        </section>
    </div>
);

export default Fulfillment;