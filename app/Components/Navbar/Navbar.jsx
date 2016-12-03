/* @flow */
import React from 'react';

import NavbarStore from '../../Stores/NavbarStore.es6';
import NavbarActions from '../../Actions/NavbarActions.es6';
import NavbarItem from './NavbarItem.jsx';

export default class Navbar extends React.Component {
  constructor() {
    super();

    this.state = {
      open: NavbarStore.getMenuState(),
      navBarItems: NavbarStore.getNavbarItems()
    };

    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  componentWillMount() {
    NavbarStore.on('change', () => {
      this.getMenuState();
      this.getNavbarItems();
    });
  }

  getMenuState() {
    this.setState({open: NavbarStore.getMenuState()});
  }

  getNavbarItems() {
    this.setState({navBarItems: NavbarStore.getNavbarItems()});
  }

  handleToggleClick() {
    NavbarActions.changeMenuState();
  }

  render(): ?React$Element<nav> {
    let menuClass = (this.state.open) ? 'nav-right nav-menu open' : 'nav-right nav-menu';

    let navBarItem = this.state.navBarItems.map((elm: object): ?React$Element<NavbarItem> => {
      return <NavbarItem
        name={elm.name}
        path={elm.path}
        handleClick={this.handleToggleClick} />;
    });

    return (
      <nav className='nav'>
        <header className='nav-left'>
          <div className='nav-item is-brand'>
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
        </div>
      </nav>
    );
  }
}
