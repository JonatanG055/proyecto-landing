import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t mt-8">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div>
          <h4 className="font-bold">Proyecto Landing</h4>
          <p className="text-sm text-gray-600">Tagline breve. Archivo con comentarios para implementar.</p>
        </div>
        <div>
          <h5 className="font-semibold">Productos</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Producto 1</a></li>
            <li><a href="#">Producto 2</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Empresa</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Sobre nosotros</a></li>
            <li><a href="#">Carreras</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-semibold">Soporte</h5>
          <ul className="space-y-2 text-sm">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </div>
      </div>
      <div className="text-center py-4 text-sm text-gray-500">© 2024 Proyecto. Todos los derechos reservados.</div>
    </footer>
  )
}
