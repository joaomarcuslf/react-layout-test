/* @flow */
import React from 'react';

import ApplicationStore from '../../Stores/ApplicationStore.es6';

import LandingPage from './LandingPage/LandingPage.jsx';
import MainSection from './MainSection/MainSection.jsx';
import ExtraSection from './ExtraSection/ExtraSection.jsx';

export default class AppContainer extends React.Component {
  propTypes: {}

  constructor() {
    super();

    this.state = ApplicationStore.getApplicationState();
  }

  componentWillMount() {
    ApplicationStore.on('change', () => {
      this.getNewStates();
    });
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  getNewStates() {
    this.setState(ApplicationStore.getApplicationState());
  }

  render(): ?React$Element<div> {
    return(
      <section className='application-container'>
        <LandingPage {...this.state.landingPage} />
        <MainSection {...this.state.mainSection} />
        <ExtraSection {...this.state.extraSection} />
      </section>
    );
  }
}
