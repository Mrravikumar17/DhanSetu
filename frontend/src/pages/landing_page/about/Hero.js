import React from 'react';

function Hero() {
    return (
        <div className='container my-5'>
            <div className='row text-center p-5 mb-5'>
                <h3 className='fs-2'>Built for the next generation of investors.<br />
                    Smart technology designed to make investing simple, secure, and seamless.</h3>
            </div>
            <div className='row text-start mt-5 p-5 ' style={{lineHeight:"1.8rem"}}>
                <div className='col-6'  style={{lineHeight:"1.8rem"}}>
                    <p>We started DhanSetu with a vision to simplify investing and remove the barriers that traders and investors face in terms of technology, accessibility, and user experience.
                    </p>
                    <p>
                        Today, DhanSetu is building a modern investment ecosystem that enables users to invest in stocks, mutual funds, ETFs, derivatives, bonds, and more — all from a single powerful platform.</p>
                    <p>
                        Thousands of investors and traders trust DhanSetu to manage their investment journey through our fast, secure, and technology-driven trading platform designed for the next generation of Indian investors.</p>
                </div>
                <div className='col-6'>
                    <p>In addition, DhanSetu focuses on spreading financial awareness through educational content, learning resources, and community-driven initiatives that help traders and investors make smarter financial decisions.
                    </p>
                    <p>
                        We are also committed to supporting innovation in the fintech ecosystem by building technology-first solutions that contribute to the growth of modern investing in India.</p>
                    <p>
                        And this is only the beginning. Every day, we continue to improve our platform, introduce new ideas, and create better experiences for investors across the country. Stay connected with us to explore the latest updates, product developments, and our vision for the future of investing.</p>
                </div>
            </div>

        </div>
    );
}

export default Hero;