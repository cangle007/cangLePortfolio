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
    let win = window.open('https://github.com/cangle007', '_blank');
    win.focus();
  };

  handle_openTabLinkedin = () => {
    var win = window.open('https://www.linkedin.com/in/cangle/', '_blank');
    win.focus();
  };

  handle_routeDisplayWork = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/displayWork`);
  };

  handle_routeMain = () => {
    window.scrollTo(0, 0);
    this.props.history.push(`/`);
  };

  render() {
    let { history, display_work } = this.props;

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
            display_work={display_work}
            handle_routeDisplayWork={this.handle_routeDisplayWork}
            handle_selectTheme={this.handle_selectTheme}
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
