import React from 'react';
//import { Link } from 'react-router';

export default class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <input type="text" name="search" className="search-input"/>
      </div>
    );
  }
}
