import React, { Component } from 'react';

import { Label } from 'semantic-ui-react';
import SidebarComponent from '../sidebars/SidebarComponent';
import poke_intro from '../../images/poke_intro.gif';
import poke_battle from '../../images/poke_battle.png';
import poke_deck from '../../images/poke_deck.png';
import poke_select from '../../images/poke_select.png';
import poke_build from '../../images/poke_build.png';

export default class PokemonComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handle_routeMain = () => {
    this.props.history.push(`/`);
  };

  render() {
    return (
      <div className='pokemon-container'>
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
              A full stack application consisting of a back-end to manage over 500+ players worth of data, and a
              beautiful front-end UI design with authentication to keep your Pokemon data safe.
            </p>
          </article>

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

        <div id='pokemon-details-item'>
          <section id='poke_intro'>
            <img src={poke_intro} alt='poke_intro' />
            <p>
              Start by building your team from a list of 18 unique Pokemon with different strategies and moves. Then
              connect online with your friends or find new players to battle it out to see who has the best team of
              Pokemon.
            </p>
          </section>
          <section id='poke_select'>
            <img src={poke_select} alt='poke_select' />
          </section>
          <section id='poke_build'>
            <img src={poke_build} alt='poke_build' />
          </section>
          <section id='poke_deck'>
            <img src={poke_deck} alt='poke_deck' />
          </section>
          <section id='poke_battle'>
            <img src={poke_battle} alt='poke_battle' />
          </section>
        </div>

        <SidebarComponent id='sidebarComp' handle_routeMain={this.handle_routeMain} />
      </div>
    );
  }
}
