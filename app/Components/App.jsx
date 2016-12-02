/* @flow */
import React from 'react';

export default class App extends React.Component {
  propTypes: {
    children: React.PropTypes.element.isRequired
  }

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
}
