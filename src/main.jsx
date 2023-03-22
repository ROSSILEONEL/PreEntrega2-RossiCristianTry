import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  createBrowserRouter,  RouterProvider} from "react-router-dom";
import ItemRoot from './routes/item';
import Root from './routes/root'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
      },
      {
        path: "/category/:id",
        element: <ItemRoot/>,
      },
         {
        path: "/item/:id",
        element: <ItemRoot/>,
      },
         {
        path: "/cart",
        element: <ItemRoot/>,
      },
         {
        path: "/checkout",
        element: <ItemRoot/>,
      }
      ,]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* //   <App /> */}
  <RouterProvider router={router} />
  </React.StrictMode>
)
