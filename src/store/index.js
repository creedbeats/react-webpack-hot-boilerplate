import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(history) {
  const middleware = [thunk, createLogger(), routerMiddleware(history)];
  const store = createStore(
    rootReducer,
    applyMiddleware(...middleware)
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
