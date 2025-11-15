import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [open, setOpen] = useState(false)
  const links = [
    { name: 'Inicio', to: '/' },
    { name: 'Catálogo', to: '/catalog' },
    { name: 'Carrito', to: '/cart' },
  ]

  return (
    <nav>
      {/* Desktop */}
      <div className="hidden md:flex gap-6 items-center">
        {links.map(l => (
          <Link key={l.to} to={l.to} className="text-gray-700 hover:text-primary">{l.name}</Link>
        ))}
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
        </div>
      )}
    </nav>
  )
}
