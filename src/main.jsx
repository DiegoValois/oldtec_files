import React from 'react';
import ReactDOM from 'react-dom/client'; 
import './index.css';

import { createBrowserRouter, RouterProvider, BrowserRouter } from "react-router-dom";
import Home from "./routes/Home.jsx";
import Games from "./routes/Games.jsx";
import Tranca from './routes/Tranca.jsx';
import Conta from "./routes/Conta.jsx";
import ErrorPage from './routes/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/conta",
    element: <Conta />
  },
  {
    path: "/games",
    element: <Games />,
  },
  {
    path: "/tranca",
    element: <Tranca />
  }
]) 

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
