import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './assets/scss/normalize.scss'
import './assets/scss/fonts.scss'
import './assets/scss/index.scss'
import App from './App';
import store from './redux/store'

const app = (
<Provider store={store}>
  <App/>
</Provider>
)

ReactDOM.render(
    app, document.getElementById('root'));
