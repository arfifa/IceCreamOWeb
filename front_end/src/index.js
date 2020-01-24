import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import App from './App';
import * as serviceWorker from './serviceWorker';
import '../src/assets/fonts/LongCang-Regular.ttf';
import './index.css';

import { Provider } from 'react-redux';
import storage from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const { store, persistor } = storage()

const options = {
  position: 'top center',
  timeout: 3000,
  offset: '30px',
  transition: 'fade',
  SUCCESS: 'success'
}

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <AlertProvider template={AlertTemplate} {...options}>
        <App />
      </AlertProvider>
    </PersistGate>
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

