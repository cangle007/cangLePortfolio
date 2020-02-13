import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function SidebarComponent({ handle_routeMain }) {
  return (
    <div className='sidebar-container'>
      <div />
      <a href='#bannerComp' id='sidebar-about-item' onClick={handle_routeMain}>
        <p>ABOUT</p>
        <Icon name='info' />
        <p>WHO I AM</p>
      </a>

      <a href='#portfolioComp' id='sidebar-work-item' onClick={handle_routeMain}>
        <p>WORK</p>
        <Icon name='computer' />
        <p>VIEW CASE STUDIES</p>
      </a>

      <a href='#inputField-item' id='sidebar-contact-item' onClick={handle_routeMain}>
        <p>CONTACT</p>
        <Icon name='phone' />
        <p>LET'S GET IN TOUCH</p>
      </a>
      <div />
    </div>
  );
}
