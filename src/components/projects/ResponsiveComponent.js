import React from 'react';
import { Label, Icon } from 'semantic-ui-react';

import responsive_screen from '../../images/responsive_screen.png';
import responsive from '../../images/responsive.gif';
import HeaderNavComponent from '../headers/HeaderNavComponent';

export default function ResponsiveComponent({ handle_routeMain, handle_openProjectGithub }) {
  return (
    <div className='responsive-container'>
      <HeaderNavComponent id='headerNavComp' handle_routeMain={handle_routeMain} />
      <div id='responsive-header-item'></div>
      <div id='responsive-bio-item'>
        <article>
          <h1>RESPONSIVE WEB</h1>
          <p>responsive with css-grid system</p>
          <p>
            This is a responsive website constructed using CSS-Grid, compatible with desktops, tablets, and mobile
            phones.
            <br />
            <br />I developed this project to learn the new Css-Grid layout system that is capable of 2-dimensional
            system, meaning it can handle both columns and rows, unlike flexbox which is largely a 1-dimensional system.
            I applied this new technogy to my profession designs app. because it compatible to React's philosophy of
            component driven development.
          </p>
        </article>
      </div>

      <div id='responsive-tech-item'>
        <span
          className='launch-website'
          onClick={() => {
            handle_openProjectGithub('cssGrids-responsive-website');
          }}
        >
          LAUNCH GITHUB
          <Icon name='external alternate' />
        </span>

        <div>
          <Label as='a' tag>
            Front-End Development
          </Label>
          <Label as='a' tag>
            CSS-Grid
          </Label>
        </div>
      </div>

      <div id='responsive-details-container'>
        <section id='reponsive-txt-item'>
          <img src={responsive} alt='responsive' />
          <p>Demo to show how the web's grid responds to changes of the width of the screen.</p>
        </section>

        <section id='reponsive-img-item'>
          <img src={responsive_screen} alt='responsive_screen' />
        </section>
      </div>
    </div>
  );
}
