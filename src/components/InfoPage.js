'use strict';
import React from 'react';
//import { Link } from 'react-router';
import style from '../static/css/style.css'

export default class InfoPage extends React.Component {
    render() {
        return (
            <div className={style.infopageContainer}> 
                <h5>INFO</h5>
                <div className={style.arrowDown}></div>
            </div>
    );
  }
}
