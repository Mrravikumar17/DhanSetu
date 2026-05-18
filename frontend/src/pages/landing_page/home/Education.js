import { ArrowRight } from 'lucide-react';
import React from 'react';

function Educations() {
    return (
        <div className='container my-5'>
            <div>
                <div className='row'>
                    <div className='col-6 mt-3'>
                        <img src='assets/education.svg' alt='education img' className='p-2'/>
                    </div>
                    <div className='col-6 mt-3'>
                        <h1>Free and open market education</h1>
                        <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                        <a className="text-decoration-none" href='#'>Varsity <ArrowRight/></a>

                        <p className='mt-5'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                        <a className="text-decoration-none" href='#'>TradingQ&A <ArrowRight/></a>
                          
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Educations;