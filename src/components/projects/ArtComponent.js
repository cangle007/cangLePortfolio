import React from 'react';

import { Label, Icon } from 'semantic-ui-react';
import art_demo from '../../images/art_demo.gif';
import HeaderNavComponent from '../headers/HeaderNavComponent';

export default function ArtComponent({ handle_routeMain, handle_openArtAcademy, handle_openProjectGithub }) {
  return (
    <div className='art-container'>
      <HeaderNavComponent id='headerNavComp' handle_routeMain={handle_routeMain} />
      <div id='art-bio-item'>
        <article>
          <h1>ART-ACADEMY</h1>
          <p>pixel-Art with vanilla JavaScriptL</p>
          <p>
            Created a pixel art maker through vanilla Javascript with functionality to paint pixel from a variety of
            colors
          </p>
        </article>
      </div>

      <div id='art-tech-item'>
        <span
          className='launch-website'
          onClick={() => {
            handle_openProjectGithub('Pixel-Art-Maker');
          }}
        >
          LAUNCH GITHUB
          <Icon name='external alternate' />
        </span>

        <span
          className='launch-website'
          onClick={() => {
            handle_openArtAcademy();
          }}
        >
          LAUNCH ART-ACADEMY
          <Icon name='external alternate' />
        </span>

        <div>
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
      </div>

      <div id='art-details-item'>
        <section>
          <img src={art_demo} alt='art_demo' />
        </section>
      </div>
    </div>
  );
}
