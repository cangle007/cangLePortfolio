import React from 'react';

import artAcademyLogo from '../../images/artAcademy-logo.png';
import devHistoryLogo from '../../images/af-device-history-logo.svg';
import gmailCloneLogo from '../../images/gmail-clone-logo.png';
import inspectorLogo from '../../images/af-inspector-logo.svg';
import iotProfileLogo from '../../images/af-iotProfile-logo.png';
import pokemonLogo from '../../images/pokemon-logo.png';
import respGridLogo from '../../images/respGrid-logo.png';
import toDosLogo from '../../images/toDos-logo.png';

export default function PortfolioComponent({ display_work, handle_routeDisplayWork }) {
  return (
    <div className='portfolio-container'>
      <div className='portfolio-title' id='professional-title-item'>
        <h1>PROFESSIONAL WORK</h1>
        <p>A SHOWCASE OF PROFESSIONAL DESIGN AND DEVELOPMENT</p>
      </div>
      <div
        id='inspector-item'
        onClick={() => {
          display_work('inspector');
          handle_routeDisplayWork();
        }}
      >
        <img id='inspector-logo' src={inspectorLogo} alt='inspector-logo' />
        <div className='card-text'>
          <span>AFERO INSPECTOR</span>
          <p>real-time app. enabling large scale tracking of IoT devices</p>
        </div>
      </div>

      <div
        id='deviceHistory-item'
        onClick={() => {
          display_work('deviceHistory');
          handle_routeDisplayWork();
        }}
      >
        <img id='deviceHistory-logo' src={devHistoryLogo} alt='devHistoryLogo' />
        <section className='card-text'>
          <span>AFERO DEVICE HISTORY</span>
          <p>query historical data</p>
        </section>
      </div>

      <div
        id='iotProfile-item'
        onClick={() => {
          display_work('iotProfile');
          handle_routeDisplayWork();
        }}
      >
        <img id='iotProfile-logo' src={iotProfileLogo} alt='iotProfileLogo' />
        <section className='card-text'>
          <span>AFERO PROFILE</span>
          <p>mock-up for mobile app</p>
        </section>
      </div>

      <div className='portfolio-title' id='personal-title-item'>
        <h1>PERSONAL WORK</h1>
        <p>A SHOWCASE OF PERSONAL DESIGN</p>
      </div>

      <div
        id='pokemonBattleArea-item'
        onClick={() => {
          display_work('pokemonArena');
          handle_routeDisplayWork();
        }}
      >
        <img id='pokemon-logo' src={pokemonLogo} alt='pokemonlogo' />
        <section className='card-text'>
          <div>
            <span>POKEMON BATTLE AREA</span>
            <p>real-time battle between multiple players</p>
          </div>
        </section>
      </div>

      <div
        id='responsiveGrid-item'
        onClick={() => {
          display_work('responsiveGrid');
          handle_routeDisplayWork();
        }}
      >
        <img id='respGrid-logo' src={respGridLogo} alt='respGridlogo' />
        <section className='card-text'>
          <span>RESPONSIVE-GRID</span>
          <p>responsive Website with CSS-Grid</p>
        </section>
      </div>

      <div
        id='gmailClone-item'
        onClick={() => {
          display_work('gmailClone');
          handle_routeDisplayWork();
        }}
      >
        <img id='gmailClone-logo' src={gmailCloneLogo} alt='gmailCloneLogo' />
        <section className='card-text'>
          <span>GMAIL-CLONE</span>
          <p>cloning Gmail's with React-Redux</p>
        </section>
      </div>

      <div
        id='artAcademy-item'
        onClick={() => {
          display_work('artAcademy');
          handle_routeDisplayWork();
        }}
      >
        <img id='artAcademy-logo' src={artAcademyLogo} alt='artAcademylogo' />
        <section className='card-text'>
          <span>ART-ACADEMY</span>
          <p>pixel-Art with raw CSS & HTML</p>
        </section>
      </div>

      <div
        id='toDos-item'
        onClick={() => {
          display_work('toDos');
          handle_routeDisplayWork();
        }}
      >
        <img id='toDos-logo' src={toDosLogo} alt='toDosLogo' />
        <section className='card-text'>
          <span>TO-DO'S</span>
          <p>mock-up for mobile app</p>
        </section>
      </div>
    </div>
  );
}
