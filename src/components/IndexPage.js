'use strict';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import ButtonWide from './ButtonWide'
import style from '../static/css/style.css'

export default class IndexPage extends React.Component {
  render() {
    return (
		<div style={{height:'100%'}}>
			<Grid className={style.full_height}>
				<ButtonWide title='Host' 
							color='green' 
							to='/host'>
				</ButtonWide>
				<ButtonWide title='Join' 
							color='red' 
							to='/join'>
				</ButtonWide>
			</Grid>
		</div>
    );
  }
}


       // <TitleMiddle text=""></TittleMiddle>

      //<div className="home">
      //  <div className="athletes-selector">
      //      <h1>Title</h1>
      //      {songs.map(songData => <ListPreview key={songData.name} {...songData} />)}
      //  </div>
      //</div>
      //
//{songs.map(songData => <listPreviw key={songData.name} {...songData} />)}
