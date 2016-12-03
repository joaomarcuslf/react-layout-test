/* @flow */
import React from 'react';

export default class Icon extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  render(): ?React$Element<span> {
    let path = `assets/images/icons/${this.props.iconName}.png`;

    return (
      <span className='icon'>
        <img src={path} alt={this.props.alt} />
      </span>
    );
  }
}
