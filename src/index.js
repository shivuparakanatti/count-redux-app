import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import configureStores from './store/configureStore';
import {increment , decrement , incrementBy} from '../src/action/countActions'
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configureStores()
console.log(store)

console.log(store.getState())

store.subscribe(()=>{          // calls only when state value change
  console.log(store.getState())
})


root.render(
  <Provider store={store}>

    <App />
  </Provider>
);


