import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="catalog" element={<Catalog />} />
        {/* Añadir más rutas aquí */}
      </Route>
    </Routes>
  )
}
