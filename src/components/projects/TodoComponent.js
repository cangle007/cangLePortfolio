import React, { Component } from 'react';

import { Label } from 'semantic-ui-react';
import SidebarComponent from '../sidebars/SidebarComponent';
import todoApp_demo from '../../images/todoApp_demo.gif';

export default class TodoComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handle_routeMain = () => {
    this.props.history.push(`/`);
  };

  render() {
    return (
      <div className='todo-container'>
        <div id='todo-bio-item'>
          <article>
            <h1>To-Do's</h1>
            <p>mock-up for mobile phone</p>
            <p>A CRUD application where users can input their chores that need to be done.</p>
          </article>

          <Label as='a' tag>
            Front-End Development
          </Label>
          <Label as='a' tag>
            CSS-Grid
          </Label>
        </div>

        <div id='todo-details-item'>
          <section>
            <img src={todoApp_demo} alt='todoApp_demo' />
          </section>
        </div>

        <SidebarComponent id='sidebarComp' handle_routeMain={this.handle_routeMain} />
      </div>
    );
  }
}
