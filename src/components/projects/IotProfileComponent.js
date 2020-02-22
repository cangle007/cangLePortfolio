import React from 'react';
import { Label } from 'semantic-ui-react';

import iotprofile_cells from '../../images/iotprofile_cells.png';
import iotdemo from '../../images/iotdemo.gif';
import HeaderNavComponent from '../headers/HeaderNavComponent';

export default function IotProfileComponent({ handle_routeMain }) {
  return (
    <div className='iot-container'>
      <HeaderNavComponent id='headerNavComp' handle_routeMain={handle_routeMain} />

      <div id='iot-bio-item'>
        <article>
          <h1>IOT PROFILE</h1>
          <p>mock-up for mobile app.</p>
          <p>
            A mock-up version of Afero Mobile SDKS, it outlines how a user creates an account, manages and interacts
            with their devices, and how they connect to Afero's softhub and Wi-Fi
          </p>
        </article>

        <Label as='a' tag>
          CSS-Grid
        </Label>
        <Label as='a' tag>
          Sass/Scss
        </Label>
        <Label as='a' tag>
          UI/UX Design
        </Label>
      </div>

      <div id='iot-details-container'>
        <section id='iot-demo-item'>
          <img src={iotdemo} alt='iotdemo' />
        </section>

        <section id='iot-static-item'>
          <img src={iotprofile_cells} alt='iotprofile_cells' />
        </section>
      </div>
    </div>
  );
}
