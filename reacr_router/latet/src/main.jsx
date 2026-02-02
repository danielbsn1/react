import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Contact from "./contact.jsx";
import Home from "./home.jsx";
//configurando router
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom";
// pagina de error
import ErrorPage from './ErrorPage.jsx';  

const router = createBrowserRouter ([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // componentes base
    children : [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
  // {
  //   path: "contact",
  //   element: <Contact />,
  // },
 
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
