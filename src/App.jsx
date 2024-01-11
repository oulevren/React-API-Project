import './App.css'
import { Routes, Route } from 'react-router-dom'

import Personels from './Pages/Personels'
import Products from './Pages/Products'
import MainLayout from './Layout/MainLayout'
import Product from './Pages/Product'
import ErrorPage from './Pages/ErrorPage'
import AdminPage from './Pages/AdminPage'
import PermissionRequired from './Layout/PermissionRequired'

//api
// https://api.escuelajs.co/api/v1/products

//!en son main.jsx e usercontext yazdın


function App() {




  return (
    <>

      <Routes>
            <Route element={<MainLayout></MainLayout>}>

              <Route path='/' element={<Personels></Personels>}></Route>
              <Route path='/urunler' element={<Products></Products>}></Route>
              <Route path='/urunler/:urunId' element={<Product></Product>}></Route>
              <Route path='*' element={<ErrorPage></ErrorPage>}></Route>

            <Route element={<PermissionRequired></PermissionRequired>}>
              <Route path='/admin' element={<AdminPage></AdminPage>} ></Route>
            </Route>

            </Route>

      </Routes>
      
   
      



    </>
  )
}

export default App
