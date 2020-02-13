import React, { Component } from 'react';

import { Label } from 'semantic-ui-react';
import SidebarComponent from '../sidebars/SidebarComponent';
import responsive_screen from '../../images/responsive_screen.png';
import responsive from '../../images/responsive.gif';

export default class ResponsiveComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handle_routeMain = () => {
    this.props.history.push(`/`);
  };

  render() {
    return (
      <div className='responsive-container'>
        <div id='responsive-header-item'></div>
        <div id='responsive-bio-item'>
          <article>
            <h1>RESPONSIVE WEB</h1>
            <p>website displaying css-grid system</p>
            <p>
              This is a responsive website constructed using Css-Grid, compatible with desktops, tablets, and mobile
              phones.
              <br />
              <br />I developed this project to learn the new Css-Grid layout system that is capable of 2-dimensional
              system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional
              system. I applied this new technogy to my profession designs app. because it compatible to React's
              philosophy of component driven development.
            </p>
          </article>

          <Label as='a' tag>
            Front-End Development
          </Label>
          <Label as='a' tag>
            CSS-Grid
          </Label>
        </div>

        <div id='responsive-details-item'>
          <section>
            <img src={responsive} alt='responsive' />
          </section>

          <section>
            <p>Demo to show how the web's grid responds to changes of the width of the screen.</p>
          </section>

          <section>
            <img src={responsive_screen} alt='responsive_screen' />
          </section>
        </div>

        <SidebarComponent id='sidebarComp' handle_routeMain={this.handle_routeMain} />
      </div>
    );
  }
}
