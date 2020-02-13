import React from 'react';

import artAcademyLogo from '../../images/artAcademy-logo.png';
import devHistoryLogo from '../../images/af-device-history-logo.svg';
import gmailCloneLogo from '../../images/gmail-clone-logo.png';
import inspectorLogo from '../../images/af-inspector-logo.svg';
import iotProfileLogo from '../../images/af-iotProfile-logo.png';
import pokemonLogo from '../../images/pokemon-logo.png';
import respGridLogo from '../../images/respGrid-logo.png';
import toDosLogo from '../../images/toDos-logo.png';

export default function PortfolioComponent({
  handle_routeArt,
  handle_routeDeviceHistory,
  handle_routeGmail,
  handle_routeInspector,
  handle_routeIoT,
  handle_routePokemon,
  handle_routeResponsive,
  handle_routeTodo
}) {
  return (
    <div className='portfolio-container'>
      <div id='professional-title-item'>
        <p>PROFESSIONAL WORK</p>
        <p>A SHOWCASE OF PROFESSIONAL DESIGN AND DEVELOPMENT</p>
      </div>

      <div id='inspector-item' onClick={handle_routeInspector}>
        <img id='inspector-logo' src={inspectorLogo} alt='inspector-logo' />
        <div className='card-text'>
          <span>AFERO INSPECTOR</span>
          <p>real-time app. to track 100M+ unit of IoT devices devices</p>
        </div>
      </div>

      <div id='deviceHistory-item' onClick={handle_routeDeviceHistory}>
        <img id='deviceHistory-logo' src={devHistoryLogo} alt='devHistoryLogo' />
        <section className='card-text'>
          <span>AFERO DEVICE HISTORY</span>
          <p>query historical data devices</p>
        </section>
      </div>

      <div id='iotProfile-item' onClick={handle_routeIoT}>
        <img id='iotProfile-logo' src={iotProfileLogo} alt='iotProfileLogo' />
        <section className='card-text'>
          <span>AFERO PROFILE</span>
          <p>mock-up for mobile app.</p>
        </section>
      </div>

      <div id='personal-title-item'>
        <h1>PERSONAL WORK</h1>
        <p>A SHOWCASE OF PERSONAL DESIGN</p>
      </div>

      <div id='pokemonBattleArea-item' onClick={handle_routePokemon}>
        <img id='pokemon-logo' src={pokemonLogo} alt='pokemonlogo' />
        <section className='card-text'>
          <div>
            <span>POKEMON BATTLE AREA</span>
            <p>real-time battle between multiple players</p>
          </div>
        </section>
      </div>

      <div id='responsiveGrid-item' onClick={handle_routeResponsive}>
        <img id='respGrid-logo' src={respGridLogo} alt='respGridlogo' />
        <section className='card-text'>
          <span>RESPONSIVE-GRID</span>
          <p>responsive Website with Css-Grid</p>
        </section>
      </div>

      <div id='gmailClone-item' onClick={handle_routeGmail}>
        <img id='gmailClone-logo' src={gmailCloneLogo} alt='gmailCloneLogo' />
        <section className='card-text'>
          <span>GMAIL-CLONE</span>
          <p>cloning Gmail's with React-Redux</p>
        </section>
      </div>

      <div id='artAcademy-item' onClick={handle_routeArt}>
        <img id='artAcademy-logo' src={artAcademyLogo} alt='artAcademylogo' />
        <section className='card-text'>
          <span>ART-ACADEMY</span>
          <p>pixel-Art with raw CSS & HTML</p>
        </section>
      </div>

      <div id='toDos-item' onClick={handle_routeTodo}>
        <img id='toDos-logo' src={toDosLogo} alt='toDosLogo' />
        <section className='card-text'>
          <span>TO-DO'S</span>
          <p>mock-up for mobile phone</p>
        </section>
      </div>
    </div>
  );
}
