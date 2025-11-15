import React from 'react'
import Navigation from './Navigation'

export default function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/logo.svg" alt="Logo" className="h-8 w-8" />
          <span className="font-semibold text-lg">Proyecto Landing</span>
        </div>
        <Navigation />
      </div>
    </header>
  )
}
