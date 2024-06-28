import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './routes/Home.jsx'
import Estoque from './routes/Estoque.jsx'
import Cadastro from './routes/Cadastro.jsx'
import Empresa from './routes/Empresa.jsx'
import Contato from './routes/Contato.jsx'
import './index.css'
import {createBrowserRouter, Router, RouterProvider} from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/estoque',
        element: <Estoque />
      },
      {
        path: '/empresa',
        element: <Empresa />
      },
      {
        path: '/cadastro',
        element: <Cadastro />
      },
      {
        path: '/contato',
        element: <Contato />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
