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
    let path = `assets/images/users/${this.props.path}.png`;
    return (
      <div className="card container">
        <div className="card-image">
          <figure className="image is-128x128">
            <img src={path} alt={this.props.userName} />
          </figure>
        </div>

        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-fullwidth">{this.props.userName}</p>
              <p className="subtitle is-fullwidth">{this.props.destiny}</p>
            </div>
          </div>

          <div className="content">
            {this.props.userOpinion}
          </div>
        </div>
      </div>
    );
  }
}
