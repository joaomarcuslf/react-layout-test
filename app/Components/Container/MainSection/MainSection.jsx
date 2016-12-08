/* @flow */
import React from 'react';

import MainSectionActions from '../../../Actions/MainSectionActions.es6';

import PictureCard from './PictureCard.jsx';
import TabItem from './TabItem.jsx';
import Icon from '../../Icon/Icon.jsx';

export default class MainSection extends React.Component {
  propTypes: {}

  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  handleClick() {
    MainSectionActions.toggleDropdown();
  }

  handleTabClick(tab: object) {
    MainSectionActions.selectTab(tab);
  }

  render(): ?React$Element<div> {
    let selectedId = this.props.selectedCardGroup;

    let cardsElm = this.props.cards[selectedId].map((elem: object, index: integer): object => {
      return <PictureCard cardName={elem.cardName} key={index} />;
    });

    let tabsElm = this.props.tabs.map((elem: object, index: integer): object => {
      return <TabItem
        tabName={elem.tabName}
        isActive={elem.isActive}
        onClick={this.handleTabClick.bind(this, elem)}
        key={index} />;
    });

    let tabsContainerCLass = (this.props.openDropdown) ?
      'columns is-mobile column tabs-container open' :
      'columns is-mobile column tabs-container';

    return(
      <div className='main-section overlay-dark'>
        <div className='container'>
          <h1 className='title is-fullwidth'>Destinos</h1>

            <div className={tabsContainerCLass} onClick={this.handleClick}>
              <Icon iconName='dropdown-icon' alt='dropdown' />
              <span className='is-hidden-desktop hidden-tab'>
                <TabItem tabName='' />
              </span>

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
