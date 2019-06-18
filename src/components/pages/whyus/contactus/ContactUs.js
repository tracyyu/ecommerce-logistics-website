import React from 'react';
import ContactForm from '../../../ui/contactForm/ContactForm';

const ContactUs = props => (
    <div className="contact-page-content">
        <section className="contact-page-content__hero-banner">
            <div className="contact-page-content__hero-banner-overlay">
                <div className="hero-banner__title">
                    <h1>Find Us</h1>
                    <p>
                        Any questions or concerns? We are always happy to help when finding the perfect items for you,
                        or needing a space to store your inventory for your shop. Don't hesitate to ask us!
                    </p>
                </div>
            </div>
        </section>
        <section className="contact-page-content__description">
            <h1>How Can We Help?</h1>
            <div className="contact-us">
                <div className="contact-us__description">
                    <p>
                        Our team are handpicked for their understanding of materials, process and passion for craft. 
                        Whether you are browsing our site or visiting our store, we are always willing to share our deep 
                        knowledge and understanding of logistics and accessories. 
                    </p>
                    <p>
                        If you have any specific questions please do not hesitate to contact us by 
                        completing this form or calling our customer services team on 909 627-1580.
                    </p>
                </div>
            </div>
        </section>
        <section className="contact-page-content__contact-info">
            <div className="contact-info__form">
                <ContactForm />
            </div>
            <div className="contact-info__contact">
                <div className="contact-container">
                    <div>
                        <p><strong>WareHouse/ Office Adress:</strong></p>
                        <p>
                            13771 Norton Avenue
                            <br/>
                            Chino, Ca 91710
                        </p>
                    </div>
                    <hr />
                    <div>
                        <p><strong>Opening Hours:</strong></p>
                        <p>
                            8:00 AM - 6:00 PM
                        </p>
                    </div>
                    <hr />
                    <div>
                        <p><strong>Telephone:</strong></p>
                        <p>Office: 909-627-1580</p>
                        <p>Fax: 909-590-4136</p>
                    </div>
                    <hr />
                    <div>
                        <p><strong>Email:</strong></p>
                        <p>roseedition@pacbell.net</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="contact-page-content__google-maps">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3307.5977863079947!2d-117.71258478509024!3d34.00286352777869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c332c8f2bf65e7%3A0x4826275e98cd78b0!2s13771+Norton+Ave%2C+Chino%2C+CA+91710!5e0!3m2!1sen!2sus!4v1542239668266" 
            width="65%" height="450" frameborder="0" allowfullscreen title="Location"></iframe>
        </section>
    </div>
);

export default ContactUs;