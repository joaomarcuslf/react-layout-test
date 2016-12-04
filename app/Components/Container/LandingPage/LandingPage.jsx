/* @flow */
import React from 'react';

import Icon from '../../Icon/Icon.jsx';

export default class LandingPage extends React.Component {
  propTypes: {}

  constructor() {
    super();

    this.state = {
      icons: [
        { iconName: 'plane', alt: 'Plane Icon' },
        { iconName: 'wallet', alt: 'Wallet Icon' },
        { iconName: 'case', alt: 'Case Icon' }
      ]
    };
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  handleFocus(event: object) {
    event.target.scrollIntoView();
  }

  render(): ?React$Element<div> {
    let iconsElm = this.state.icons.map(
      (elem: object, index: integer): ?React$Element<Icon> => {
        return <Icon iconName={elem.iconName} alt={elem.alt} key={index} />;
      });

    return(
      <div className='landing-page'>
        <div className='overlay-red'>
          <div className='bg-city' />
        </div>

        <div className='container'>
          <h1 className='title is-fullwidth'>Nessas férias, escolha o produto certo para você.</h1>
          <h2 className='subtitle is-half is-offset-one-quarter'>Participe da nossa Mailing List.</h2>
          <form className='control form is-half is-offset-one-quarter'>
            <input className='input form-content is-half' type='email' placeholder='Seu e-mail' onFocus={this.handleFocus} />
            <a className='button form-content is-outlined is-half'>
              Saiba Mais
            </a>
          </form>

          <div className='icons-container'>
            {iconsElm}
          </div>
        </div>
      </div>
    );
  }
}
