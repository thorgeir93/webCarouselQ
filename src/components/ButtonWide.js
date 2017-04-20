'use strict';
import React from 'react'
import { Link } from 'react-router';
import { Row, Col } from 'react-flexbox-grid';
import style from '../static/css/style.css'

export default class ButtonWide extends React.Component {
  	render() {
		return (
			<div className={[	style.full_width, 
								style.fill_height].join(' ')}>
				<div className={style.full_height}>
					<Link to={this.props.to} style={{textDecoration: "none"}}>
						<button className={style.button_wide} 
								style={ {background: this.props.bgColor} }>
                                <h1 className={style.title_big_trans}
								    style={ {
                                        color: this.props.fontColor
                                    } }> 
								    {this.props.title}
                                </h1>
						</button>
					</Link>

				</div>
			</div>
    	);
  	}
}
                                //<span className={style.title_big_trans}>
								//    {this.props.title}
                                //</span>

			//<Row className={[	style.full_width, 
			//					style.fill_height].join(' ')}>
			//	<Col md={2} className={style.fill}>

			//		<Link to={this.props.to} style={{textDecoration: "none"}}>
			//			<button className={style.button_wide} 
			//					style={ {background: this.props.bgColor} }>
            //                    <h1 className={style.title_big_trans}
			//					    style={ {
            //                            color: this.props.fontColor
            //                        } }> 
			//					    {this.props.title}
            //                    </h1>
			//			</button>
			//		</Link>

			//	</Col>
			//</Row>
