
import React from 'react';
import ReactDOM from 'react-dom';
import CalcOfRoi from './components/calc-of-roi/calc-of-roi';
import { Provider } from 'react-redux';
import store from './store';
// import { BrowserRouter as Router } from 'react-router-dom';
// import ErrorBoundry from './components/error-boundry/error-boundry';
// import store from './store';

// import './index.scss';

ReactDOM.render(

    <Provider store={store}>
        <CalcOfRoi />
   </Provider>
    , document.getElementById('root'));