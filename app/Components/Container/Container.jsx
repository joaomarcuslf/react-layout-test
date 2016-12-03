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
      <section className='application-container'>
        <div className='landing-page'>
          <div className='overlay-red bg-city'>
            <div className='container'>
              <h1 className='title is-fullwidth'>Nessas férias, escolha o produto certo para você.</h1>
              <h2 className='subtitle is-half is-offset-one-quarter'>Participe da nossa Mailing List.</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
