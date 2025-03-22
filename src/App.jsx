import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Product from './pages/Product';
import Contact from './pages/Contact';
import Card from './pages/Card';
import ErrorPage from './pages/ErrorPage';
import SingleProduct from './pages/SingleProduct'

const App = () => {
  return (
    <>
    <div className="main_app_container">
      <Router>

        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={ <About/>} />
          <Route path='/product' element={ <Product />} />
          <Route path='/contact' element={ <Contact />} />
          <Route path='/card' element={ <Card />} />
          <Route path='*' element={ <ErrorPage />} />
          <Route path="single_product/:id" element={<SingleProduct />} />

        </Routes>

      </Router>
    </div>
    </>
  )
}

export default App