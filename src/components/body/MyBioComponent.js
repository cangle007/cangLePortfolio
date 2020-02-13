import React from 'react';
import { Icon } from 'semantic-ui-react';
import resume from '../../images/cl_resume.pdf';

export default function MyBioComponent({ handle_openTabGithub, handle_openTabLinkedin }) {
  return (
    <div className='myBio-container'>
      <section id='myBio-item'>
        <p>
          Graduated from San Jose State University with a Finance/Economics degree and spent 5 years in Corporate
          Finance but decided to make a career switch to become a Frontend developer.
        </p>
        <p>
          I'm looking to grow personally and professionally anywhere in the world. I want to be involved in projects
          that I can be proud of, join an amazing team and advance my development career. Take some time to look at my
          work, credentials and if you're interested in helping me make this happen, let's get in touch.
        </p>
      </section>

      <div id='resume-item'>
        <a href={resume} download>
          <Icon name='file outline' />
          <p>RESUME</p>
        </a>
      </div>

      <div id='github-item' onClick={handle_openTabGithub}>
        <Icon name='github' />
        <p>GITHUB</p>
      </div>

      <div id='linkedin-item' onClick={handle_openTabLinkedin}>
        <Icon name='linkedin' />
        <p>LINKEDIN</p>
      </div>

      <div id='expertise-item' className='expertise-container'>
        <h3 id='expertHeader-item'>
          <span>TECHNICAL EXPERTISE</span>
        </h3>
        <ul id='frontend-item'>
          <Icon name='desktop' size='large' />
          <h3>Front-End</h3>
          <li>React-Redux</li>
          <li>HTML/CSS</li>
          <li>Scss/Sass</li>
        </ul>
        <ul id='backend-item'>
          <Icon name='cogs' size='large' />
          <h3>Back-End</h3>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Knex.js</li>
          <li>PostgreSQL</li>
          <li>Python</li>
        </ul>
        <ul id='others-item'>
          <Icon name='puzzle' size='large' />
          <h3>Others</h3>
          <li>MySQL</li>
          <li>Linux</li>
          <li>Chai</li>
          <li>Socket.io</li>
          <li>AWS(RDS & EB)</li>
        </ul>
      </div>
    </div>
  );
}
