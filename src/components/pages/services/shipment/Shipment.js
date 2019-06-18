import React from 'react';
// Import routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ShipmentImg from '../../../../assets/img/services/shipmentImg.jpg';
import ShipmentMethod from '../../../../assets/img/services/shippingMethods.jpg';

const Shipment = props => (
    <div className="shipment-page-content">
        <section className="shipment-page-content__hero-banner">
            <div className="shipment-page-content__hero-banner-overlay">
                <div className="hero-banner__title">
                    <h1>Shipping & Returns</h1>
                    <p>
                    To be successful in today’s competitive marketplace, you need to offer 
                    your customers high-value, customizable solutions. Your customers demand 
                    flexibility and responsiveness. 
                    </p>
                </div>
            </div>
        </section>
        <section className="shipment-page-content__description">
            <h1>Streamlining Deliveries & Returns</h1>
            <div className="shipment">
                <div className="shipment__description">
                    <p>
                    Jacsonic will accept deliveries and manage shipments on 
                    your behalf so that you can streamline operations. Plus, with our Inventory 
                    Asset Management solution, you can dispatch deliveries of your inventory to 
                    local destinations.
                    </p>
                    <br />
                    <p>
                    We work with different local/ international courier delivery services like FedEx, UPS, USPS, OnTrac, 
                    and DHL to provide you with the best cost-effective method of shipments and returns for you and your
                    customers. 
                    </p>
                    <br />
                </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr', columnGap: '3rem', justifyItems: 'center', alignItems: 'center'}}>
                <img src={ShipmentMethod} style={{ maxWidth: '100%', gridColumn: '2/4'}} />
                <div style={{ gridColumn: '4/6', lineHeight: '2.5rem'}}>
                    <p>Our flexible model, using only quality carriers, means you benefit from improved service levels, greater 
                    flexibility and time-definite deliveries. Our expertise in transport management and planning allows us to 
                    design a solution that meets your needs and also quickly respond to any event disruptions, such as weather. 
                    </p>
                    <p>
                    Through our global network of control towers and state-of-the-art technology, we are able to monitor and 
                    dynamically react to situations such as adverse weather, additional pick ups or drop offs, or heavy traffic, 
                    meaning that your goods are always travelling the most efficient route. 
                    Integrated Road networks, covering the world.
                    </p>
                </div>
            </div>
        </section>
        <section className="shipment-page-content__order-forms">
            <div className="order">
                <h2>Get Your Quote Today!!</h2>
                <div className="order-forms__link"><Link to="/quoteform">Logistics Quote Form</Link></div>
            </div>
            <div className="img">
                <img src={ShipmentImg} />
            </div>
        </section>
    </div>
);

export default Shipment;