import React from 'react'

export default function Modal({ open, onClose, children } : { open: boolean, onClose: ()=>void, children: React.ReactNode }) {
  if (!open) return null
  return (
    <div role="dialog" aria-modal="true" className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose} />
      <div className="bg-white rounded-lg p-6 z-10 max-w-lg w-full">{children}</div>
    </div>
  )
}
