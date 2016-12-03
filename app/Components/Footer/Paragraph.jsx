/* @flow */
import React from 'react';

export default class Paragraph extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  render(): ?React$Element<div> {
    return (
      <div className='paragraph'>
        {this.props.text}
      </div>
    );
  }
}
