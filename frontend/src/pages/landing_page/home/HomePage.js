import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import States from './States';
import Pricing from './Pricing';
import Educations from './Education';

import OpenAccount from '../OpenAccount'
import Navbar  from '../Navbar';
import Footer from '../Footer';
function HomePage() {
    return (
        <div>
            <Hero/>
            <Awards/>
            <States/>
            <Pricing/>
            <Educations/>
            <OpenAccount/>
        </div>
    );
}

export default HomePage;