import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Components/Home';
import { Auth0Provider } from "@auth0/auth0-react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Activites from './Components/Activites';
import Courses from './Components/Courses';
import Secound from './Components/Secoundyear';
import Third from './Components/Third';
import Fourth from './Components/Fourthyear';
import Zoom from './Components/Zoom';
import Project from './Components/Projects';

const router= createBrowserRouter(
  [ 
          {
            path:"/",
            element:<Home />
          },
          {
            path:"/activites",
            element:<Activites />
          },
          {
            path:"/second",
            element:<Secound />
          },
          {
            path:"/third",
            element:<Third />
          },
          {
            path:"/fourth",
            element:<Fourth />
          },

          {
            path:"/project",
            element:<Project />
          },
          // {
          //   path:"/joinclass",
          //   element:<Courses />
          // },
     
     
  ]
)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-l5bahfi3t3tud6rk.us.auth0.com"
    clientId="cCZzN7c0sGNG5mNTm47sLIeQdgHjmwa2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <RouterProvider router={router} />
</Auth0Provider>,
document.getElementById("root")
);




