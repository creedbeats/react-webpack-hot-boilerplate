import { Component } from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import createStore from '../store';
import App from '../components/App';

const history = createHistory();
const store = createStore(history);

export default class Container extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App />
        </ConnectedRouter>
      </Provider>
    );
  }
}
