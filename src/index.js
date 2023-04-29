import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';

import './index.css';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <BrowserRouter basename="/">
  <Provider store={store}>
    
       {/* <PersistGate loading={'LOADING...'} persistor={persistor}> */}
        <App />
        {/* </PersistGate> */}
    </Provider>
    </BrowserRouter>
  // </React.StrictMode>
);
