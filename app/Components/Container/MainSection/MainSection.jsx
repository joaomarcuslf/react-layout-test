/* @flow */
import React from 'react';

import PictureCard from './PictureCard.jsx';
import TabItem from './TabItem.jsx';
import Icon from '../../Icon/Icon.jsx';

export default class MainSection extends React.Component {
  propTypes: {}

  constructor() {
    super();

    this.state = {
      cards: [
        { cardName: 'card-1@3x' },
        { cardName: 'card-2@3x' },
        { cardName: 'card-3@3x' },
        { cardName: 'card-4@3x' },
        { cardName: 'card-5@3x' },
        { cardName: 'card-6@3x' }
      ],
      openDropdown: false,
      tabs: [
        { tabName: 'São Francisco', isActive: true },
        { tabName: 'Paris', isActive: false },
        { tabName: 'Londres', isActive: false },
        { tabName: 'Sidney', isActive: false }
      ]
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  handleClick() {
    this.setState({
      openDropdown: !this.state.openDropdown
    });
  }

  handleTabClick() {
    console.log('Tab Clicked');
  }

  render(): ?React$Element<div> {
    let cardsElm = this.state.cards.map((elem: object, index: integer): object => {
      return <PictureCard cardName={elem.cardName} key={index} />;
    });

    let tabsElm = this.state.tabs.map((elem: object, index: integer): object => {
      return <TabItem
        tabName={elem.tabName}
        isActive={elem.isActive}
        onClick={this.handleTabClick}
        key={index} />;
    });

    let tabsContainerCLass = (this.state.openDropdown) ?
      'columns is-mobile column tabs-container open' :
      'columns is-mobile column tabs-container';

    return(
      <div className='main-section overlay-dark'>
        <div className='container'>
          <h1 className='title is-fullwidth'>Destinos</h1>

            <div className={tabsContainerCLass} onClick={this.handleClick}>
              <Icon iconName='dropdown-icon' alt='dropdown' />
              {tabsElm}
            </div>

          <div className='cards-container columns is-mobile is-desktop is-multiline open'>
            {cardsElm}
          </div>
        </div>
      </div>
    );
  }
}
