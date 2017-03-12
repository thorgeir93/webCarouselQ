'use strict';

import React from 'react';
import { Link } from 'react-router';
//import ListPreview from './ListPreview';
//import songs from '../data/mockSongs'
import ButtonWide from './ButtonWide'
import api from '../data/api';

export default class IndexPage extends React.Component {
  render() {
    var x  = api.register(10,10)
    return (
		<div>
			<Link to="/host">
				<ButtonWide name='Host' color='#0044ff'></ButtonWide>
			</Link>
			<Link to="/join">
				<ButtonWide name='Join' color='#23020'></ButtonWide>
			</Link>
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
