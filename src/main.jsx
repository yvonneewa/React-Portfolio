import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About.jsx';
import Portfolio from './components/Portfolio.jsx';
import Contact from './components/Contact.jsx';
import Resume from './components/Resume.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <About/>
      },
      {
        path: "/portfolio",
        element: <Portfolio/>
      },
      {
        path: "/contact",
        element: <Contact/>
      },
      {
        path: "/resume",
        element: <Resume/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
