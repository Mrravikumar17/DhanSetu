import React from 'react';

function NotFound() {
    return (
        <>
            {/* --- Custom CSS for Animations (Aap ise separate .css file mein bhi rakh sakte hain) --- */}
            <style>
                {`
                    @keyframes float {
                        0% { transform: translateY(0px) rotate(0deg); }
                        50% { transform: translateY(-20px) rotate(3deg); }
                        100% { transform: translateY(0px) rotate(0deg); }
                    }

                    @keyframes fadeIn {
                        from { opacity: 0; transform: translateY(10px); }
                        to { opacity: 1; transform: translateY(0); }
                    }

                    @keyframes pulse {
                        0% { box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.4); }
                        70% { box-shadow: 0 0 0 15px rgba(13, 110, 253, 0); }
                        100% { box-shadow: 0 0 0 0 rgba(13, 110, 253, 0); }
                    }

                    .main-wrapper {
                        background-color: #f8f9fa; /* Light grey background */
                    }

                    /* 404 Text styling */
                    .err-digit {
                        font-size: 10rem;
                        font-weight: 900;
                        color: #0d6efd; /* Bootstrap Primary Blue */
                        display: inline-block;
                    }

                    /* Animated middle '0' or icon */
                    .anim-box {
                        font-size: 8rem;
                        display: inline-block;
                        animation: float 4s ease-in-out infinite;
                        color: #6c757d; /* Text Muted */
                        margin: 0 15px;
                        vertical-align: middle;
                    }

                    .fade-in-text {
                        animation: fadeIn 1s ease-out forwards;
                        opacity: 0; /* Starts hidden */
                    }

                    .anim-btn {
                        animation: pulse 2s infinite;
                        border-radius: 50px;
                        padding: 12px 30px;
                    }
                `}
            </style>

            {/* --- Page Layout (Bootstrap Classes) --- */}
            <div className="main-wrapper vh-100 d-flex justify-content-center align-items-center text-center">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            
                            {/* Animated Numbers Section */}
                            <div className="mb-4 d-flex justify-content-center align-items-center">
                                <span className="err-digit">4</span>
                                
                                {/* Center Animated Icon (Substitute for '0') */}
                                <div className="anim-box">
                                    {/* Aap yahan koi dynamic image ya icon daal sakte hain */}
                                    <i className="bi bi-exclamation-triangle-fill">0</i>
                                </div>
                                
                                <span className="err-digit">4</span>
                            </div>

                            {/* Text Messages with Fade-in effect */}
                            <h1 className="display-4 fw-bold text-dark fade-in-text" style={{animationDelay: '0.2s'}}>
                                Oops! Lost in Space?
                            </h1>
                            <p className="lead text-muted mb-5 fade-in-text" style={{animationDelay: '0.5s'}}>
                                The page you are looking for seems to have drifted away. Don't worry, we can guide you back to civilization.
                            </p>

                            {/* Pulsing Button */}
                            <div className="fade-in-text" style={{animationDelay: '0.8s'}}>
                                <a href="/" className="btn btn-primary btn-lg shadow anim-btn">
                                    <i className="bi bi-house-door-fill me-2"></i>
                                    Take Me Home
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default NotFound;