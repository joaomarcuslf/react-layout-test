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
        <div className="columns is-mobile is-multiline ">
          <section className="section column is-half-mobile">
            <div className="heading">
              <h1 className="title">
                CONTATOS
              </h1>
              <h2 className="subtitle">
                <div className="paragraph">Rua Nome da Rua, 300 Rio de Janeiro - RJ</div>
                <div className="paragraph">+55 21 1234-5678</div>
                <div className="paragraph">contato@lojasamericanas.net</div>
              </h2>
            </div>
          </section>

          <section className="section column is-half-mobile">
            <div className="heading">
              <h1 className="title">
                SIGA-NOS
              </h1>
              <h2 className="subtitle">
                <span className="icon">
                  <img src='assets/images/icons/pinterest.png' alt='' />
                </span>
                <span className="icon">
                  <img src='assets/images/icons/facebook.png' alt='' />
                </span>
                <span className="icon">
                  <img src='assets/images/icons/twitter.png' alt='' />
                </span>
              </h2>
            </div>
          </section>

          <section className="section column">
            <div className="heading">
              <h1 className="title">
                SOBRE
              </h1>
              <h2 className="subtitle">
                Esse modelo é totalmente fictício e foi para nos ajudar a
                testar recursos de desenvolvimento de websites responsivos.
              </h2>
            </div>
          </section>
        </div>
        <div className="separator" />
      </footer>
    );
  }
}
