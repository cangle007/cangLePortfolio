import React from 'react';
import { Icon, Label } from 'semantic-ui-react';

import todoApp_demo from '../../images/todoApp_demo.gif';
import HeaderNavComponent from '../headers/HeaderNavComponent';

export default function TodoComponent({ handle_routeMain, handle_openProjectGithub }) {
  return (
    <div className='todo-container'>
      <HeaderNavComponent id='headerNavComp' handle_routeMain={handle_routeMain} />
      <div id='todo-bio-item'>
        <article>
          <h1>To-Do's</h1>
          <p>mock-up for mobile app</p>
          <p>A CRUD application where users can input their chores that need to be done.</p>
        </article>
      </div>

      <div id='todo-tech-item'>
        <span
          className='launch-website'
          onClick={() => {
            handle_openProjectGithub('todoList');
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

      <div id='todo-details-item'>
        <section>
          <img src={todoApp_demo} alt='todoApp_demo' />
        </section>
      </div>
    </div>
  );
}
