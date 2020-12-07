import { createStore, applyMiddleware } from '@reduxjs/toolkit';
import * as rootReducer from './store/index';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
	rootReducer.rootReducer,
	composeWithDevTools(
		applyMiddleware(thunkMiddleware)
		// other store enhancers if any
	)
);

if (process.env.NODE_ENV === 'development' && module.hot) {
	module.hot.accept('./store', () => {
		const newRootReducer = require('./store').default;
		store.replaceReducer(newRootReducer);
	});
}

export type AppDispatch = typeof store.dispatch;

export default store;