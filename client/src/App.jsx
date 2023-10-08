import { useState } from 'react'
import './App.css'
import { Nav } from './components/navbar';
import { Blog } from './components/showblog';
import LogIn from './components/login';
import SignUP from './components/signup';
import CreatePost from './components/writeblog';
import { Blog1 } from './components/blogpost';
import Home from './components/home';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    
    {
      path: "/",
      element: (
        <>
          <Nav/>
          <Home/>
        </>
      ),
    },

    {
      path: "/show",
      element: (
        <>
          <Nav/>
          <Blog/>
        </>
      ),
    },

    {
      path: "/login",
      element: (
        <>
          <Nav/>
          <LogIn/>
        </>
      ),
    },

    {
      path: "/signup",
      element: (
        <>
          <Nav/>
          <SignUP/>
        </>
      ),
    },

    {
      path: "/write",
      element: (
        <>
          <Nav/>
          <CreatePost/>
        </>
      ),
    },

    {
      path:"/posts/:id" ,
      element:(
        <>
          <Nav/>
          <Blog1/>
        </>
      ),
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App
