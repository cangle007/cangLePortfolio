import React, { Component } from 'react';

import MyBioComponent from '../body/MyBioComponent';
import PortfolioComponent from '../body/PortfolioComponent';
import BannerComponent from '../headers/BannerComponent';
import SidebarComponent from '../sidebars/SidebarComponent';
// import InquiryComponent from '../contact/InquiryComponent';

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handle_openTabGithub = () => {
    var win = window.open('https://github.com/cangle007', '_blank');
    win.focus();
  };

  handle_openTabLinkedin = () => {
    var win = window.open('https://www.linkedin.com/in/cangle/', '_blank');
    win.focus();
  };

  handle_routeInspector = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/inspector`);
  };

  handle_routeDeviceHistory = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/devhistory`);
  };

  handle_routeIoT = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/iot`);
  };

  handle_routePokemon = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/pokemon`);
  };

  handle_routeResponsive = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/responsive`);
  };

  handle_routeGmail = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/gmail`);
  };

  handle_routeArt = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/art`);
  };

  handle_routeTodo = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/todo`);
  };

  handle_routeMain = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/`);
  };

  render() {
    let { history } = this.props;

    return (
      <div className='main-container'>
        <div id='bannerComp'>
          <BannerComponent />
        </div>

        <div id='myBioComp'>
          <MyBioComponent
            handle_openTabGithub={this.handle_openTabGithub}
            handle_openTabLinkedin={this.handle_openTabLinkedin}
          />
        </div>

        <div id='portfolioComp'>
          <PortfolioComponent
            handle_routeArt={this.handle_routeArt}
            handle_routeDeviceHistory={this.handle_routeDeviceHistory}
            handle_routeGmail={this.handle_routeGmail}
            handle_routeMain={this.handle_routeMain}
            handle_routeInspector={this.handle_routeInspector}
            handle_routeIoT={this.handle_routeIoT}
            handle_routePokemon={this.handle_routePokemon}
            handle_routeResponsive={this.handle_routeResponsive}
            handle_routeTodo={this.handle_routeTodo}
          />
        </div>

        <div id='sidebarComp'>
          <SidebarComponent history={history} handle_routeMain={this.handle_routeMain} />
        </div>

        {/* <div id='inquiryComp'>
          <InquiryComponent
            handle_openTabGithub={this.handle_openTabGithub}
            handle_openTabLinkedin={this.handle_openTabLinkedin}
          />
        </div> */}
      </div>
    );
  }
}
