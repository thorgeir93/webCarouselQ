'use strict';

import React from 'react';
//import ListPreview from './ListPreview';
//import songs from '../data/mockSongs'
import api from '../data/api';

export default class IndexPage extends React.Component {
  render() {
    var x  = api.register(10,10)
    return (
      <h1>fuck a dick sick fuck {x}</h1>
      //<div className="home">
      //  <div className="athletes-selector">
      //      <h1>Title</h1>
      //      {songs.map(songData => <ListPreview key={songData.name} {...songData} />)}
      //  </div>
      //</div>
    );
  }
}


//{songs.map(songData => <listPreviw key={songData.name} {...songData} />)}
