import React from 'react';
import { Link } from 'react-router';
import InfoPage from './InfoPage'
import style from '../static/css/style.css'
//import logo  from '../static/images/cq-logo.png'

export default class Footer extends React.Component {

    constructor( props ) {
        super(props)
        this.textPage= null
        this.showInfo= false
        this.arrowUp = false
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e) {
        this.showInfo= !this.showInfo
        this.arrowUp = !this.arrowUp
    }

  render() {
    return (
        <div className={style.footer}>
            <div onClick={this.handleClick} 
                 className={style.footerContainer}>
                <InfoPage 
                        elements={this.props.textPage}
                        show={this.showInfo}>
                </InfoPage>
            </div>
        </div>
    );
  }
}
