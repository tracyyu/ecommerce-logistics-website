import React from 'react';
// Import routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LogisticsImg from '../../../assets/img/logistics-returns.jpg';
import WarehouseImg from '../../../assets/img/warehouse.jpg';
import PackagingImg from '../../../assets/img/packing-boxes.jpg';
import ContactForm from '../../../components/ui/contactForm/ContactForm';
import JanetStan from '../../../assets/img/team/JanetStans.jpg';

const StyledButton = withStyles({
    root: {
        //background: 'linear-gradient(45deg, #fea7b3 30%, #fc8496 90%)',
        borderRadius: 4,
        border: '2px solid white',
        color: 'white',
        height: 48,
        padding: '0 40px',
        letterSpacing: '1px',
        zIndex: '10'
        //boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    },
    label: {
        textTransform: 'capitalize',
    },
})(Button);

const ServicePage = props => (
    <div className="service-page-content">
        <section className="service-page-content__hero-banner">
            <div className="service-page-content__hero-banner-overlay">
                <div className="hero-banner__title">
                    <h1>SERVICES</h1>
                    <p>A commitment to excellence and continuous improvement has allowed us to 
                    create high-value solutions that reduce costs, improve service, and increase 
                    our clients’ revenues. 
                    </p>
                </div>
            </div>
        </section>
        <section className="service-page-content__description">
            <h1>Warehousing,
            Distribution & Logistics Provider</h1>
            <div className="service">
                <div className="service__description">
                    <p>
                    Our approach is simple: we ask a lot of questions. We find out what is important
                     to you and what your goals are. Then we create solutions using our experienced 
                     people, documented processes, modern facilities, and cutting-edge technology 
                     that allows you to exceed your customers’ expectations. Our offerings include: 
                     warehousing, distribution & fulfillment, inventory management, trucking, and pick/pack.
                    </p>
                </div>
            </div>
        </section>
        <section className="service-page-content__featured-services">
            <div className="featured-services__header">
                <h1>Our Logistics Services</h1>
            </div>
            <div className="featured-services__items-row">
                <div className="featured-services__item">
                    <div className="featured-services__item-image" style={{backgroundImage: `url(${WarehouseImg})`}}>
                        <Link to="/storage">Discover More</Link>
                    </div>
                    <div className="featured-services__item-description">
                        <span>Storage</span>
                        <p>Find out more about how we support and secure our trade client's inventory
                        in our warehouse to minimize lose or damage of products</p>
                    </div>
                </div>
                <div className="featured-services__item">
                    <div className="featured-services__item-image" style={{backgroundImage: `url(${LogisticsImg})`}}>
                        <Link to="/shipment">Discover More</Link>
                    </div>
                    <div className="featured-services__item-description">
                        <span>Packaging/ Return</span>
                        <p>Discover how we handle shipping and returns for client's products 
                        to provide the most cost-efficient delivery service</p>
                    </div>
                </div>
                <div className="featured-services__item">
                    <div className="featured-services__item-image" style={{backgroundImage: `url(${PackagingImg})`}}>
                        <Link to="/fulfillment">Discover More</Link>
                    </div>
                    <div className="featured-services__item-description">
                        <span>Fufillment</span>
                        <p>Learn more about how we help our ecommerce merchants get online orders to customers 
                        in a timely fashion </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="service-page-content__order-forms">
            <h2>Get Your Quote Today!!</h2>
            <div className="order-forms__link"><Link to="/quoteform">Logistics Quote Form</Link></div>
        </section>
        <section className="service-page-content__contact">
            <div className="contact-info__contact">
                <div className="contact-container">
                    <h3>Need More Info? Don't Hesitate to Ask</h3>
                    <p>We are happy to help you with what you need.</p>
                    <br />
                    <img src={JanetStan} style={{ width: '100%', height: 'auto'}}/>
                </div>
            </div>
            <div className="contact-info__form">
                <ContactForm />
            </div>
        </section>
    </div>
);

export default ServicePage;