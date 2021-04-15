import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import facebook from '../../../images/facebook.png';
import twitter from '../../../images/twitter.png';
import google from '../../../images/google-plus.png';
import linkedIn from '../../../images/linkedin.png';

const Teacher = (props) => {
    const { author, title, authorImg, description } = props.teacher;
    return (
        <div className="card shadow-sm col-md-4">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={authorImg} alt="" width="150" height="100" />
                <div>
                    <h6 style={{ color: '#2b3c6b' }}>{author}</h6>
                    <p> <FontAwesomeIcon style={{color: '#ff7162'}} icon={faPhoneAlt} /> +880-188-934789</p>
                </div>
            </div>
            <div className="card-body">
                <p>{title}</p>
                <h5 className="card-text text-secondary mt-4">{description}</h5>
                <div className="social-icon d-flex justify-content-around mt-4">
                   <img style={{width: '50px'}} src={facebook} alt=""/>
                   <img style={{width: '50px'}} src={twitter} alt=""/>
                   <img style={{width: '50px'}} src={google} alt=""/>
                   <img style={{width: '50px'}} src={linkedIn} alt=""/>
                </div>
            </div>
        </div>
    );
};

export default Teacher;