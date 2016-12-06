/* @flow */
import React from 'react';
import FooterSection from './FooterSection.jsx';
import Paragraph from './Paragraph.jsx';
import Icon from '../Icon/Icon.jsx';

export default class Footer extends React.Component {
  constructor() {
    super();

    this.state = {
      contactTexts: [
        'Rua Nome da Rua, 300 Rio de Janeiro - RJ',
        '+55 21 1234-5678',
        'contato@lojasamericanas.net'
      ],
      icons: [
        { iconName: 'pinterest', alt: 'Logo Pinterest' },
        { iconName: 'facebook', alt: 'Logo Facebook' },
        { iconName: 'twitter', alt: 'Logo Twitter' }
      ]
    };
  }

  shouldComponentUpdate(): boolean {
    return false;
  }

  render(): ?React$Element<h1> {

    let paragraphsElm = this.state.contactTexts.map(
      (elem: string, index: integer): ?React$Element<Paragraph> => {
        return <Paragraph text={elem} key={index} />;
      });

    let iconsElm = this.state.icons.map(
      (elem: object, index: integer): ?React$Element<Icon> => {
        return <Icon iconName={elem.iconName} alt={elem.alt} key={index} />;
      });

    let aboutElm = <span>
      Esse modelo é totalmente fictício e foi para nos ajudar a
      testar recursos de desenvolvimento de websites responsivos.
    </span>;

    return (
      <footer className='footer'>
        <div className='columns is-mobile is-multiline '>
          <FooterSection
            classes='section column is-half-mobile'
            title='CONTATOS'
            child={paragraphsElm} />
          <FooterSection
            classes='section column is-half-mobile'
            title='SIGA-NOS'
            child={iconsElm} />
          <FooterSection
            classes='section column'
            title='SOBRE'
            child={aboutElm} />

          <div className='separator' />

          <div className='columns is-multiline-mobile above-content'>
            <div className='columns is-mobile column tabs-container is-clear-desktop'>
              <div className='tab-item column'>
                <a>DESTINOS</a>
              </div>
              <div className='tab-item column'>
                <a>PLANOS</a>
              </div>
              <div className='tab-item column'>
                <a>DEPOIMENTOS</a>
              </div>
              <div className='tab-item column'>
                <a>CONTATO</a>
              </div>
            </div>

            <div className='paragraph column float-bottom-mobile is-half-mobile left-content'>
              © 2016 Lojas Americanas
            </div>

            <div className='column columns is-mobile float-bottom-mobile is-half-mobile right-content'>
              <span className='paragraph column is-narrow top-text'>Voltar ao Topo </span>
              <a href='#nav' className='top-button column is-narrow is-pulled-right'>
                <img src='assets/images/icons/go-to-top@3x.png' alt='Ir ao topo' />
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
