import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles'


// Setup redux
import {createStore, applyMiddleware, compose} from 'redux';

//Import roorReducer
import rootReducer from './redux/reducers/rootReducer';



// Kết nối react với redux lại với nhau
import { Provider } from "react-redux";

// Setup redux-thunk
 import thunk from "redux-thunk";

 const middleware = applyMiddleware(thunk);

 // Gộp middlesware và redux devtool thành 1
 const enhancer = compose(middleware, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());


// Tạo store từ reducer
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store = { store }>
       <App />
  </Provider>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
