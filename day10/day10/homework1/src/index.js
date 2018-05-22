import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'todomvc-app-css/index.css';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();