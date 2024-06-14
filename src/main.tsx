import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';

import routers from './router';

import './styles/main.sass';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={routers} />
)
