/* @flow */
import React from 'react';

export default class FooterSection extends React.Component {
  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  render(): ?React$Element<section> {
    return (
      <section className={this.props.classes}>
        <div className="heading">
          <h1 className="title">
            {this.props.title}
          </h1>
          <h2 className="subtitle">
            {this.props.child}
          </h2>
        </div>
      </section>
    );
  }
}
