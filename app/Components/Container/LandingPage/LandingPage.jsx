/* @flow */
import React from 'react';

import LandingPageActions from '../../../Actions/LandingPageActions.es6';

import Icon from '../../Icon/Icon.jsx';

export default class LandingPage extends React.Component {
  propTypes: {}

  constructor() {
    super();

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  handleFocus(event: object) {
    event.target.scrollIntoView();
  }

  handleInputChange(event: object) {
    let emailValue = event.target.value;

    LandingPageActions.handleEmailChange(emailValue);
  }

  render(): ?React$Element<div> {
    let iconsElm = this.props.icons.map(
      (elem: object, index: integer): ?React$Element<Icon> => {
        return <Icon iconName={elem.iconName} alt={elem.alt} key={index} />;
    });

    let validEmailClass = (this.props.validEmail) ?
      'button form-content is-outlined is-half' :
      'button form-content is-outlined is-half is-disabled';

    return(
      <div className='landing-page'>
        <div className='overlay-red'>
          <div className='bg-city' />
        </div>

        <div className='container'>
          <h1 className='title is-fullwidth'>Nessas férias, escolha o produto certo para você.</h1>
          <h2 className='subtitle is-half is-offset-one-quarter'>Participe da nossa Mailing List.</h2>
          <form className='control form is-half is-offset-one-quarter'>
            <input
              className='input form-content is-half'
              type='email'
              placeholder='Seu e-mail'
              onFocus={this.handleFocus}
              onChange={this.handleInputChange} />
            <a className={validEmailClass}>
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
