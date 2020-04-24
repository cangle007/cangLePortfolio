import React from 'react';
import { Icon } from 'semantic-ui-react';
import resume from '../../images/cl_resume.pdf';

export default function MyBioComponent({ handle_openTabGithub, handle_openTabLinkedin }) {
  return (
    <div className='myBio-container'>
      <section id='myBio-item'>
        <p>
          Graduated from San Jose State University with a Finance/Economics degree and
          spent 5 years in Corporate Finance but decided to make a career switch to become
          a Frontend developer.
        </p>
        <p>2 years of hands-on software engineering experience, specializing in:</p>
        <ul>
          <li>
            Frontend development (UI) with Javascript, React-Redux, and React-Apollo
          </li>
          <li>UX/UI design with CSS/HTML, SASS/SCSS, and CSS-Grid</li>
          <li>Backend development (APIs) with Nodes.js and PostgreSQL</li>
          <li>Object-oriented programming and design patterns</li>
          <li>Data modeling, persistence, and relational databases</li>
        </ul>
        <p>
          2 years of leading and developing product design (UI/UX), managing the product
          development lifecycle and roadmap, and as well as release management and
          production support.
        </p>

        <p>
          2 years of spearheading medium-scale projects from scratch at an early-stage
          tech startup environment.
        </p>

        <p>
          When I am not coding I train at the gym to shape up for the Ironman Triathlon,
          and occasionally skydive. I believe in having an efficient workflow and
          constantly work toward the inbox zero.
        </p>
        <p>Let's get in touch!</p>
      </section>

      <div id='resume-item'>
        <a href={resume} download>
          <Icon name='file outline' />
          <p>RESUME</p>
        </a>
      </div>

      <div id='github-item' onClick={handle_openTabGithub}>
        <span href='#'>
          <Icon name='github' />
          <p>GITHUB</p>
        </span>
      </div>

      <div id='linkedin-item' onClick={handle_openTabLinkedin}>
        <span>
          <Icon name='linkedin' />
          <p>LINKEDIN</p>
        </span>
      </div>

      <div id='expertise-item' className='expertise-container'>
        <h3 id='expertHeader-item'>
          <span>TECHNICAL EXPERTISE</span>
        </h3>
        <ul id='frontend-item'>
          <Icon name='desktop' size='large' />
          <h3>Front-End</h3>
          <li>React-Redux</li>
          <li>React-Apollo</li>
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
          <li>GraphQL</li>
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
