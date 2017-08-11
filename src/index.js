import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Container from './container';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
};

render(Container);

if (module.hot) {
  module.hot.accept('./container', () => {
    render(Container);
  });
}
