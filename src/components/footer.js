import React from 'react';

const Footer = (props) => (
    <div className="footer">
        <div className="container">
            <h3 className="footer__title">{props.title}</h3>  
        </div>
    </div>
)

//Default props for header
Footer.defaultProps = {
    title: 'Footer',
};

export default Footer;