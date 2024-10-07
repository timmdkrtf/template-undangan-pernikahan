import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"; 
import './index.css'
import React from 'react';
import Landing from './pages/Landing';


const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)