/* @flow */
import React from 'react';

export default class MainSection extends React.Component {
  propTypes: {}

  constructor() {
    super();

    this.state = {};

    this.handleClick = this.handleClick.bind(this);
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  handleClick() {

  }

  render(): ?React$Element<div> {
    return(
      <div className='overlay-light' />
    );
  }
}
