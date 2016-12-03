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
      </section>
    );
  }
}
