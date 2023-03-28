import { useState } from 'react'
import { createBrowserRouter, createRoutesFromChildren, Route, RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Pages/Home'
import Cart from './Pages/Cart'
import Login from './Pages/Login'
import './App.css'

function App() {
  const router=createBrowserRouter(
    createRoutesFromChildren(
    <Route path='/' element={<Layout/>}>
       <Route index element={<Home/>}></Route>
       <Route index path='/cart' element={<Cart/>}></Route>
       <Route index path='/login' element={<Login/>}></Route>
    </Route>
    )
  )
  
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
