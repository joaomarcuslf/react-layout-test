/* @flow */
import React from 'react';

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
      <section className="application-container">
        <div className="columns is-gapless is-mobile is-desktop">
          <h1>
            Hello World
          </h1>
        </div>
      </section>
    );
  }
}
