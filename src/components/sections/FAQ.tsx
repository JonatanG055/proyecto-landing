import React, { useState } from 'react'

const faqs = [
  { id:1, q:'¿Cuál es el tiempo de entrega?', a:'3-5 días hábiles.' },
  { id:2, q:'¿Ofrecen garantía?', a:'Sí, 12 meses.' },
  { id:3, q:'¿Soporte 24/7?', a:'Sí, vía email.' },
  { id:4, q:'¿Se puede cancelar?', a:'Depende del plan.' },
  { id:5, q:'¿Hay descuentos?', a:'Ofertas en temporadas.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const toggle = (id:number) => setOpen(open===id?null:id)

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Preguntas Frecuentes</h2>
        <div className="space-y-3">
          {faqs.map(f => (
            <div key={f.id} className="bg-white rounded-md shadow">
              <button
                className="w-full text-left px-4 py-3 flex justify-between items-center"
                aria-expanded={open===f.id}
                aria-controls={`faq-${f.id}`}
                onClick={() => toggle(f.id)}
              >
                <span>{f.q}</span>
                <span className={`transform transition-transform ${open===f.id ? 'rotate-180' : ''}`}>⌄</span>
              </button>
              <div id={`faq-${f.id}`} className={`px-4 overflow-hidden transition-all ${open===f.id ? 'max-h-40 py-3' : 'max-h-0'}`} aria-hidden={open!==f.id}>
                <p className="text-gray-600">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
