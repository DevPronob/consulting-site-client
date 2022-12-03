import React from 'react';
import About from './About';
import Banner from './Banner';
import Case from './Case';
import Choose from './Choose';
import Contact from './Contact';
import Feature from './Feature';
import Footer from './Footer';
import Goal from './Goal';
import Work from './Work';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <Feature></Feature>
            {/* <About></About> */}
            <Work></Work>
            <Goal></Goal>
            <Case></Case>
            <Choose></Choose>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;