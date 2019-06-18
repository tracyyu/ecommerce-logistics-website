import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from "react-redux";
import store from "../src/js/store";

// import Amplify, {Storage} from 'aws-amplify';
// import config from './aws-exports';
// Amplify.configure(config);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));
registerServiceWorker();
