import React, { Component } from 'react';

import { Label } from 'semantic-ui-react';
import SidebarComponent from '../sidebars/SidebarComponent';

import historyDev_google from '../../images/historyDev_google.png';
import historyDev_bar from '../../images/historyDev_bar.png';
import historyDev_query from '../../images/historyDev_query.png';

export default class DeviceHistoryComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handle_routeMain = () => {
    this.props.history.push(`/`);
  };

  render() {
    return (
      <div className='devHistory-container'>
        <div id='devHistory-bio-item'>
          <article>
            <h1>AFERO DEVICE HISTORY</h1>
            <p>query historical device data</p>
            <p>
              The process of querying historical data can be time consuming and mundane if you don't have the right
              tool, a common problem holding back most QA teams from optimizing their productivity.
              <br />
              <br />
              This internal application was developed to facilitate the QA team's daily task of querying historical
              data, increasing productivity by 70%. The software provides a clean and easy to use interface to query and
              filter device historical data for the entire life of the device.
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

        <div id='devHistory-details-item'>
          <section>
            <img src={historyDev_query} alt='historyDev_query' />
          </section>

          <section>
            <img src={historyDev_bar} alt='historyDev_bar' />
          </section>

          <section>
            <img src={historyDev_google} alt='historyDev_google' />
          </section>
        </div>

        <SidebarComponent id='sidebarComp' handle_routeMain={this.handle_routeMain} />
      </div>
    );
  }
}
