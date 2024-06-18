import React from 'react';
import './Trusted.css';

const Trusted = () => {
  return (
    <div className='TrustedContainer'>
      <h3>Trusted By 1000+ Companies</h3>
      <div className="TrustesCompanyLogos">
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image2.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image3.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image4.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image6.png"
            alt="trusted-brands"
          />
        </div>
        <div className="slide">
          <img
            src="https://raw.githubusercontent.com/solodev/infinite-logo-carousel/master/images/image8.png"
            alt="trusted-brands"
          />
        </div>
      </div>
    </div>
  );
}

export default Trusted;
