import React from 'react';
import ContactMe from '../contactMe/index';
import './styles.css';
// import { css } from '@emotion/css';

const HomePage = () => {
    return (
        <section>
            <div className="header">
                <img style={{ height: 400 }} alt="timer" src={require('./self.jpg')} />
                <div className="info">
                    <h1>Paula Martinez Garcia</h1>
                    <p className="bio">UI Developer. University of Chicago Alum. Cat Mom.</p>
                    <ContactMe />
                </div>
            </div>
        </section>
    );
};

export default HomePage;