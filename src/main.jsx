import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import Layout from './components/Layout.jsx'
import About from './Pages/About.jsx'
import Contact from './Pages/Contact.jsx'
import Blog from './Pages/Blog.jsx'
import Home from './Pages/Home.jsx'
import ErrorPage from './Pages/ErrorPage.jsx'
import "./index.css"
import PostDetail from './Pages/PostDetail.jsx'
import Login from './Pages/Login.jsx'
import Register from './Pages/Register.jsx'

import Categories from './Pages/Categories.jsx'


const router = createBrowserRouter(
  [
    {
      path: '/',
      element:<Layout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
          index:true, 
          element:<Home/>
        },
        {
          path:'/posts/:id',
          element:<PostDetail/>
        },
        {
          path:'/About',
          element:<About/>
        },
        {
          path:'/Contact',
          element:<Contact/>
        },
        {
          path:'/Blog',
          element:<Blog/>
        },
        {
          path:'/Login',
          element:<Login/>
        },
        {
          path:'/Register',
          element:<Register/>
        },
        {
          path:'/posts/categories/:Category',
          element:<Categories/>
        }
        
      ]
    }
  ]
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
