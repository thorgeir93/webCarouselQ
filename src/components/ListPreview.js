'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class ListPreview extends React.Component {
  render() {
    return (
      <Link to={`/athlete/${this.props.id}`}>
        <div className="athlete-preview">
          <h2 className="name">{this.props.name}</h2>
          <span className="medals-count">Song:{this.props.name}</span>
        </div>
      </Link>
    );
  }
}
