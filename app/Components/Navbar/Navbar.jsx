/* @flow */
import React from 'react';

import NavigationStore from '../../Stores/NavigationStore.es6';
import NavbarActions from '../../Actions/NavbarActions.es6';
import NavbarItem from './NavbarItem.jsx';

export default class Navbar extends React.Component {
  constructor() {
    super();

    this.state = NavigationStore.getNavbarState();
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  componentWillMount() {
    NavigationStore.on('change', () => {
      this.getNavbarState();
    });
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  getNavbarState() {
    this.setState(NavigationStore.getNavbarState());
  }

  handleToggleClick() {
    NavbarActions.changeMenuState();
  }

  render(): ?React$Element<nav> {
    let menuClass = (this.state.open) ? 'nav-right nav-menu open' : 'nav-right nav-menu';

    let navBarItem = this.state.navBarItems.map((elm: object, index: integer): ?React$Element<NavbarItem> => {
      return <NavbarItem
        key={index}
        name={elm.name}
        path={elm.path}
        handleClick={this.handleToggleClick} />;
    });

    return (
      <nav id='nav' className='nav'>
        <header className='nav-left'>
          <div className='nav-item is-brand logo'>
            <img src='assets/images/logo-americanas-900-x-225-fw@3x.png' alt='Lojas Americanas logo' />
          </div>
        </header>

        <span className='nav-toggle' onClick={this.handleToggleClick}>
          <span />
          <span />
          <span className='half-bar' />
        </span>

        <div className={menuClass}>
          {navBarItem}

          <a className='nav-item menu-item hollowed-button' href='#' onClick={this.handleToggleClick}> FAÇA UM TOUR </a>
        </div>
      </nav>
    );
  }
}
