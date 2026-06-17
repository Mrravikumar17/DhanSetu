import React from "react";
import { ArrowRight } from "lucide-react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      {/* align-items-center keeps the text and image vertically aligned on large screens */}
      <div className="row gy-4 align-items-center">
        
        {/* col-12 means full width on mobile, col-md-6 means half width from tablet/desktop upwards */}
        <div className="col-12 col-md-6">
          {/* img-fluid ensures the image never overflows its container */}
          <img src={imageURL} alt={productName} className="img-fluid w-70 rounded" />
        </div>
        
        <div className="col-12 col-md-6">
          <h1 className="display-5 fw-semibold">{productName}</h1>
          <p className="lead text-muted">{productDescription}</p>
          
          {/* Flex utilities make the links look neat and wrap nicely on small screens */}
          <div className="d-flex flex-wrap gap-4 my-4">
            <a href={tryDemo} className="d-inline-flex align-items-center text-decoration-none fw-semibold">
              Try demo <ArrowRight className="ms-2" size={18} />
            </a>
            <a href={learnMore} className="d-inline-flex align-items-center text-decoration-none fw-semibold">
              Learn more <ArrowRight className="ms-2" size={18} />
            </a>
          </div>
          
          {/* App store badges container */}
          <div className="d-flex flex-wrap gap-3 mt-4">
            <a
              href={googlePlay}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/googlePlayBadge.svg" alt="Get it on Google Play" style={{ height: "40px" }} />
            </a>
            <a 
              href={appStore}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="assets/appstoreBadge.svg" alt="Download on the App Store" style={{ height: "40px" }} />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;