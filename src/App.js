import React from 'react'
import Home from './Components/Home'
import Nav from './Components/Nav'
import { BrowserRouter, Route,Routes } from 'react-router-dom'
import { ProductProvider } from './Components/ProductContext'
import Commodities from './Components/Commodities'

const App = () => {
  return (
    <div>
      <ProductProvider>

      <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/commodities' element={<Commodities></Commodities>}></Route>
      </Routes>
      </BrowserRouter>
      </ProductProvider>
     
    </div>
  )
}

export default App