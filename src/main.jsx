// import React from 'react'
// import ReactDOM from 'react-dom/client'

// import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import Routers from './Router/Routes.jsx'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
// <RouterProvider router={Routers}></RouterProvider>
//   </React.StrictMode>,
// )

import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import Routers from './Router/Routes';


ReactDOM.createRoot(document.getElementById('root'))
.render(
  <React.StrictMode>
  <RouterProvider router={Routers}>
  </RouterProvider>
  </React.StrictMode>
)