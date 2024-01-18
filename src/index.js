import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Home from './Home'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router =createBrowserRouter([
  {
    path:"/about",
    element:<App/>
  },
  {
    path:"/a",
    element:<Home/>
  }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

