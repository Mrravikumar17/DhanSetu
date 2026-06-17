import { ArrowRight } from 'lucide-react';
import React from 'react';

function RightSection({ productTitle, productDescription, hlink, hlinkname, imageURL }) {
    return (
        <div className='container my-5'>
            {/* gy-4 adds vertical spacing when columns stack on mobile; align-items-center vertically centers the text with the image on desktop */}
            <div className='row gy-4 align-items-center'>
                
                {/* Takes up 100% width on mobile, 50% width on medium screens and up */}
                <div className='col-12 col-md-6'>
                    <h1 className='display-5 fw-semibold'>{productTitle}</h1>
                    <p className='lead text-muted'>{productDescription}</p>
                    <div>
                        <a href={hlink} className='d-inline-flex align-items-center text-decoration-none fw-semibold'>
                            {hlinkname} <ArrowRight className='ms-2' size={16}/>
                        </a>
                    </div>
                </div>
                
                {/* Takes up 100% width on mobile, 50% width on medium screens and up */}
                <div className='col-12 col-md-6'>
                   {/* img-fluid keeps the image from breaking out of its container layout */}
                   <img src={imageURL} alt={productTitle} className='img-fluid w-100 rounded' />
                </div>

            </div>
        </div>
    );
}

export default RightSection;