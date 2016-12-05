/* @flow */
import React from 'react';

export default class TabItem extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    let dotClass = (this.props.isActive) ?
    'dot active' :
    'dot';

    return (
      <div className={dotClass}>
        <a />
      </div>
    );
  }
}
