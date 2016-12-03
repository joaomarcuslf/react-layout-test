/* @flow */
import React from 'react';

export default class Footer extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  render(): ?React$Element<h1> {
    return (
      <footer className="footer">
        footer
      </footer>
    );
  }
}
