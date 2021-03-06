import React from 'react';

import { Icon, Label } from 'semantic-ui-react';
import gmail_demo from '../../images/gmail_demo.gif';
import HeaderNavComponent from '../headers/HeaderNavComponent';

export default function GmailComponent({ handle_routeMain, handle_openProjectGithub }) {
  return (
    <div className='gmail-container'>
      <HeaderNavComponent id='headerNavComp' handle_routeMain={handle_routeMain} />
      <div id='gmail-bio-item'>
        <article>
          <h1>GMAIL CLONE</h1>
          <p>cloning Gmail's with React-Redux</p>
          <p>
            Developed email functionality by replicating the front-end of Gmail. Where users can compose, delete, and
            favorite their emails.
          </p>
        </article>
      </div>

      <div id='gmail-tech-item'>
        <span
          className='launch-website'
          onClick={() => {
            handle_openProjectGithub('react-inbox');
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
            Back-End Development
          </Label>
          <Label as='a' tag>
            React
          </Label>
          <Label as='a' tag>
            Materialize CSS
          </Label>
          <Label as='a' tag>
            Airtable
          </Label>
        </div>
      </div>

      <div id='gmail-details-item'>
        <section>
          <img src={gmail_demo} alt='gmail_demo' />
        </section>
      </div>
    </div>
  );
}
