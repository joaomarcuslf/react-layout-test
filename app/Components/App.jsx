/* @flow */
import React from 'react';
import Navbar from './Navbar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';

export default class App extends React.Component {
  propTypes: {
    children: React.PropTypes.element.isRequired
  }

  constructor() {
    super();
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  render(): ?React$Element<div> {
    return(
      <div>
        <Navbar />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
