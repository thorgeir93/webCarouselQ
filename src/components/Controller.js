import React from 'react';
import { Link } from 'react-router';
import style from '../static/css/style.css'
//import logo  from '../static/images/cq-logo.png'

export default class Controller extends React.Component {

    constructor( props ) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
        this.state = {
            'current_song': '',
            'next_song':    '',
            'is_playing': false // or 'play'
        }
    }

    handleClick(e) {
        console.log('Controller: You clicked!')
    }

  render() {
    return (
        <div className={style.controller}>
            <div onClick={this.handleClick} 
                 className={style.footerContainer}>
            </div>
        </div>
    );
  }
}
