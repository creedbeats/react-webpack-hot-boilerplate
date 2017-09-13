import { Component } from 'react';
import { ConnectedRouter as Router } from 'connected-react-router';
import { Provider } from 'react-redux';
import App from '../components/App';

export default class Container extends Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <Router history={this.props.history}>
          <App />
        </Router>
      </Provider>
    );
  }
}
