import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Components/Admin/Pages/Dashboard'
import Marketing from './Components/Admin/Pages/Marketing'
import Orders from './Components/Admin/Pages/Orders'
import AddProducts from './Components/Admin/Pages/Product/AddProducts'
import Layout from './Components/Admin/Layout'

const AdminRoutes = () => {
  return (
    <div>
        {/* <Routes>
            <Route path='/admin/' element={Layout} />
            <Route index component={<Dashboard/>}/>
            <Route path='dashboard' element={Dashboard}/>
            <Route path='marketing' element={<Marketing/>}/>
            <Route path='order' element={<Orders/>} />
            <Route path='products' >
                <Route path='' element={<Products/>}   />
                <Route path='addproducts' element={<AddProducts/>} />
            </Route>
      
        </Routes> */}
    </div>
  )
}

export default AdminRoutes