'use strict';
import React from 'react'
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import style from '../static/css/style.css'

export default class ButtonWide extends React.Component {

  	render() {
		return (
			<Row className={[	style.full_width, 
								style.fill_height].join(' ')}>
				<Col md={2} className={style.fill}>

					<Link to={this.props.to}>
						<button className={style.button_wide} 
								style={ {background:this.props.color} }>
								{this.props.title}
						</button>
					</Link>

				</Col>
			</Row>
    	);
  	}
}
