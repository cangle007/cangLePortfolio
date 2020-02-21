import React from 'react';
import { Icon } from 'semantic-ui-react';

export default function HeaderNavComponent({ handle_routeMain }) {
  return (
    <div className='headerNav-container'>
      <div />
      <a href='#bannerComp' onClick={handle_routeMain}>
        <p>ABOUT</p>
        <Icon name='info' />
      </a>
      <a href='#portfolioComp' onClick={handle_routeMain}>
        <p>WORK</p>
        <Icon name='computer' />
      </a>
      <a href='#inquiryComp' onClick={handle_routeMain}>
        <p>CONTACT</p>
        <Icon name='phone' />
      </a>
    </div>
  );
}
