import React, { memo } from 'react';
import Header from '../../components/Header/component'
import Footer from '../../components/Footer/component'

const Home = () => {
    return (
        <>
            <div className="Home">
                <Header />
                <h1>Welcome Page</h1>
                <Footer />
            </div>
        </>
    )
};

export default memo(Home);
