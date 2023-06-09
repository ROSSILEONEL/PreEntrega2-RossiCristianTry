import React, { Children } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import {  createBrowserRouter,  RouterProvider} from "react-router-dom";
import {CustomProvider} from "./context";
import 'bootstrap/dist/css/bootstrap.min.css';



// Import the functions you need from the SDKs you need
initializeApp
import { initializeApp } from "firebase/app";

// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBLqylfmKYOwDCqUQSemvs6b1OZcm5vFzA",
  authDomain: "lazyskate-f6d13.firebaseapp.com",
  projectId: "lazyskate-f6d13",
  storageBucket: "lazyskate-f6d13.appspot.com",
  messagingSenderId: "753170695002",
  appId: "1:753170695002:web:7006cdcb8c6935da27a963"
  // apiKey: import.meta.env.VITE_apiKey,
  // authDomain: import.meta.env.VITE_authDomain,
  // projectId: import.meta.env.VITE_projectId,
  // storageBucket: import.meta.env.VITE_storageBucket,
  // messagingSenderId: import.meta.env.VITE_messagingSenderId,
  // appId: import.meta.env.VITE_appId
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);



import  Layout  from "./components/Layout";
import ItemRoot from './routes/item';
import Root from './routes/root';


import ItemDetailContainer from './components/ItemDetailContainer';
import CardWidget from './components/CardWidget';
import Cart from './components/CartView';
import Checkout from './components/Checkout';

const router = createBrowserRouter([
{
  element:<Layout/>,
  children:[
    {
      path: "/",
      element: <Root/>,
        },
        {
          path: "/category/:id",
          element: <Root/>,
        },
           {
          path: "/item/:id",
          element: <ItemDetailContainer/>,
        }
           
        ,
           {
          path: "/Checkout",
          element: <Checkout/>,
        }
        ,
           {
          path: "/Card",
          element: <Cart/>,
        }
       
  ]
}

  
      ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* //   <App /> */}
  <CustomProvider>
  <RouterProvider router={router} />
  </CustomProvider>
  </React.StrictMode>
)
