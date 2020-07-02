import React from 'react';
import './home.less';
import { NavLink } from 'react-router-dom';
import { DOC_BACKGROUND } from '../../common/constant';
import WavesArea from '../components/waves-area';

class IndexPage extends React.PureComponent {
  componentDidMount() {
    const header = document.getElementById('page-header');
    header.classList.remove('top-nav');
    window.addEventListener(
      'scroll',
      () => {
        if (window.scrollY > 60) {
          header.classList.add('fixed');
        } else {
          header.classList.remove('fixed');
        }
      },
      100,
    );
  }

  componentWillUnmount() {
    const header = document.getElementById('page-header');
    header.classList.add('top-nav');
  }

  render() {
    const bannerView = (
      <section className="home-banner">
        <div
          className="bg"
          style={{
            backgroundImage: `url(${DOC_BACKGROUND})`,
          }}
        />
        <div className="banner-container">
          <h2 data-shadow="OSDOC UI">OSDOC UI</h2>
          <h3>更简单、更方便的React移动端组件库</h3>
          <div className="button">
            <NavLink to="/doc">开始使用</NavLink>
          </div>
        </div>
        <WavesArea className="home-waves"></WavesArea>
      </section>
    );

    return (
      <main className="warpper home-page">
        {bannerView}
        <div style={{ height: '500px' }}></div>
      </main>
    );
  }
}

export default IndexPage;
