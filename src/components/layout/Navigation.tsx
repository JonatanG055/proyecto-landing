import { Menu, ShoppingCart, X } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const { totalItems } = useCart()
  
  const links = [
    { name: 'Inicio', to: '/' },
    { name: 'Catálogo', to: '/catalog' },
  ]

  return (
    <nav>
      {/* Desktop */}
      <div className="hidden md:flex gap-6 items-center">
        {links.map(l => (
          <Link key={l.to} to={l.to} className="text-gray-700 hover:text-primary transition-colors">{l.name}</Link>
        ))}
        <Link to="/cart" className="relative text-gray-700 hover:text-primary transition-colors">
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              {totalItems}
            </span>
          )}
        </Link>
      </div>

      {/* Mobile */}
      <button
        className="md:hidden p-2"
        onClick={() => setOpen(!open)}
        aria-label="Abrir menú"
        aria-expanded={open}
      >
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <div className="md:hidden absolute right-4 top-16 bg-white shadow-lg rounded-lg p-4 z-50">
          {links.map(l => (
            <Link key={l.to} to={l.to} className="block py-2" onClick={() => setOpen(false)}>{l.name}</Link>
          ))}
          <Link to="/cart" className="flex items-center gap-2 py-2" onClick={() => setOpen(false)}>
            <ShoppingCart className="h-5 w-5" />
            Carrito {totalItems > 0 && `(${totalItems})`}
          </Link>
        </div>
      )}
    </nav>
  )
}