/* @flow */
import React from 'react';

export default class PictureCard extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    let path = `assets/images/cards/${this.props.cardName}.png`;

    return (
      <div className='column is-half-mobile is-4-desktop is-4-tablet is-narrow'>
        <img className='picture-card' src={path} />
      </div>
    );
  }
}
