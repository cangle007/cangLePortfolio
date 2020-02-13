import React, { Component } from 'react';

import { Label, Icon } from 'semantic-ui-react';
import SidebarComponent from '../sidebars/SidebarComponent';
import art_demo from '../../images/art_demo.gif';

export default class ArtComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handle_routeMain = () => {
    this.props.history.push(`/`);
  };

  handle_openArtAcademy = () => {
    var win = window.open('http://faulty-breakfast.surge.sh/', '_blank');
    win.focus();
  };

  render() {
    return (
      <div className='art-container'>
        <div id='art-bio-item'>
          <article>
            <h1>ART-ACADEMY</h1>
            <p>pixel-Art with raw CSS & HTML</p>
            <p>
              Created a pixel art maker through vanilla Javascript which will allow a user to choose colors from a
              palette and then paint pixel art.
            </p>
            <div className='launch-website' onClick={this.handle_openArtAcademy}>
              <span>LAUNCH WEBSITE</span> <Icon name='external alternate' />
            </div>
          </article>

          <Label as='a' tag>
            HTML/CSS
          </Label>
          <Label as='a' tag>
            Vanilla Javascript
          </Label>
          <Label as='a' tag>
            Front-End Development
          </Label>
        </div>

        <div id='art-details-item'>
          <section>
            <img src={art_demo} alt='art_demo' />
          </section>
        </div>

        <SidebarComponent id='sidebarComp' handle_routeMain={this.handle_routeMain} />
      </div>
    );
  }
}
