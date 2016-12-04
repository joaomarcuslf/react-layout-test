/* @flow */
import React from 'react';

import LandingPage from './LandingPage/LandingPage.jsx';

export default class AppContainer extends React.Component {
  propTypes: {}

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <section className='application-container'>
        <LandingPage />
        <div className='overlay-dark'></div>
        <div className='overlay-light'></div>
      </section>
    );
  }
}
