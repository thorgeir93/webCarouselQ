'use strict';
import React from 'react';
import { Link } from 'react-router';
import Header from './Header'
import Footer from './Footer'
import style from '../static/css/style.css'

export default class Layout extends React.Component {
  render() {
    return (
      <div className={style.layoutContainer}>
        <Header></Header>

        <div className={style.mainContent}>
            {this.props.children}
        </div>
      </div>
    );
  }
}
        //<Footer></Footer>
        //
        //<footer className={style.overlap_layer}>
        //  <p>
        //    our private and totally original footer   
        //  </p>
        //</footer>
