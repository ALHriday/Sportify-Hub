import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Home from './components/Home.jsx';
import Equipments from './components/Equipments.jsx';
import Register from './components/UserAuth/Register.jsx';
import Login from './components/UserAuth/Login.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/Equipments',
        element: <Equipments/>
      },
      {
        path: '/Register',
        element: <Register/>
      },
      {
        path: '/LogIn',
        element: <Login/>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}/>
    </AuthProvider>
  </StrictMode>,
)
