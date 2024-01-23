import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Home from './components/chat'
import Login from './components/login'

import Navigation from './components/navigation';
import { RouterProvider, BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navigation/>
    </BrowserRouter>
  </React.StrictMode>
);

