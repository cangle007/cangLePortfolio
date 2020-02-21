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

  handle_displayWork = () => {
    let { displayWork } = this.props;

    switch (displayWork) {
      case 'inspector':
        return <InspectorComponent handle_routeMain={this.handle_routeMain} />;
      case 'deviceHistory':
        return <DeviceHistoryComponent handle_routeMain={this.handle_routeMain} />;
      case 'iotProfile':
        return <IotProfileComponent />;
      case 'pokemonArena':
        return <PokemonComponent />;
      case 'responsiveGrid':
        return <ResponsiveComponent />;
      case 'gmailClone':
        return <GmailComponent />;
      case 'artAcademy':
        return <ArtComponent />;
      case 'toDos':
        return <TodoComponent />;
      default:
        return <MainComponent />;
    }
  };

  render() {
    return <div className='displayWork-container'>{this.handle_displayWork()}</div>;
  }
}
