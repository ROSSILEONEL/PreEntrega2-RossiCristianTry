import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {  createBrowserRouter,  RouterProvider} from "react-router-dom";

// Import the functions you need from the SDKs you need
// initializeApp
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBLqylfmKYOwDCqUQSemvs6b1OZcm5vFzA",
//   authDomain: "lazyskate-f6d13.firebaseapp.com",
//   projectId: "lazyskate-f6d13",
//   storageBucket: "lazyskate-f6d13.appspot.com",
//   messagingSenderId: "753170695002",
//   appId: "1:753170695002:web:7006cdcb8c6935da27a963"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
import ItemRoot from './routes/item';
import Root from './routes/root'

const router = createBrowserRouter([


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
