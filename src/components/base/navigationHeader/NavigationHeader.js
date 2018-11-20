import React, { Component } from 'react';
// Import routing components
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import '../../../App.scss';
import './NavigationHeader.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faUser } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import  ShopImg  from '../../../assets/img/decoration-3.jpg';
import  NewImg  from '../../../assets/img/product4.jpg';
import  ServiceImg  from '../../../assets/img/warehouse.jpg';
import  EventImg  from '../../../assets/img/tradeshow1.jpg';
import  OrderImg  from '../../../assets/img/about-us2.jpg';

class NavigationHeader extends Component {
    render() {
        library.add(fab, faShoppingCart, faUser);
        return(
            <div className="page-header">
                <div className="page-header__wrapper">
                    <h1><Link to="/">Rose Edition - Jacsonic</Link></h1>
                </div>
                <hr />
                <div className="page-header__contact">
                    <div className="contact-nav">
                        <ul className="contact-nav__nav-menu">
                            <li className="contact-nav__menu-item">
                                <Link className="contact-nav__item-node" to="/contactus">CONTACT</Link>
                            </li>
                            <li className="contact-nav__menu-item">
                                <a className="contact-nav__item-node" href="#">USD - $</a>
                            </li>
                            <li className="contact-nav__menu-item">
                                <p>(909) 627 1580</p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-header__actions">
                    <div className="utility-nav">
                        <ul className="utility-nav__nav-menu">
                            <li className="utility-nav__menu-item">
                                <Link className="utility-nav__item-node" to="/signin">ACCOUNT <FontAwesomeIcon icon="user" /></Link>
                            </li>
                            <li className="utility-nav__menu-item">
                                <Link className="utility-nav__item-node" to="/checkout">CHECKOUT <FontAwesomeIcon icon="shopping-cart" /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="page-header__primary-nav">
                    <div className="primary-nav">
                        <ul className="primary-nav__nav-menu">
                            <li className="primary-nav__menu-item">
                                <Link className="primary-nav__item-node" to="/aboutus">WHY US</Link>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><Link to="/aboutus">Our Story</Link></li>
                                                    <li><Link to="/ourspace">Our Space</Link></li>
                                                    <li><Link to="/contactus">Contact</Link></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory">
                                                <img src={ShopImg} alt="Shop" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="primary-nav__menu-item">
                                <a className="primary-nav__item-node" href="#">WHAT'S NEW</a>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="">2018 New Fall Collections</a></li>
                                                    <li><a href="">Recommended Products</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="">View All</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory">
                                                <img src={NewImg} alt="New" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="primary-nav__menu-item">
                                <a className="primary-nav__item-node" href="#">SHOP</a>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="">View All</a></li>
                                                    <li><a href="">Home Decor</a></li>
                                                    <li><a href="">Stationery</a></li>
                                                    <li><a href="">Paper Floral Stick On</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="">Accessory Bags</a></li>
                                                    <li><a href="">Corsages/ Hair Pins</a></li>
                                                    <li><a href="">Flower Embellishments</a></li>
                                                    <li><a href="">Mulberry Paper Floral Brooch</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="">Gift Packaging</a></li>
                                                    <li><a href="">Magnet</a></li>
                                                    <li><a href="">Party Decor</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <img src={ShopImg} alt="Shop" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="primary-nav__menu-item">
                                <Link className="primary-nav__item-node" to="/services">SERVICES</Link>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><Link to="/services">OverView</Link></li>
                                                    <li><Link to="/storage">Storage</Link></li>
                                                    <li><Link to="/shipment">Packaging/Return</Link></li>
                                                    <li><Link to="/fulfillment">Fufillment</Link></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory">
                                                <img src={ServiceImg} alt="Service" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="primary-nav__menu-item">
                                <a className="primary-nav__item-node" href="#">TRADE SHOW & EVENTS</a>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="http://www.creativationshow.org/">Creativation 2018</a></li>
                                                    <li><a href="http://www.internationalgiftsandcraftsshows.com/">Las Vegas International Trade Show 2018</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="https://www.nynow.com/">NY NOW Week 2017</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><a href="https://www.asdonline.com/">ASD Market Week 2016</a></li>
                                                    <li><a href="https://paperworldchina.hk.messefrankfurt.com/shanghai/en/visitors/welcome.html?nc">PaperWorld China 2016</a></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory">
                                                <img src={EventImg} alt="Events" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li className="primary-nav__menu-item">
                                <Link className="primary-nav__item-node" to="/order">ORDER</Link>
                                <ul className="primary-nav__dropdown submenu">
                                    <li className="primary-nav__dropdown-container">
                                        <div className="primary-nav__dropdown-row">
                                            <div className="catalog-subcategory">
                                                <ul>
                                                    <li><Link to="/order">Order Policy</Link></li>
                                                    <li><Link to="/wholesaleform">Whole Sale Form</Link></li>
                                                    <li><Link to="/quoteform">Get Logistic Quote</Link></li>
                                                </ul>
                                            </div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory"></div>
                                            <div className="catalog-subcategory">
                                                <img src={OrderImg} alt="Order" />
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

export default NavigationHeader;