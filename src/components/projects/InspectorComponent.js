import React from 'react';
import { Label } from 'semantic-ui-react';

import inspector_home from '../../images/inspector_home.png';
import inspector_main from '../../images/inspector_main.png';
import HeaderNavComponent from '../headers/HeaderNavComponent';

export default function InspectorComponent({ handle_routeMain }) {
  return (
    <div className='inspector-container'>
      <HeaderNavComponent id='headerNavComp' handle_routeMain={handle_routeMain} />

      <div id='inspector-header-item' />

      <div id='inspector-bio-item'>
        <article>
          <h1>INSPECTOR</h1>
          <p>real-time IoT connectivity and data analytics</p>
          <p>
            Inspector, a software that allows developers to view and interact with their IoT devices at a massive scale
            with an in-depth, real-time view of the state of all their connected IoT devices. Inspector is capable of
            handling data from the cloud transmitted by 500K+ devices, and enable Fortune 500 companies such as Home
            Depot & Kenmore to data mine for improving their product functionality.
          </p>
        </article>

        <Label as='a' tag>
          React-Redux
        </Label>
        <Label as='a' tag>
          CSS-Grid
        </Label>
        <Label as='a' tag>
          Sass/Scss
        </Label>
        <Label as='a' tag>
          UI/UX Design
        </Label>
        <Label as='a' tag>
          Front-End Development
        </Label>
      </div>

      <div id='inspector-details-container'>
        <p id='inspector-homeTxt-item'>
          This landing page offers basic details of IoT devices, such as connectivity status, icon, and device's name.
        </p>

        <span id='inspector-homeImg-item'>
          <img src={inspector_home} alt='inspector_home' />
        </span>

        <span id='inspector-mainImg-item'>
          <img src={inspector_main} alt='inspector_main' />
        </span>

        <p id='inspector-mainTxt-item'>
          This tool allows developers to view the state of their IoT devices when testing and debugging device behavior.
          The app displays data analytics of all IoT devices associated with a user's account in real-time.
        </p>
      </div>
    </div>
  );
}
