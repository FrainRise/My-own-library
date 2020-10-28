import React from 'react'
import './ContactUs.scss'

const ContactUs = () => {
    return ( 
        <div className="contact-section">
            <div className="contact-descr-container">
                <h2 className="contact-title">Contact us</h2>
                <p className="contact-descr">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. 
                </p>
            </div>
            <div className="contact-form-container">
                <form className="contact-form">
                    <div className="form-row">
                        <div className="custom-input-block">
                            <label htmlFor="userEmail">Email</label>
                            <input className="user-data-input" type="text" id="userEmail" name="userEmail"/>
                        </div>
                        <div className="custom-input-block">
                            <label htmlFor="userName">Name</label>
                            <input className="user-data-input" type="text" id="userName" name="userName"/>
                        </div>
                    </div>
                    <div className="form-row row-topic">
                        <label htmlFor="topic">Topic</label>
                        <input type="text" id="topic" name="topic"/>
                    </div>
                    <div className="form-row row-message">
                        <label htmlFor="message">Message</label>
                        <textarea type="text" id="message" name="message" cols="100" rows="50"></textarea>
                    </div>
                    <div className="form-row">
                        <button className="btn__submit" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default ContactUs;