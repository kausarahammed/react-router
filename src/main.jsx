import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './conponents/Home/Home.jsx';
import Header from './conponents/Header/Header.jsx';
import About from './conponents/About/About.jsx';
import Contract from './conponents/Contract/Contract.jsx';
import Users from './conponents/Users/Users.jsx';
import Details from './conponents/Details/Details.jsx';
import Error from './conponents/Error/Error.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/about",
        element: <About></About>
      },
      {
        path:"/contract",
        element:<Contract></Contract>
      },
      {
        path:"/users",
        loader:()=>fetch("https://jsonplaceholder.typicode.com/users"),
        element:<Users></Users> 
      },
      {
        path:"/user/:userId",
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Details></Details>
      }

    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
