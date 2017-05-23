import React from 'react';
import { Link } from 'react-router';
import BrowserHistory from 'react-router/lib/browserHistory';
import style from '../static/css/style.css'
//import logo  from '../static/images/cq-logo.png'

export default class Header extends React.Component {
  render() {
    return (
	    <div className={style.header}>
            <div className={style.headerContainer}>
                <Link to="/">
                    <div className={style.titleContainer}>
                        <h2 className={style.headerTitle}>CarouselQ</h2>
                    </div>
                </Link>
            </div>
        </div>
    );
  }
}
                   // <div className={style.imgContainer}>
                   //     <img 
                   //         src={logo} 
                   //         className={[style.full_height, 
                   //                     style.grayscale   ].join(' ')}>
        
                   //     </img>
                   // </div>
