import React from 'react';
// Import routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ProductCarousel from '../ui/productCarousel/ProductCarousel';
import './Homepage.scss';
import {
    Button
  } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import LogisticsImg from '../../assets/img/logistics-returns.jpg';
import WarehouseImg from '../../assets/img/warehouse.jpg';
import PackagingImg from '../../assets/img/packing-boxes.jpg';

import TradeShow from '../../assets/img/tradeshow1.jpg';
import Tradeshow2 from '../../assets/img/tradeshow2.jpg'
import Tradeshow3 from '../../assets/img/tradeshow3.jpg';
import TradeShow4 from '../../assets/img/asdmarket.png';
import Tradeshow5 from '../../assets/img/paperworld.JPG';

import product3 from '../../assets/img/product3.jpg'
import product4 from '../../assets/img/product4.jpg';
import product5 from '../../assets/img/product5.jpg';
import product6 from '../../assets/img/product6.jpg';
import product7 from '../../assets/img/product7.jpg';

import decoration from '../../assets/img/decoration.jpg';
import decoration2 from '../../assets/img/decoration-2.jpg';
import decoration3 from '../../assets/img/decoration-3.jpg';
import decoration6 from '../../assets/img/decoration6.jpeg';
import decoration7 from '../../assets/img/decoration-7.jpg';

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

var flowerProducts = [{'SUNNY DAYS': {product3}},{'SO PEACHY': {product4}},{'GARDEN VARIETY': {product5}},{'THANKSGIVING': {product6}},{'LONG TIME NO SEE': {product7}}];
var decorationProducts = [{'FLORAL CLOUD': {decoration}},{'FLORAL PINWHEEL': {decoration2}},{'FLORAL POM POM': {decoration3}},{'NIGHT LIGHT': {decoration6}},{'CHAIR DECOR': {decoration7}}];


const HomePage = props => (
    <div className="page-content">
        <section className="page-content__hero-banner">
            <div className="hero-banner__title">
                <h1>Aesthetics & Logistics</h1>
                <p>Combing passion for fine gifting with strategic planning</p>
                <button>Flower Shop</button>
                <button>Logistics</button>
            </div>
            <div className="hero-banner__flowershop">
            </div>
            <div className="hero-banner__logistics">
            </div>
        </section>
        <section className="page-content__about-us">
            <h1>ABOUT US</h1>
            <div className="about-us">
                <div className="about-us__description">
                    <p>" Back in 1997, Jacsonic was established with the pure 
                    purpose of creating fine gift items made with natural papers. And has later developed into making unique packaging 
                    boxes starting year 2004. In 2005, we have expanded our business to include logistics, warehousing, transloading, and fufillment division. "</p>
                </div>
            </div>
            <StyledButton style={{ color: 'black', border: '2px solid black', fontSize: '16px' }}><Link to="/aboutus">Discover More</Link></StyledButton>
        </section>
        <section className="page-content__more-flower-products">
            <h1>NEW ARRIVALS</h1>
            <ProductCarousel products={flowerProducts}/>
            <br />
            <ProductCarousel products={decorationProducts}/>
        </section>
        <section className="page-content__featured-services">
            <div className="featured-services__header">
                <h1>Our Logistics Services</h1>
            </div>
            <div className="featured-services__items-row">
                <div className="featured-services__item">
                    <div className="featured-services__item-image" style={{backgroundImage: `url(${WarehouseImg})`}}>
                        <a href="">Discover More</a>
                    </div>
                    <div className="featured-services__item-description">
                        <span>Storage</span>
                        <p>Find out more about how we support and secure our trade client's inventory
                        in our warehouse to minimize lose or damage of products</p>
                    </div>
                </div>
                <div className="featured-services__item">
                    <div className="featured-services__item-image" style={{backgroundImage: `url(${LogisticsImg})`}}>
                        <a href="">Discover More</a>
                    </div>
                    <div className="featured-services__item-description">
                        <span>Packaging/ Return</span>
                        <p>Discover how we handle shipping and returns for client's products 
                        to provide the most cost-efficient delivery service</p>
                    </div>
                </div>
                <div className="featured-services__item">
                    <div className="featured-services__item-image" style={{backgroundImage: `url(${PackagingImg})`}}>
                        <a href="">Discover More</a>
                    </div>
                    <div className="featured-services__item-description">
                        <span>Fufillment</span>
                        <p>Learn more about how we help our ecommerce merchants get online orders to customers 
                        in a timely fashion </p>
                    </div>
                </div>
            </div>
        </section>
        <section className="page-content__featured-events">
            <div className="featured-events__header">
                <span>Discover our</span>
                <h1>News & TradeShow Highlights</h1>
            </div>
            <div className="featured-events__items-row">
                <div className="news-dashboard-card-main">
                    <a href="" className="news-dashboard-card">
                        <div className="news-dashboard-card__image">
                            <img src={TradeShow} />
                        </div>
                        <div className="news-dashboard-card__text-box">
                            <div className="flex-copy-item">
                                <div className="news-dashboard-card__text-box--copy-wrapper">
                                    <h1>HELLO, 
                                    <br />
                                    LOS ANGELES!</h1>
                                    <p>Follow us around during three days at the Creativation Expo</p>
                                </div>
                                <div className="news-dashboard-card__text-box--button-wrapper">
                                    <a>LEARN MORE...</a>
                                </div>
                            </div>
                        </div>
                    </a>
                </div>
                <div className="news-dashboard-card-past">
                    <div className="news-dashboard-card-past-entry">
                        <a href="" className="news-dashboard-card">
                            <div className="news-dashboard-card__image">
                                <img src={Tradeshow3} alt="NY NOW 2018"/>
                            </div>
                            <div className="news-dashboard-card__text-box">
                                <div className="flex-copy-item">
                                    <div className="news-dashboard-card__text-box--copy-wrapper">
                                        <h2>NY NOW 2018</h2>
                                        <p></p>
                                    </div>
                                    <div className="news-dashboard-card__text-box--button-wrapper">
                                        <a>LEARN MORE...</a>
                                    </div>
                                </div>
                            </div>
                        </a>                    
                    </div>
                    <div className="news-dashboard-card-past-entry">
                        <a href="" className="news-dashboard-card">
                            <div className="news-dashboard-card__image">
                                <img src={Tradeshow2} alt="Creativation 2017"/>
                            </div>
                            <div className="news-dashboard-card__text-box">
                                <div className="flex-copy-item">
                                    <div className="news-dashboard-card__text-box--copy-wrapper">
                                        <h2>Creativation 2017</h2>
                                        <p></p>
                                    </div>
                                    <div className="news-dashboard-card__text-box--button-wrapper">
                                        <a>LEARN MORE...</a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="news-dashboard-card-past-entry">
                        <a href="" className="news-dashboard-card">
                            <div className="news-dashboard-card__image">
                                <img src={TradeShow4} alt="ASD Market Week"/>
                            </div>
                            <div className="news-dashboard-card__text-box">
                                <div className="flex-copy-item">
                                    <div className="news-dashboard-card__text-box--copy-wrapper">
                                        <h1>ASD Market Week</h1>
                                        <p></p>
                                    </div>
                                    <div className="news-dashboard-card__text-box--button-wrapper">
                                        <a>LEARN MORE...</a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div className="news-dashboard-card-past-entry">
                        <a href="" className="news-dashboard-card">
                            <div className="news-dashboard-card__image">
                                <img src={Tradeshow5}/>
                            </div>
                            <div className="news-dashboard-card__text-box">
                                <div className="flex-copy-item">
                                    <div className="news-dashboard-card__text-box--copy-wrapper">
                                        <h2>Paperworld China</h2>
                                        <p></p>
                                    </div>
                                    <div className="news-dashboard-card__text-box--button-wrapper">
                                        <a>LEARN MORE...</a>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default HomePage;