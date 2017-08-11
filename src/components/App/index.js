import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import './style.scss';

const Color = p => <div className="full-screen" style={{ backgroundColor: p.match.params.color }} />;

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="space-around">
          <Link to="red">red</Link>
          <Link to="green">green</Link>
          <Link to="blue">blue</Link>
          <Link to="purple">purple</Link>
          <Link to="yellow">yellow</Link>
          <Link to="black">black</Link>
        </div>
        <Route path="/:color" component={Color} />
      </div>
    );
  }
}
