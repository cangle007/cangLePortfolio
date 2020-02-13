import React, { Component } from 'react';

import { Label } from 'semantic-ui-react';
import SidebarComponent from '../sidebars/SidebarComponent';
import iotprofile_cells from '../../images/iotprofile_cells.png';
import iotdemo from '../../images/iotdemo.gif';

export default class IotProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handle_routeMain = () => {
    this.props.history.push(`/`);
  };

  render() {
    return (
      <div className='iot-container'>
        <div id='iot-bio-item'>
          <article>
            <h1>IOT PROFILE</h1>
            <p>mock-up for mobile app.</p>
            <p>
              This was a mock-up version of Afero Mobile SDKS, it outlines how a user creates an account, manages and
              interacts with their devices, and how they connect to Afero's softhub and Wi-Fi
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

        <div id='iot-details-item'>
          <section>
            <img src={iotprofile_cells} alt='iotprofile_cells' />
          </section>

          <section>
            <img src={iotdemo} alt='iotdemo' />
          </section>
        </div>

        <SidebarComponent id='sidebarComp' handle_routeMain={this.handle_routeMain} />
      </div>
    );
  }
}
