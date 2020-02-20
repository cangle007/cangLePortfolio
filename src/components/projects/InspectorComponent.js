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
              Inspector is reliable and industry proven software that allows developers to view and interact with their
              IoT devices at a massive scale with an in depth, real-time view of the state of all their connected IoT
              devices. My software is currently connecting 500K+ IoT devices to the cloud from Fortune 500 companies
              such as Home Depot & Kenmore enabling data mining for improving product functionality.
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
          <p id='homeTxt-item'>
            This landing page offers basic details of IoT devices, such as connectivity status, icon, and device's name.
          </p>
          <span id='homeImg-item'>
            <img src={inspector_home} alt='inspector_home' />
          </span>

          <span id='mainImg-item'>
            <img src={inspector_main} alt='inspector_main' />
          </span>
          <p id='mainTxt-item'>
            This tool allows developers to view the state of their IoT devices when testing and debugging device
            behavior. The app displays data analytics of all IoT devices associated with a user's account in real-time.
          </p>
        </div>
        <SidebarComponent id='sidebarComp' handle_routeMain={this.handle_routeMain} />
      </div>
    );
  }
}
