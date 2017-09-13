import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(history) {
  const middleware = [thunk, routerMiddleware(history)];
  if (process.env.NODE_ENV === 'dev' || {}) {
    middleware.push(createLogger({ collapsed: true }));
  }

  const store = createStore(
    connectRouter(history)(rootReducer),
    undefined,
    compose(applyMiddleware(...middleware))
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextRootReducer = rootReducer;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
