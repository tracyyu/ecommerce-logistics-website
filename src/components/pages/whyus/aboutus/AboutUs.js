import React from 'react';
import DavidKang from '../../../../assets/img/team/DavidKang.jpg';
import SophiaChen from '../../../../assets/img/team/SophiaChen.jpg';
import JessicaAlvarez from '../../../../assets/img/team/JessicaAlvarez.jpg';
import MarcusJohnson from '../../../../assets/img/team/MarcusJohnson.jpg';

const AboutUs = props => (
    <div className="about-page-content">
        <section className="about-page-content__hero-banner">
            <div className="about-page-content__hero-banner-overlay">
                <div className="hero-banner__title">
                    <h1>About Us</h1>
                    <p>Order made easy for both wholesalers looking to purchase decor & accessories, and
                        ecommerce/local merchants needing storage & shipment services.
                    </p>
                </div>
            </div>
        </section>
        <section className="about-page-content__description">
            <h1>Where It All Started...</h1>
            <div className="about-us">
                <div className="about-us__description">
                    <p>
                        Back in 1997, Jacsonic was established with the pure 
                        purpose of creating fine gift items made with natural papers.  
                        And has later developed into making unique packaging boxes starting 
                        year 2004. In 2006, We have expanded our business to include logistics,
                        warehousing, and fulfillment (drop shipping division). 
                    </p>
                    <br />
                    <p>
                        From the unique beauty of natural papers of Mulberry, Banana, Rice, 
                        Potato Skin and other fine natural materials, we have many options for our customers to choose from.
                        All items are handmade with unique design, trendy color and skillful workmanship.  
                        This made our boxes become one of the most desire packaging needs for a lot companies.
                    </p>
                    <br />
                    <p>
                        Jacsonic is always looking ahead and tirelessly searching for new natural materials, 
                        designs and colors to create more unique packaging boxes for all needs.
                        If you are looking for unique packaging or storage for your products or for customers, Jacsonic is 
                        definitely your 1st choice.
                    </p>
                </div>
            </div>
        </section>
        <section className="about-page-content__team">
            <div className="team__header">
                <h1>Meet the Team</h1>
            </div>
            <div className="team__items-row">
                <div className="team__item">
                    <div className="team__item-image">
                        <img src={SophiaChen} />
                    </div>
                    <div className="team__item-description">
                        <span>Sophia Chen</span>
                        <p>Founder & CEO</p>
                    </div>
                </div>
                <div className="team__item">
                    <div className="team__item-image">
                        <img src={DavidKang} />
                    </div>
                    <div className="team__item-description">
                        <span>David Kang</span>
                        <p>CFO & Internaional Relation Director</p>
                    </div>
                </div>
                <div className="team__item">
                    <div className="team__item-image">
                        <img src={MarcusJohnson} />
                    </div>
                    <div className="team__item-description">
                        <span>Marcus Johnson</span>
                        <p>Logistics Director</p>
                    </div>
                </div>
                <div className="team__item">
                    <div className="team__item-image">
                        <img src={JessicaAlvarez} />
                    </div>
                    <div className="team__item-description">
                        <span>Jessica Alvarez</span>
                        <p>Product Manager & Supply Chain Controller</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
);

export default AboutUs;