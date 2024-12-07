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
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import About from './components/About.jsx';
import PrivateRoute from './Routes/PrivateRoute.jsx';
import AddEquipment from './components/AddEquipment.jsx';
import EquipmentDetails from './components/EquipmentDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/Equipments',
        loader: () => fetch('http://localhost:2100/products'),
        element: <PrivateRoute><Equipments/></PrivateRoute>
      },
      {
        path: '/Equipments/:id',
        loader: ({params}) => fetch(`http://localhost:2100/products/${params.id}`),
        element: <PrivateRoute><EquipmentDetails/></PrivateRoute>
      },
      {
        path: '/Register',
        element: <Register/>
      },
      {
        path: '/LogIn',
        element: <Login/>
      },
      {
        path: '/AddEquipment',
        element: <PrivateRoute><AddEquipment/></PrivateRoute>
      },
      {
        path: '/About',
        element: <About/>
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
