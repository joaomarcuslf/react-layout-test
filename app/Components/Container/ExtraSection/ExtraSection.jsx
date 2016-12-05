/* @flow */
import React from 'react';

import Card from './Card.jsx';
import Dot from './Dot.jsx';
import Icon from '../../Icon/Icon.jsx';

export default class MainSection extends React.Component {
  propTypes: {}

  constructor() {
    super();

    let user = {
      isActive: true,
      id: 1,
      userName: 'Julia Souza',
      destiny: 'destino: Helsinki, Finlândia',
      path: 'foto@3x',
      userOpinion:
      '“A viagem foi ótima! O serviço oferecido pela Lojas Americanas foi perfeito.' +
      ' Não vemos a hora das próximas férias chegarem e prepararmos as malas de novo.”'
    };

    this.state = {
      activeUser: user,
      users: [
        { id: 0, isActive: false },
        user,
        { id: 2, isActive: false }
      ]
    };
  }

  shouldComponentUpdate(): boolean {
    return true;
  }

  handleClick(id: integer) {
    console.log('Id Clicked:', id);

    this.setState({
      users: this.state.users.map((elem: object): object => {
        (elem.id === id) ?
          elem.isActive = true :
          elem.isActive = false;

        return elem;
      })
    });
  }

  render(): ?React$Element<div> {
    let activeUser = this.state.activeUser;

    let dotsElm = this.state.users.map((elem: object): object => {
      return <div
        className='column container'
        onClick={this.handleClick.bind(this, elem.id)}
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
            <Icon iconName='prev@3x' alt='anterior' />
          </div>

          <div className='next'>
            <Icon iconName='next@3x' alt='próximo' />
          </div>
        </div>

        <div className='dots-container columns is-mobile is-half-desktop is-offset-one-quarter-desktop'>
          {dotsElm}
        </div>
      </div>
    );
  }
}
