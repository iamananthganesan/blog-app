import { useState } from 'react';
import './App.css';
import './style.scss'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import SinglePost from './pages/SinglePost';
import CreateBlog from './pages/CreateBlog';
//import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/post/:id',
        element: <SinglePost />
      },
      {
        path: '/create',
        element: <CreateBlog />
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])


function App() {
  //use state is a hook, which controls the behaviour of its component 

  const [name, setName] = useState('');
  return (
    <div className='app'>
      <div className='container'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  );
}

export default App;
