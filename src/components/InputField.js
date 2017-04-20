'use strict';
import React from 'react';
import style from '../static/css/style.css'

export default class InputField extends React.Component {

    constructor( props ) {
        super( props )
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange( event ) {
        this.props.onChange( this.props.name, event.target.value )
    }

  render() {
    return (
		<div className={style.inputfieldContainer}>
            <input  name={this.props.name} 
                    className={style.defaultInput}
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}/>
        </div>
    );
  }
}
