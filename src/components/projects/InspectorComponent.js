import React, { Component } from 'react';

import { Label } from 'semantic-ui-react';
import SidebarComponent from '../sidebars/SidebarComponent';
import inspector_home from '../../images/inspector_home.png';
import inspector_main from '../../images/inspector_main.png';

export default class InspectorComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handle_routeMain = () => {
    this.props.history.push(`/`);
  };

  render() {
    return (
      <div className='inspector-container'>
        <div id='inspector-header-item'></div>
        <div id='inspector-bio-item'>
          <article>
            <h1>INSPECTOR</h1>
            <p>real-time IoT connectivity and data analytics</p>
            <p>
              Afero builds integrated hardware, software, and cloud services for IoT connectivity and data analytics.
              Their platform incorporates a secure radio, bluetooth, wi-fi connectivity, scalable cloud services, and a
              range of development tools that enable companies and developers to quickly prototype and build connected
              devices.
              <br />
              <br />
              Inspector is reliable and industry proven, as it allows developers to view and interact with their IoT
              devices at a massive scale, real-time, and in-dept view of the state of their IoT devices data. Currently
              Home Depot & Kenmore have 500K+ IoT devices connected to Afero's cloud and using Inspector for data,
              testing and debugging.
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

        <div id='inspector-details-item'>
          <section>
            <p>
              After you sign in, the Inspector Home window appears. This landing page offers basic details of IoT
              devices, such as connectivity status, icon, and devce's name.
            </p>
            <img src={inspector_home} alt='inspector_home' />
          </section>

          <section>
            <img src={inspector_main} alt='inspector_main' />
            <p>
              This tool is useful for developers to interact and view state of their IoT devices when testing and
              debugging device behavior. The app does this by displaying connectivity and data analytics of all the IoT
              devices associated with the user's account at real-time.
            </p>
          </section>
        </div>
        <SidebarComponent id='sidebarComp' handle_routeMain={this.handle_routeMain} />
      </div>
    );
  }
}
