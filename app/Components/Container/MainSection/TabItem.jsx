/* @flow */
import React from 'react';

export default class TabItem extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  render(): ?React$Element<div> {
    let compoentClass = (this.props.isActive) ?
      'tab-item column is-active' :
      'tab-item column';
    return (
      <div className={compoentClass}>
        <a>{this.props.tabName}</a>
      </div>
    );
  }
}
