'use strict';
import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
  render() {
    return (
		<div className="title-middle">
			<h3>{this.props.text}</h3>	
      	</div>
    );
  }
}
