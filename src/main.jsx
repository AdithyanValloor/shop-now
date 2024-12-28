import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import LayOut from './LayOut.jsx'
import Home from './Home/Home.jsx'
import AllProducts from './AllProducts/AllProducts.jsx'
import { ProductProvider } from './ProductProvide.jsx'
import LoginPage from './LoginPage/LoginPage.jsx'
import ProtectedRoute from './ProtectedRoute.jsx'
import { LoginProvider } from './LoginProvider.jsx'

const router = createBrowserRouter(
  
  createRoutesFromElements(  
    <Route path='/' element={<LayOut/>}>
      <Route index element={<Home/>}/>
      <Route path='/allproducts' element={<ProtectedRoute><AllProducts/></ProtectedRoute>}/>
      <Route path='/jewelery' element={<ProtectedRoute><AllProducts category='Jewelery'/></ProtectedRoute>}/>
      <Route path='/electronics' element={<ProtectedRoute><AllProducts category='Electronics'/></ProtectedRoute>}/>
      <Route path='/clothing-men' element={<ProtectedRoute><AllProducts category="Men's clothing"/></ProtectedRoute>}/>
      <Route path='/clothing-women' element={<ProtectedRoute><AllProducts category="Women's clothing"/></ProtectedRoute>}/>
    </Route>
  )

)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginProvider>
      <ProductProvider>
        <RouterProvider router = {router} />
      </ProductProvider>
    </LoginProvider>
  </StrictMode>
)
