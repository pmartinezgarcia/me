import React from 'react';
import './styles.css';

const ContactMe = () => {
    return (
        <>
        <h3>Contact Me!</h3>
        <div className="flex-box">
        <div className="email">Email</div>
        <div className="cell-phone">Cell Phone</div>
        <a className="linked-in" href="https://www.linkedin.com/in/paulamg7/">LinkedIn</a>
        </div>
        </>
    );
};

export default ContactMe;