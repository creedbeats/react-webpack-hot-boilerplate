import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import createHistory from 'history/createBrowserHistory';
import Container from './container';
import createStore from './store';

const history = createHistory();
const store = createStore(history);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Container);

if (module.hot) {
  module.hot.accept('./container', () => render(require('./container').default));
}
