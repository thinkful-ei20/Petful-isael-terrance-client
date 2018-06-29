import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './Dashboard';

ReactDOM.render(<Dashboard/>, document.getElementById('root'));
registerServiceWorker();
