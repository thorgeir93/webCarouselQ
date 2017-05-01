'use strict';
import React from 'react';
import ButtonWide from './ButtonWide'
import style from '../static/css/style.css'

export default class IndexPage extends React.Component {
  render() {
    return (
		<div style={{height:'100%'}}>
			<div className={style.full_height}>
				<ButtonWide title='Host' 
							bgColor='#191919'
							fontColor='#23730f'
							to='/host'>
				</ButtonWide>
				<ButtonWide title='Join' 
							bgColor='#23730f'
						    fontColor='#191919'
							to='/join'>
				</ButtonWide>
			</div>
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
