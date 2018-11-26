import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import Amplify, {Storage} from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
