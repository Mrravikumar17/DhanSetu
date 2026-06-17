import React from 'react';

function Team() {
    return (
        <div className='container mt-lg-5'>
            <div className='row'>
                <h1 className='text-center'>People</h1>

                <div className='col-6  p-5 text-center'>

                    <img src='assets/profile-removebg-preview.png'  alt='eco' style={{ width: "50%", borderRadius: '100%'  }} />
                    <h1 className='mt-2'>Mr. Ravi Kumar</h1>
                    <p className='text-muted'>Founder, CEO</p>
                </div>
                <div className='col-6 mt-5'>

                    <p>
                        <a className='text-decoration-none'
                            href='https://ravikumar18.netlify.app/' target="_blank"
                            rel="noopener noreferrer"> Mr. Ravi Kumar</a> founded DhanSetu with the vision of simplifying investing and making financial markets more accessible for everyone. Passionate about technology and innovation, he started DhanSetu to create a modern investment platform focused on simplicity, transparency, and user experience.</p>
                    <p>
                        Under his leadership, DhanSetu is growing into a technology-driven platform that helps investors and traders invest in stocks, mutual funds, ETFs, derivatives, and more through a secure and seamless ecosystem.
                        <p />
                        <p>
                            His goal is to empower the next generation of Indian investors by combining powerful technology with financial awareness and education.
                        </p>

                        Beyond building products, Mr. Ravi Kumar believes in creating solutions that make investing smarter, easier, and accessible to everyone.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Team;