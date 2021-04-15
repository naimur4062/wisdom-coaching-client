import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        {name: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia dese runt mollit anim id est laborum. Sed ut perspiciatis unde omnis."},
        {name: "iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."},
    ]
    const ourAddress = [
        {name: "1201 park street, Fifth Avenue, Dhanmondy, Dhaka"},
        {name: "Yards"},
       
    ]
    const usefulLink = [
        {name: " Useful Link"},
        {name: "FAQ"},
        {name: "faq"},
        {name: "Our Gallery"},
        {name: "Our Teachers"},
    ]
    const services = [
        {name: "Medical Admission"},
        {name: "Engineering Admission"},
        {name: "University Admission"},
        {name: "BCS and BANK Jobs preparation"},
        {name: "IELTS Preparation"},
        {name: "Spoken English"},
    ]
    return (
        <footer  style={{backgroundColor: '#4054b2', color: ''}} className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"About Wisdom"} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Useful Link" menuItems={usefulLink}/>
                    <FooterCol key={4} menuTitle="Get In Touch" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 style={{color: 'white'}}>Call now</h6>
                            <button style={{ backgroundColor: '#ff4880', padding: '10px', color: 'white', fontWeight: '500' }} className="btn">+2025550295</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center pb-5">
                    <p style={{color: 'white'}}>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;