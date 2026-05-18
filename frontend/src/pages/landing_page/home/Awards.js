import React from 'react';

function Awards() {
    return (
        <div className='container mt-5'>
            <div className='row '>
                <div className='col-6 p-5' >
                    <img src='assets/largestBroker.svg' alt="award logo" />
                </div>
                <div className='col-6 p-5 mt-3'>
                    <h1>Largest stock broker in India</h1>
                    <p>2+ million Zerodha clients contribute to over 15% of all retail order
                        volumes in India daily by trading and investing in:</p>
                    <div className='row'>
                        <div className='col-6 mt-4'>
                            <ul>
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li> Currency derivatives</li>
                            </ul>
                        </div>
                        <div className='col-6 mt-4'>
                            <ul>
                                <li>Stock & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securitiess</li>
                            </ul>
                        </div>
                    </div>
                    <img src='assets\pressLogos.png' style={{width:"80%"}} alt='pressLogos'/>
                </div>

            </div>
        </div>
    );
}

export default Awards;