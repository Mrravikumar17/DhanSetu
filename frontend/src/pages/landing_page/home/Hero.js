import React from 'react';

function Hero() {
    return (
        <div className='container mb-5'>
            <div className='row text-center'>
                <img src='assets/heroImgnew.png' alt='hero img' className='mb-5' />
                <h1 className='mt-5'> Build Wealth with DhanSetu</h1>
                <p>A simple and powerful platform to invest in stocks, mutual funds, derivatives, ETFs, bonds, and more.</p>
                <button className='btn btn-primary p-2 fs-5 ' style={{ width: "20%", margin: " 0 auto" }}>Start investing for free</button>
            </div>
        </div>
    );
}

export default Hero;