import React from 'react';
import { ArrowRight } from 'lucide-react';
function States() {
    return (
        <div className='container p-4'>
            <div className='row p-5'>
                <div className='col-6 p-6'>
                    <h2 className='mb-5 fs-2 '>Trust with confidence</h2>
                    <h4 className='fs-4'>Built for every Indian investor</h4>
                    <p className='mb-4 text-muted'>From stocks and mutual funds to long-term wealth building, DhanSetu makes investing simple, fast, and accessible for everyone.</p>

                    <h4 >Simple. Secure. Transparent</h4>
                    <p className='mb-4 text-muted'>No confusing features, no unnecessary distractions. Just a clean and powerful platform designed to help you invest with confidence.</p>

                    <h4 >More than just a trading app</h4>
                    <p className='mb-4 text-muted'>DhanSetu connects smart investing tools, market insights, and financial learning into one seamless ecosystem.</p>

                    <h4 >Helping you grow financially</h4>
                    <p className='mb-4 text-muted'>We don’t just enable investing — we help you make smarter financial decisions with powerful analytics, risk management, and educational support.</p>
                    <h4 >Fast, modern, reliable</h4>
                    <p className='mb-4 text-muted'>Experience lightning-fast order execution, real-time market tracking, and a beautifully designed platform built for the next generation of investors.</p>
                    <h4 >Beginner friendly, pro powerful</h4>
                    <p className='mb-4 text-muted'>Whether you are starting your first SIP or actively trading every day, DhanSetu gives you the tools you need at every stage.</p>
                </div>
                <div className='col-6 p-5'>
                    <img className='p-5 ml-4' src='assets\ecosystem.png' alt='ecosystem' style={{width:"95%"}} />
                    <div className='text-center '>
                       <a href='#' className='mx-5 text-decoration-none'>Explore our products <ArrowRight size={20}/> </a> 
                       <a href='#' className='mx-5 text-decoration-none'>Try Kite demo <ArrowRight size={20}/></a> 
                    </div>
                </div>
            </div>

        </div>
    );
}

export default States;