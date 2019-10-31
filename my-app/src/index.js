import React from 'react';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

const store = createStore({});

render(
	<Provider store={store}>
		<App />
	</Provider>
	, document.getElementById('root'));

