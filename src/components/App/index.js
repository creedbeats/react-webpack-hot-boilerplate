import React, { Component } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import './style.scss';

const Red = () => <div className="full-screen red" />;
const Green = () => <div className="full-screen green" />;
const Blue = () => <div className="full-screen blue" />;

export default class App extends Component {
  render () {
    return (
      <div>
        <div className="space-around">
          <Link to="red">red</Link>
          <Link to="green">green</Link>
          <Link to="blue">blue</Link>
        </div>
        <Switch>
          <Route path="/red" component={Red} />
          <Route path="/green" component={Green} />
          <Route path="/blue" component={Blue} />
        </Switch>
      </div>
    );
  }
}
