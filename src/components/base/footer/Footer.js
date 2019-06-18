import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Footer extends Component{
    render(){
        return(
            <div className="page-footer">
                <div className="page-footer__row">
                    <div className="page-footer__item">
                        <h5>SHOP & SERVICES</h5>
                        <ul>
                            <li><a href="">New Arrivals</a></li>
                            <li><a href="">Products</a></li>
                            <li><Link to="/services">Services</Link></li>
                        </ul>
                    </div>
                    <div className="page-footer__item">
                        <h5>ABOUT US</h5>
                        <ul>
                            <li><Link to="/ourspace">Visit Us</Link></li>
                            <li><Link to="/contactus">Contact</Link></li>
                        </ul>
                    </div>
                    <div className="page-footer__item">
                        <h5>HELP & CONTACT</h5>
                        <ul>
                            <li><Link to="/order">FAQ (shipping & return policy)</Link></li>
                            <li><Link to="/order">Order Policy</Link></li>
                            <li><a href="">Terms and Conditions</a></li>
                            <li><a href="">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="page-footer__item">
                        <h5>STAY CONNECTED</h5>
                        <ul className="share-buttons">
                            <li className="share-buttons__item"><a href=""><FontAwesomeIcon icon={["fab", "twitter-square"]} /></a></li>
                            <li className="share-buttons__item"><a href=""><FontAwesomeIcon icon={["fab", "facebook-square"]} /></a></li>
                            <li className="share-buttons__item"><a href=""><FontAwesomeIcon icon={["fab", "pinterest-square"]} /></a></li>
                            <li className="share-buttons__item"><a href=""><FontAwesomeIcon icon={["fab", "instagram"]} /></a></li>
                        </ul>
                    </div>
                </div>
                <p>Copyright 2007, Jcsonic Group Inc. All Rights Reserved.</p>
            </div>
        );
    }
}