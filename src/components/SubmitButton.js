'use strict';
import React from 'react';
import style from '../static/css/style.css'

export default class SubmitButton extends React.Component {
  render() {
    return (
		<div className={style.submitbuttonContainer}>
            <input  
                className={style.defaultButton}
                type='button' 
                value='Sumbit'/>
        </div>
    );
  }
}
