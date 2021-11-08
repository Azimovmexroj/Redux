import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'react-toastify/dist/ReactToastify.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from 'redux'
import contactReducer from './redux/reducer/contactReducer';
import {composeWithDevTools} from "redux-devtools-extension"
import { Provider} from 'react-redux';
const store = createStore(contactReducer, composeWithDevTools())
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);
