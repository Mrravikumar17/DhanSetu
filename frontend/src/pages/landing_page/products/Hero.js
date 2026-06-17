import React from 'react';
import {ArrowRight} from 'lucide-react';
function Hero() {
    return (
        <div className='container mt-5'>
            <div className='row text-center '>
              <h1>DhanSetu Products</h1>
              <p className='text-muted fs-4 mt-2'>Modern, secure, and easy-to-use investment platforms</p>
              <p className='text-muted'>Explore our <a href='#' className='text-decoration-none  '>financial solutions <ArrowRight size={16}/></a></p>
            </div>

        </div>
    );
}

export default Hero;