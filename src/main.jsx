import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Root from './Layouts/Root.jsx'
import Home from './components/Home/Home.jsx'
import Login from './components/Login/Login.jsx'
import Register from './components/Register/Register.jsx'
import AuthProvider from './Context/AuthProvider.jsx'
import Orders from './components/Orders/Orders.jsx'
import PrivateRoutes from './components/Navbar/Routes/PrivateRoutes.jsx'
import Profile from './components/Profile/Profile.jsx'
import DashBoard from './components/DashBoard/DashBoard.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
      {
        path: "orders",
        // Component: Orders
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: "profile",
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path: "dashboard",
        element: <PrivateRoutes><DashBoard></DashBoard></PrivateRoutes>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </StrictMode>,
)
