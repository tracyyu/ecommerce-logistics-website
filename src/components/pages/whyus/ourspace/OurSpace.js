import React from 'react';

const OurSpace = props => (
    <div className="ourspace-page-content">
        <section className="ourspace-page-content__hero-banner">
            <div className="ourspace-page-content__hero-banner-overlay">
                <div className="hero-banner__title">
                    <h1>Our Space</h1>
                </div>
            </div>
        </section>
        <section className="ourspace-page-content__description">
            <h1>The Warehouse</h1>
            <div className="our-space">
                <div className="our-space__description">
                    <p>
                        Our 30,000 square feet warehouse with 5 loading docks is accessible
                        to our clients on the weekdays with constant 24 hours surveillance by 
                        our top-notched security systems. We’ve staffed our giant warehouse with 
                        trained personnel who know how to accommodate your custom, standard, small and 
                        large-volume storage needs.  Our facility is perfect for long-term storage, distribution, 
                        or to use as your integrated warehousing solution. 
                    </p>
                    <div>
                        <p><strong>Opening Times:</strong></p>
                        <p>Monday - Friday</p>
                        <p>8:00 AM - 6:00 PM</p>
                    </div> 
                </div>
                
            </div>
        </section>
        <section className="ourspace-page-content__google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5977863079947!2d-117.71258478509024!3d34.00286352777869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c332c8f2bf65e7%3A0x4826275e98cd78b0!2s13771+Norton+Ave%2C+Chino%2C+CA+91710!5e0!3m2!1sen!2sus!4v1542239668266" 
            width="65%" height="450" frameborder="0" allowfullscreen title="Location"></iframe>
        </section>
        <section className="ourspace-page-content__warehouse-info">
            <div className="ourspace-info__img-container">
                <div className="ourspace-info__img">
                    <h1>Storage</h1>
                </div>
            </div>
            <div className="ourspace-info__description">
                <div className="ourspace-container">
                    <p>If you are looking for reliable warehousing in the Los Angeles area, we can handle just about any 
                        product you may have.  Here is a small sampling of the kinds of products we have stored and handled 
                        at our warehouse:
                    </p>
                    <ul>
                        <li>General merchandise</li>
                        <li>Consumer products</li>
                        <li>Textiles</li>
                        <li>Electronics</li>
                        <li>Industrial products</li>
                        <li>Apparel / accessory flat pack</li>
                        <li>Toys</li>
                        <li>Document storage</li>
                        <li>Gift ware</li>
                        <li>Building Materials</li>
                        <li>Health and Beauty Aids (HABA)</li>
                        <li>Much more...</li>
                    </ul>
                </div>
            </div>
        </section>
    </div>
);

export default OurSpace;