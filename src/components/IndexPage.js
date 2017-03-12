'use strict';

import React from 'react';
import ListPreview from './ListPreview';
import Header from './Header';
import Search from './Search';
import songs from '../data/mockSongs'

export default class IndexPage extends React.Component {
  render() {
    return (
      <div className="home">
        <Header></Header>
        <div className="athletes-selector">
            <h1>Title</h1>
            {songs.map(songData => <ListPreview key={songData.name} {...songData} />)}
        </div>
      </div>
    );
  }
}


//{songs.map(songData => <listPreviw key={songData.name} {...songData} />)}
