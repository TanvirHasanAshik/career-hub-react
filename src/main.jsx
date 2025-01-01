import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import DetailsJob from './components/DetailsJob/DetailsJob.jsx';
import AppliedJob from './components/AppliedJob/AppliedJob.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: '/details-job/:id',
        loader: () => fetch('/jobs.json'),
        element: <DetailsJob />

      },
      {
        path: "/applied-job",
        loader: () => fetch('/jobs.json'),
        element: <AppliedJob />
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
