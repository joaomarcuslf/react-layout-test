/* @flow */
import React from 'react';

export default class LandingPage extends React.Component {
  propTypes: {}

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <div className='landing-page'>
        <div className='overlay-red bg-city'>
          <div className='container'>
            <h1 className='title is-fullwidth'>Nessas férias, escolha o produto certo para você.</h1>
            <h2 className='subtitle is-half is-offset-one-quarter'>Participe da nossa Mailing List.</h2>
            <p className='control form is-half is-offset-one-quarter'>
              <input className='input form-content is-half' type='email' placeholder='Seu e-mail' />
              <a className='button form-content is-outlined is-half'>
                Saiba Mais
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
