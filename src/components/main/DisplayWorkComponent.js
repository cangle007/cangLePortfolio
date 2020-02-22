import React, { Component } from 'react';

import InspectorComponent from '../projects/InspectorComponent';
import DeviceHistoryComponent from '../projects/DeviceHistoryComponent';
import IotProfileComponent from '../projects/IotProfileComponent';
import PokemonComponent from '../projects/PokemonComponent';
import ResponsiveComponent from '../projects/ResponsiveComponent';
import GmailComponent from '../projects/GmailComponent';
import ArtComponent from '../projects/ArtComponent';
import TodoComponent from '../projects/TodoComponent';
import MainComponent from '../main/MainComponent';

export default class DisplayWorkComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handle_headerScroll = () => {
    const element = document.querySelector('.headerNav-container');

    if (window.scrollY > 0) {
      element.setAttribute('id', 'headerNav-fixed');
    } else {
      element.removeAttribute('id');
    }
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handle_headerScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handle_headerScroll);
  }

  handle_routeMain = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/`);
  };

  handle_openArtAcademy = () => {
    var win = window.open('http://faulty-breakfast.surge.sh/', '_blank');
    win.focus();
  };

  handle_displayWork = () => {
    let { displayWork } = this.props;

    switch (displayWork) {
      case 'inspector':
        return <InspectorComponent handle_routeMain={this.handle_routeMain} />;
      case 'deviceHistory':
        return <DeviceHistoryComponent handle_routeMain={this.handle_routeMain} />;
      case 'iotProfile':
        return <IotProfileComponent handle_routeMain={this.handle_routeMain} />;
      case 'pokemonBattleArea':
        return <PokemonComponent handle_routeMain={this.handle_routeMain} />;
      case 'responsiveGrid':
        return <ResponsiveComponent handle_routeMain={this.handle_routeMain} />;
      case 'gmailClone':
        return <GmailComponent handle_routeMain={this.handle_routeMain} />;
      case 'artAcademy':
        return (
          <ArtComponent handle_routeMain={this.handle_routeMain} handle_openArtAcademy={this.handle_openArtAcademy} />
        );
      case 'toDos':
        return <TodoComponent handle_routeMain={this.handle_routeMain} />;
      default:
        return <MainComponent />;
    }
  };

  render() {
    return <div className='displayWork-container'>{this.handle_displayWork()}</div>;
  }
}
