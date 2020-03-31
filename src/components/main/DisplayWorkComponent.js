import React, { Component } from 'react';

import InspectorComponent from '../projects/InspectorComponent';
import DeviceHistoryComponent from '../projects/DeviceHistoryComponent';
import IotProfileComponent from '../projects/IotProfileComponent';
import PokemonComponent from '../projects/PokemonComponent';
import ResponsiveComponent from '../projects/ResponsiveComponent';
import GmailComponent from '../projects/GmailComponent';
import ArtComponent from '../projects/ArtComponent';
import TodoComponent from '../projects/TodoComponent';
import SlackComponent from '../projects/SlackComponent';
import MainComponent from '../main/MainComponent';

export default class DisplayWorkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handle_headerScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handle_headerScroll);
  }

  handle_openProjectGithub = route => {
    var win = window.open(`https://github.com/cangle007/${route}`, '_blank');
    win.focus();
  };

  handle_headerScroll = () => {
    const element = document.querySelector('.headerNav-container');

    if (window.scrollY > 0) {
      element.setAttribute('id', 'headerNav-fixed');
    } else {
      element.removeAttribute('id');
    }
  };

  handle_routeMain = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/`);
  };

  handle_openArtAcademy = () => {
    var win = window.open('http://faulty-breakfast.surge.sh/', '_blank');
    win.focus();
  };

  handle_selectTheme = event => {
    let theme = event.target.value;
    let aubergineDetails = [
      { id: 'colBG-hex', val: '#350d36' },
      { id: 'menuBGHover-hex', val: '#3f0e40' },
      { id: 'active-hex', val: '#1164a3' },
      { id: 'activeItemText-hex', val: '##ffffff' },
      { id: 'hoverItem-hex', val: '#350d36' },
      { id: 'textColor-hex', val: '##ffffff' },
      { id: 'activePresence-hex', val: '#2bac76' },
      { id: 'mentionBadge-hex', val: '#cd2553' }
    ];
    let aubergineClassicDetails = [
      { id: 'colBG-hex', val: '#4d394b' },
      { id: 'menuBGHover-hex', val: '#3e313c' },
      { id: 'active-hex', val: '#4c9689' },
      { id: 'activeItemText-hex', val: '##ffffff' },
      { id: 'hoverItem-hex', val: '#3e313c' },
      { id: 'textColor-hex', val: '##ffffff' },
      { id: 'activePresence-hex', val: '#38978d' },
      { id: 'mentionBadge-hex', val: '#eb4d5c' }
    ];
    let hothDetails = [
      { id: 'colBG-hex', val: '#dcdcdc' },
      { id: 'menuBGHover-hex', val: '#f8f8fa' },
      { id: 'active-hex', val: '#2d9ee0' },
      { id: 'activeItemText-hex', val: '#383f45' },
      { id: 'hoverItem-hex', val: '#ffffff' },
      { id: 'textColor-hex', val: '#383f45' },
      { id: 'activePresence-hex', val: '#60d156' },
      { id: 'mentionBadge-hex', val: '#dc5960' }
    ];
    let monumentDetails = [
      { id: 'colBG-hex', val: '#076570' },
      { id: 'menuBGHover-hex', val: '#0d7e83' },
      { id: 'active-hex', val: '#f79f66' },
      { id: 'activeItemText-hex', val: '##ffffff' },
      { id: 'hoverItem-hex', val: '#d37c71' },
      { id: 'textColor-hex', val: '##ffffff' },
      { id: 'activePresence-hex', val: '#f79f66' },
      { id: 'mentionBadge-hex', val: '#f15340' }
    ];
    let chocoMintDetails = [
      { id: 'colBG-hex', val: '#544538' },
      { id: 'menuBGHover-hex', val: '#42362b' },
      { id: 'active-hex', val: '#5db09d' },
      { id: 'activeItemText-hex', val: '##ffffff' },
      { id: 'hoverItem-hex', val: '#4a3c30' },
      { id: 'textColor-hex', val: '##ffffff' },
      { id: 'activePresence-hex', val: '#f79f66' },
      { id: 'mentionBadge-hex', val: '#5db09d' }
    ];
    let ochinDetails = [
      { id: 'colBG-hex', val: '#303e4d' },
      { id: 'menuBGHover-hex', val: '#2c3849' },
      { id: 'active-hex', val: '#6698c8' },
      { id: 'activeItemText-hex', val: '##ffffff' },
      { id: 'hoverItem-hex', val: '#4a5664' },
      { id: 'textColor-hex', val: '##ffffff' },
      { id: 'activePresence-hex', val: '#94e864' },
      { id: 'mentionBadge-hex', val: '#78af8f' }
    ];
    let workHardDetails = [
      { id: 'colBG-hex', val: '#4d5250' },
      { id: 'menuBGHover-hex', val: '#444a47' },
      { id: 'active-hex', val: '#d39b46' },
      { id: 'activeItemText-hex', val: '##ffffff' },
      { id: 'hoverItem-hex', val: '#434745' },
      { id: 'textColor-hex', val: '##ffffff' },
      { id: 'activePresence-hex', val: '#99d04a' },
      { id: 'mentionBadge-hex', val: '#db6668' }
    ];
    let nocturneDetails = [
      { id: 'colBG-hex', val: '#1a1d21' },
      { id: 'menuBGHover-hex', val: '#000000' },
      { id: 'active-hex', val: '#0576b9' },
      { id: 'activeItemText-hex', val: '##ffffff' },
      { id: 'hoverItem-hex', val: '#000000' },
      { id: 'textColor-hex', val: '##ffffff' },
      { id: 'activePresence-hex', val: '#39e500' },
      { id: 'mentionBadge-hex', val: '#cc4400' }
    ];
    let tritanopiaDetails = [
      { id: 'colBG-hex', val: '#4f2f4c' },
      { id: 'menuBGHover-hex', val: '#452842' },
      { id: 'active-hex', val: '#8c5888' },
      { id: 'activeItemText-hex', val: '##ffffff' },
      { id: 'hoverItem-hex', val: '#1c0b1a' },
      { id: 'textColor-hex', val: '##ffffff' },
      { id: 'activePresence-hex', val: '#00ffb7' },
      { id: 'mentionBadge-hex', val: '#de4c0d' }
    ];
    let protanopiaDetails = [
      { id: 'colBG-hex', val: '#4f2f4c' },
      { id: 'menuBGHover-hex', val: '#452842' },
      { id: 'active-hex', val: '#8c5888' },
      { id: 'activeItemText-hex', val: '##ffffff' },
      { id: 'hoverItem-hex', val: '#1c0b1a' },
      { id: 'textColor-hex', val: '##ffffff' },
      { id: 'activePresence-hex', val: '#d0ff00' },
      { id: 'mentionBadge-hex', val: '#889100' }
    ];

    switch (theme) {
      case 'aubergine':
        document.documentElement.setAttribute('data-theme', 'aubergine');
        return aubergineDetails.map(obj => {
          return (document.getElementById(obj.id).innerHTML = obj.val);
        });

      case 'aubergine_classic':
        document.documentElement.setAttribute('data-theme', 'aubergine_classic');
        return aubergineClassicDetails.map(obj => {
          return (document.getElementById(obj.id).innerHTML = obj.val);
        });

      case 'hoth':
        document.documentElement.setAttribute('data-theme', 'hoth');
        return hothDetails.map(obj => {
          return (document.getElementById(obj.id).innerHTML = obj.val);
        });

      case 'monument':
        document.documentElement.setAttribute('data-theme', 'monument');
        return monumentDetails.map(obj => {
          return (document.getElementById(obj.id).innerHTML = obj.val);
        });

      case 'chocoMint':
        document.documentElement.setAttribute('data-theme', 'chocoMint');
        return chocoMintDetails.map(obj => {
          return (document.getElementById(obj.id).innerHTML = obj.val);
        });

      case 'ochin':
        document.documentElement.setAttribute('data-theme', 'ochin');
        return ochinDetails.map(obj => {
          return (document.getElementById(obj.id).innerHTML = obj.val);
        });

      case 'workHard':
        document.documentElement.setAttribute('data-theme', 'workHard');
        return workHardDetails.map(obj => {
          return (document.getElementById(obj.id).innerHTML = obj.val);
        });

      case 'nocturne':
        document.documentElement.setAttribute('data-theme', 'nocturne');
        return nocturneDetails.map(obj => {
          return (document.getElementById(obj.id).innerHTML = obj.val);
        });

      case 'tritanopia':
        document.documentElement.setAttribute('data-theme', 'tritanopia');
        return tritanopiaDetails.map(obj => {
          return (document.getElementById(obj.id).innerHTML = obj.val);
        });

      case 'protanopia':
        document.documentElement.setAttribute('data-theme', 'protanopia');
        return protanopiaDetails.map(obj => {
          return (document.getElementById(obj.id).innerHTML = obj.val);
        });

      default:
        break;
    }
  };

  handle_displayWork = () => {
    let { displayWork } = this.props;

    switch (displayWork) {
      case 'inspector':
        return (
          <InspectorComponent
            handle_routeMain={this.handle_routeMain}
            handle_openProjectGithub={this.handle_openProjectGithub}
          />
        );
      case 'deviceHistory':
        return (
          <DeviceHistoryComponent
            handle_routeMain={this.handle_routeMain}
            handle_openProjectGithub={this.handle_openProjectGithub}
          />
        );
      case 'iotProfile':
        return (
          <IotProfileComponent
            handle_routeMain={this.handle_routeMain}
            handle_openProjectGithub={this.handle_openProjectGithub}
          />
        );
      case 'pokemonBattleArea':
        return (
          <PokemonComponent
            handle_routeMain={this.handle_routeMain}
            handle_openProjectGithub={this.handle_openProjectGithub}
          />
        );
      case 'responsiveGrid':
        return (
          <ResponsiveComponent
            handle_routeMain={this.handle_routeMain}
            handle_openProjectGithub={this.handle_openProjectGithub}
          />
        );
      case 'gmailClone':
        return (
          <GmailComponent
            handle_routeMain={this.handle_routeMain}
            handle_openProjectGithub={this.handle_openProjectGithub}
          />
        );
      case 'artAcademy':
        return (
          <ArtComponent
            handle_routeMain={this.handle_routeMain}
            handle_openArtAcademy={this.handle_openArtAcademy}
            handle_openProjectGithub={this.handle_openProjectGithub}
          />
        );
      case 'toDos':
        return (
          <TodoComponent
            handle_routeMain={this.handle_routeMain}
            handle_openProjectGithub={this.handle_openProjectGithub}
          />
        );
      case 'slack':
        return <SlackComponent handle_routeMain={this.handle_routeMain} handle_selectTheme={this.handle_selectTheme} />;

      default:
        return <MainComponent />;
    }
  };

  render() {
    return <div className='displayWork-container'>{this.handle_displayWork()}</div>;
  }
}
