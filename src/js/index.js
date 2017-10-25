import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'; 

import '../sass/common.scss';
import MainLayout from './containers/MainLayout.js'

ReactDOM.render(
<Router>
    <MainLayout />
</Router>
, document.getElementById('app'));