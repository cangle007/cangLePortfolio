import React from 'react';
import cang01 from '../../images/cang01.jpg';

export default function BannerComponent() {
  return (
    <div className='banner-container'>
      <div id='banner-img-item'>
        <img src={cang01} alt='cang-headshot' />
      </div>
      <div id='myTitle-item'>
        <h1>CANG LE</h1>
        <p>
          FRONT-END DEVELOPER | SAN JOSE, CA
          <br />
          MAKING THE WEB GREAT AGAIN, ONE PIXEL AT A TIME
        </p>
      </div>
    </div>
  );
}
