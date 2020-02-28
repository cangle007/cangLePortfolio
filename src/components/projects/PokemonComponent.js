import React from 'react';
import { Icon, Label } from 'semantic-ui-react';

import poke_demo from '../../images/poke_demo.gif';
import poke_battle from '../../images/poke_battle.png';
import poke_deck from '../../images/poke_deck.png';
import poke_home from '../../images/poke_home.png';
import poke_manage from '../../images/poke_manage.png';
import HeaderNavComponent from '../headers/HeaderNavComponent';

export default function PokemonComponent({ handle_routeMain, handle_openProjectGithub }) {
  return (
    <div className='pokemon-container'>
      <HeaderNavComponent id='headerNavComp' handle_routeMain={handle_routeMain} />
      <div id='pokemon-header-item'></div>
      <div id='pokemon-bio-item'>
        <article>
          <h1>POKEMON BATTLE ARENA</h1>
          <p>real-time battles between multiple players</p>
          <p>
            This is a Pokemon CRUD app that revolves around users building their own Pokemon deck to battle other
            players in real time!!
          </p>
          <p>
            A full stack application consisting of a back-end to manage over 500+ players worth of data, and a beautiful
            front-end UI design with authentication to keep your Pokemon data safe.
          </p>
        </article>
      </div>

      <div id='pokemon-tech-item'>
        <span
          className='launch-website'
          onClick={() => {
            handle_openProjectGithub('react-pokemon-frontend');
          }}
        >
          LAUNCH GITHUB
          <Icon name='external alternate' />
        </span>

        <div>
          <Label as='a' tag>
            React-Redux
          </Label>
          <Label as='a' tag>
            Express.js
          </Label>
          <Label as='a' tag>
            Node.Js
          </Label>
          <Label as='a' tag>
            Socket.io
          </Label>
          <Label as='a' tag>
            PostgreSQL
          </Label>
          <Label as='a' tag>
            Front-End Development
          </Label>
          <Label as='a' tag>
            Back-End Development
          </Label>
        </div>
      </div>

      <div id='pokemon-details-container'>
        <section id='poke-demo-item'>
          <img src={poke_demo} alt='poke_demo' />
          <p>
            Start by building your team from a list of 18 unique Pokemon with different strategies and moves. Then
            connect online with your friends or find new players to battle it out to see who has the best team of
            Pokemon.
          </p>
        </section>
        <section id='poke-deck-item'>
          <img src={poke_deck} alt='poke_deck' />
        </section>
        <section id='poke-battle-item'>
          <img src={poke_battle} alt='poke_battle' />
        </section>
        <section id='poke-home-item'>
          <img src={poke_home} alt='poke_home' />
        </section>
        <section id='poke-build-item'>
          <img src={poke_manage} alt='poke_manage' />
        </section>
      </div>
    </div>
  );
}
