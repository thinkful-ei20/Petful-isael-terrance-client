import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Dashboard from './Dashboard';
import store from './store';

let catData = {
  "imageURL": "https://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-cat-photos-funny-cover.jpg",
  "imageDescription": "Heavy orange bengal cat",
  "name": "Lardy",
  "sex": "male",
  "age": 4,
  "breed": "Bengal",
  "story": "Ate too much"
  };

let dogData = {
  "imageURL": "https://i.imgur.com/yXDNi58.jpg",
  "imageDescription": "Bearded cat",
  "name": "Father Cat",
  "sex": "male",
  "age": 10,
  "breed": "dad",
  "story": "Owners thought he can support himself since hes all grown up"
};

console.log(store.getState());

ReactDOM.render(<Dashboard store={store} catData={catData} dogData={dogData}/>, document.getElementById('root'));
registerServiceWorker();
