'use strict';

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';

export default class MainTest extends React.Component {
  render() {
    const id = this.props.params.id;
    if (id === 10) {
      return <NotFoundPage/>;
    }
    //const headerStyle = { backgroundImage: `url(/img/${athlete.cover})` };
    return (
      <h1>shiiiit
      <p>{id}</p>
      </h1>
    );
  }
}
