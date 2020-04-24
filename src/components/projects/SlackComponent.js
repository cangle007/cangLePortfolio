import React from 'react';
import { Icon, Label } from 'semantic-ui-react';
import HeaderNavComponent from '../headers/HeaderNavComponent';

import tornotoIcon from '../../images/toronto-icon.png';
import gsIcon from '../../images/gs-icon.png';
import lakersIcon from '../../images/lakers-icon.png';
import rocketsIcon from '../../images/rockets-icon.png';
import clippersIcon from '../../images/clippers-icon.png';
import aubergine from '../../images/aubergine.png';
import aubergine_classic from '../../images/aubergine_classic.png';
import hoth from '../../images/hoth.png';
import monument from '../../images/monument.png';
import chocoMint from '../../images/chocoMint.png';
import ochin from '../../images/ochin.png';
import workHard from '../../images/workHard.png';
import nocturne from '../../images/nocturne.png';
import tritanopia from '../../images/tritanopia.png';
import protanopia from '../../images/protanopia.png';

export default function ArtComponent({ handle_routeMain, handle_selectTheme }) {
  return (
    <div className='slack-container'>
      <HeaderNavComponent id='headerNavComp' handle_routeMain={handle_routeMain} />
      <div id='slack-header-item'></div>
      <div id='slack-bio-item'>
        <article>
          <h1>SLACK-THEMES</h1>
          <p>don't slack off your theme</p>
          <p>Change the appearance of Slack across all of your workspaces.</p>
        </article>
      </div>

      <div id='slack-tech-item'>
        <Label as='a' tag>
          SASS/SCSS
        </Label>
        <Label as='a' tag>
          HTML/CSS
        </Label>
      </div>

      <div id='slack-details-container'>
        <div id='sb02-container'>
          <nav className='menu-item'>
            <div className='menu-item__list'>
              <img src={tornotoIcon} alt='tornotoIcon' />
              <span />
            </div>
            <div className='menu-item__list'>
              <img src={gsIcon} alt='gsIcon' />
            </div>
            <div className='menu-item__list'>
              <img src={clippersIcon} alt='clippersIcon' />
            </div>
            <div className='menu-item__list'>
              <img src={lakersIcon} alt='lakersIcon' />
              <span />
            </div>
            <div className='menu-item__list'>
              <img src={rocketsIcon} alt='rocketsIcon' />
              <span />
            </div>
            <div className='menu-item__addChannel'>
              <Icon name='add' size='large' />
            </div>
          </nav>

          <div id='column-container'>
            <div className='userAcct-item'>
              <div className='userAcct-item__info'>
                <h1>Western Conference</h1>
                <span>Kobe Bryant 🏀</span>
              </div>
              <Icon className='userAcct-item__alarm' name='bell outline' size='large' />
            </div>

            <div className='search-item'>
              <input type='text' placeholder='Jump to...' />
              <ul className='search-item__lists'>
                <li>
                  <Icon name='chat' size='small' />
                  <span>Threads</span>
                </li>
                <li>
                  <Icon name='grid layout' size='small' />
                  <span>Apps</span>
                </li>
              </ul>
            </div>

            <div className='draft-item'>
              <h2>Drafts</h2>
              <ul className='draft-item__lists'>
                <li>
                  <Icon name='pencil' size='small' color='yellow' />
                  <span className='userStats'>Kobe Bryant(you) 🏀</span>
                </li>
              </ul>
            </div>

            <div className='channels-item'>
              <div className='channels-item__header'>
                <h2>Channel</h2>
                <Icon id='channel-add' name='add circle' size='large' />
              </div>

              <ul className='channels-item__lists'>
                <li>
                  <span>general</span>
                </li>
                <li>
                  <span>random</span>
                </li>
                <li>
                  <span>shoe endorsement</span>
                </li>
                <li>
                  <span>load management</span>
                </li>
                <li>
                  <span>RIP Kobe 24</span>
                </li>
                <li>
                  <span />
                </li>
                <li>
                  <span>Add a channel</span>
                </li>
              </ul>
            </div>

            <div className='directMsg-item'>
              <div className='directMsg-item__header'>
                <h2>Direct messages</h2>
                <Icon id='channel-add' name='add circle' size='large' />
              </div>

              <ul className='directMsg-item__lists'>
                <li>
                  <span>slackbot</span>
                </li>
                <li>
                  <span>LeBron James 🏆</span>
                </li>
                <li>
                  <span>Anthony Davis</span>
                </li>
                <li>
                  <span>Russell Westbrook 😴💪</span>
                </li>
                <li>
                  <span>Stephen Curry</span>
                </li>
                <li>
                  <span>Paul George</span>
                </li>
                <li>
                  <span>Kevin Durant 🐍🐍</span>
                </li>
                <li>
                  <span>Dwight Howard ⛹️</span>
                </li>
                <li>
                  <span></span>
                </li>
                <li>
                  <span>Invite people</span>
                </li>
              </ul>
            </div>
          </div>

          <div id='theme-container'>
            <section className='sbDetails-item'>
              <h3>Sidebar Themes</h3>
              <p>
                Customize the look of the <strong>Westner Conference</strong> workspace. Only you will see this.
              </p>
            </section>

            <div className='aubergine-item sbTheme'>
              <img src={aubergine} alt='aubergine' />
              <div>
                <input onClick={handle_selectTheme} type='radio' id='aubergine' name='theme' value='aubergine' />
                Aubergine
              </div>
            </div>
            <div className='aubergineClassic-item sbTheme'>
              <img src={aubergine_classic} alt='aubergine_classic' />
              <div>
                <input
                  onClick={handle_selectTheme}
                  type='radio'
                  id='aubergine_classic'
                  name='theme'
                  value='aubergine_classic'
                />
                Aubergine Classic
              </div>
            </div>
            <div className='hoth-item sbTheme'>
              <img src={hoth} alt='hoth' />
              <div>
                <input onClick={handle_selectTheme} type='radio' id='hoth' name='theme' value='hoth' />
                Hoth
              </div>
            </div>
            <div className='monument-item sbTheme'>
              <img src={monument} alt='monument' />
              <div>
                <input onClick={handle_selectTheme} type='radio' id='monument' name='theme' value='monument' />
                Monument
              </div>
            </div>
            <div className='chocoMint-item sbTheme'>
              <img src={chocoMint} alt='chocoMint' />
              <div>
                <input onClick={handle_selectTheme} type='radio' id='chocoMint' name='theme' value='chocoMint' />
                Choco Mint
              </div>
            </div>
            <div className='ochin-item sbTheme'>
              <img src={ochin} alt='ochin' />
              <div>
                <input onClick={handle_selectTheme} type='radio' id='ochin' name='theme' value='ochin' />
                Ochin
              </div>
            </div>
            <div className='workHard-item sbTheme'>
              <img src={workHard} alt='workHard' />
              <div>
                <input onClick={handle_selectTheme} type='radio' id='workHard' name='theme' value='workHard' />
                Work Hard
              </div>
            </div>
            <div className='nocturne-item sbTheme'>
              <img src={nocturne} alt='nocturne' />
              <div>
                <input onClick={handle_selectTheme} type='radio' id='nocturne' name='theme' value='nocturne' />
                Nocturne
              </div>
            </div>

            <section className='accs-item'>
              <h3>Accessible Themes</h3>
            </section>
            <div className='tritanopia-item sbTheme'>
              <img src={tritanopia} alt='tritanopia' />
              <div>
                <input onClick={handle_selectTheme} type='radio' id='tritanopia' name='theme' value='tritanopia' />
                Tritanopia
              </div>
            </div>
            <div className='protanopia-item sbTheme'>
              <img src={protanopia} alt='protanopia' />
              <div>
                <input onClick={handle_selectTheme} type='radio' id='protanopia' name='theme' value='protanopia' />
                Protanopia & Deuteranopia
              </div>
            </div>

            <section className='cst-item'>
              <h3>Custom Theme</h3>
            </section>
            <div className='colBG-item cstTheme'>
              Column BG
              <div>
                <span id='colBG-color' />
                <div id='colBG-hex'>#3f0e40</div>
              </div>
            </div>
            <div className='menuBGHover-item cstTheme'>
              Menu BG Hover
              <div>
                <span id='menuBGHover-color' />
                <div id='menuBGHover-hex'>#3f0e40</div>
              </div>
            </div>
            <div className='active-item cstTheme'>
              Active Item
              <div>
                <span id='active-color' />
                <div id='active-hex'>#3f0e40</div>
              </div>
            </div>
            <div className='activeItemText-item cstTheme'>
              Active Item Text
              <div>
                <span id='activeItemText-color' />
                <div id='activeItemText-hex'>#3f0e40</div>
              </div>
            </div>
            <div className='hoverItem-item cstTheme'>
              Hover Item
              <div>
                <span id='hoverItem-color' />
                <div id='hoverItem-hex'>#3f0e40</div>
              </div>
            </div>
            <div className='textColor-item cstTheme'>
              Text Color
              <div>
                <span id='textColor-color' />
                <div id='textColor-hex'>#3f0e40</div>
              </div>
            </div>
            <div className='activePresence-item cstTheme'>
              Active Presence
              <div>
                <span id='activePresence-color' />
                <div id='activePresence-hex'>#3f0e40</div>
              </div>
            </div>
            <div className='mentionBadge-item cstTheme'>
              Mention Badge
              <div>
                <span id='mentionBadge-color' />
                <div id='mentionBadge-hex'>#3f0e40</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
