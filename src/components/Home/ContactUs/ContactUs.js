import React from 'react';
import './ContactUs.css'; 

const ContactUs = () => {
    return (
        <section className="contact my-5 py-5 container">
        <div className="container">
            <div className="section-header text-center text-white mb-5">
                 <h5 style={{color: '#ff4880'}}>Get in Touch</h5>
                 <h1 style={{fontWeight: '500', fontSize: '50px', color: '#adb5bd'}}>Contact Us</h1>
            </div>
            <div className="col-md-9 mx-auto">
                <form action="">
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Email Address *"/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Subject *"/>
                    </div>
                    <div className="form-group">
                        <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                    </div>
                    <div className="form-group text-center">
                        <button type="button" className="send-btn">Send Message </button>
                    </div>
                </form>
            </div>
        </div>
    </section>
    );
};

export default ContactUs;