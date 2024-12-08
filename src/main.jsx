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
import Products from './components/Products.jsx';
import UpdateEquipment from './components/UpdateEquipment.jsx';

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
        loader: () => fetch('https://sportify-hub-server.vercel.app/products'),
        element: <Equipments/>
      },
      {
        path: '/Equipments/:id',
        loader: ({params}) => fetch(`https://sportify-hub-server.vercel.app/products/${params.id}`),
        element: <PrivateRoute><EquipmentDetails/></PrivateRoute>
      },
      {
        path: '/UpdateEquipment/:id',
        loader: ({params}) => fetch(`https://sportify-hub-server.vercel.app/products/${params.id}`),
        element: <PrivateRoute><UpdateEquipment/></PrivateRoute>
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
        path: '/products',
        element: <Products></Products>
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
