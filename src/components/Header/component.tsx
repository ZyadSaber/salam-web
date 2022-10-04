import React, { memo } from 'react';
import './style.css';

const Header = () => {
    return (
        <div className="container">
            {/* <div className="img"></div> */}
            <div className="title">
                <h3>El Salam for Advertising</h3>
                <p>look at the world with different eyes</p>
            </div>
        </div>
    )
};

export default memo(Header);
