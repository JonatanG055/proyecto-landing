import { Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import { CartProvider } from './contexts/CartContext'
import Cart from './pages/Cart'
import Catalog from './pages/Catalog'
import Home from './pages/Home'

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="catalog" element={<Catalog />} />
        </Route>
      </Routes>
    </CartProvider>
  )
}