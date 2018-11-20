import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './Order.scss';

class Order extends Component{
    render(){
        return(
            <div className="order-page-content">
            <section className="order-page-content__hero-banner">
                <div className="order-page-content__hero-banner-overlay">
                    <div className="hero-banner__title">
                        <h1>ORDER</h1>
                        <p>Order made easy for both wholesalers looking to purchase decor & accessories, and
                            ecommerce/local merchants needing storage & shipment services.
                        </p>
                    </div>
                </div>
            </section>
            <section className="order-page-content__order-forms">
                <div className="order-forms__link"><Link to="/wholesaleform">Wholesale Form</Link></div>
                <div className="order-forms__link"><Link to="/quoteform">Logistics Quote Form</Link></div>
            </section>
            <section className="order-page-content__order-policy">
                <h1>ORDER POLICY</h1>
                <p><strong>We want you to be 100% happy with your purchase from Jacsonic!</strong></p>
                <div className="order-policy__wholesale">
                    <div className="shipment-policy">
                        <h2>ORDER METHOD & SHIPMENT</h2>
                        <ol>
                            <li>Please register first to get the authorization and see the products. If you 
                            already have an account with us, please sign in as the member and you 
                            will be able to view and order the products.</li>
                            <li>Add the Product item you want to order to the Shopping Cart.</li>
                            <li>Click "Shop More" to order other products. </li>
                            <li>Click "Check Out" when the shopping is done. </li>
                            <li>Please check if the Invoice Address and the Shipping Adress is correct 
                            otherwise, you can modify the Addresses as need. </li>
                            <li>On the Final Check Out page, please fill out your credit card information for 
                            the payment and the shipping option you prefer. And that's it, you can 
                            submit the order right away. </li>
                        </ol>
                        <p><strong>** Please nore that the payment can be made by Credit Card after we confim 
                        with you the inventory and the shipping cost. </strong></p>
                    </div>
                    <div className="return-policy">
                        <h2>RETURN POLICY</h2>
                        <ul>
                            <li>If, when you receive your order, it is not 100% free from defects in materials 
                            and workmanship, you may return it in new condition and its original packaging 
                            for a prompt credit, exchange, or full refund.</li>
                            <li>Allowable returns for any reason other than defects are subject to a 
                            5% restocking fees.</li>
                            <li>All returns must receive prior authorization, so please contact us for approval.</li>
                            <li>All returns or exchanges must be made within 14 days of receipt.</li>
                            <li>Shipping is not refundable.   </li>
                            <li>Personalized items or customized orders are not returnable unless 
                            damaged in shipping.</li>
                            <li>Cancellations must be made <strong>within 24 hours</strong> of placing your order.</li>
                        </ul>
                    </div>
                </div>
                <div className="order-policy__logistics">
                    <div className="logistics-policy">
                        <h2>LOGISTICS? WAREHOUSE</h2>
                        <p><strong>We want you to be 100% satisfied in trusting Jacsonic with your supply!</strong></p>
                        <ul>
                            <li>Quote and warehouse rental price is dependent upon size of inventory and duration of storage.</li>
                            <li>Any issues with quality assurance and storage, please meet in-person at the warehouse to discuss
                            how we can better assist you or make changes to the arrangement.</li>
                            <li>Monthly warehouse rent is due at the end of each month and made payable to Jacsonic Inc.</li>
                            <li>If you are shipping inventory outside of US, we are not responsible for an duties or taxes on the
                            shipment to the warehouse.</li>
                            <li>We are not liable for any damages that occurs outside of the warehouse during shipping or fufillment.</li>
                        </ul>
                    </div>
                </div>
            </section>
            </div>
        );
    }
}

export default Order;