'use strict';
import React from 'react';
import { Link } from 'react-router';
import style from '../static/css/style.css'

export default class Layout extends React.Component {
  render() {
    return (
      <div className={style.full_height}>
        <header className={style.overlap_layer}>
          <Link to="/">
            <span>Mock Title</span>
          </Link>
        </header>
        <div  className={style.full_height}>{this.props.children}</div>
        <footer className={style.overlap_layer}>
          <p>
            our private and totally original footer   
          </p>
        </footer>
      </div>
    );
  }
}
