/* @flow */
import React from 'react';

import ExtraSectionActions from '../../../Actions/ExtraSectionActions.es6';

import Card from './Card.jsx';
import Dot from './Dot.jsx';
import Icon from '../../Icon/Icon.jsx';

export default class ExtraSection extends React.Component {
  propTypes: {}

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  handleClick(element: integer) {
    /*
      @params
        element: integer
      Will send the action of click
    */

    ExtraSectionActions.selectUser(element);
  }

  nextUser() {
    ExtraSectionActions.nextUser();
  }

  prevUser() {
    ExtraSectionActions.prevUser();
  }

  render(): ?React$Element<div> {
    let activeId = parseInt(
      this.props.activeUser
    ) - 1;

    let activeUser = this.props.users[activeId];

    let dotsElm = this.props.users.map((elem: object): object => {
      return <div
        className='column container'
        onClick={this.handleClick.bind(this, elem)}
        key={elem.id}>
        <Dot isActive={elem.isActive} />
      </div>;
    });

    return(
      <div className='extra-section overlay-light'>
        <Card
          path={activeUser.path}
          userName={activeUser.userName}
          destiny={activeUser.destiny}
          userOpinion={activeUser.userOpinion} />

        <div className='control-panel'>
          <div className='prev'>
            <a onClick={this.prevUser}>
              <Icon iconName='prev@3x' alt='anterior' />
            </a>
          </div>

          <div className='next'>
            <a onClick={this.nextUser}>
              <Icon iconName='next@3x' alt='próximo' />
            </a>
          </div>
        </div>

        <div className='dots-container columns is-mobile is-half-desktop is-offset-one-quarter-desktop'>
          {dotsElm}
        </div>
      </div>
    );
  }
}
