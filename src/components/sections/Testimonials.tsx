import { ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { useState } from 'react'

const items = [
  { 
    id:1, 
    name: 'María González', 
    role:'CEO, TechCorp', 
    text:'Excelente producto que ha transformado completamente nuestra forma de trabajar. La calidad es excepcional y el soporte técnico siempre está disponible.' 
  },
  { 
    id:2, 
    name: 'Carlos Pérez', 
    role:'CTO, StartUp', 
    text:'Muy recomendable. La facilidad de uso y las características avanzadas superaron todas nuestras expectativas. Vale cada centavo invertido.' 
  },
  { 
    id:3, 
    name: 'Ana López', 
    role:'Product Manager', 
    text:'Cumple perfectamente las expectativas. El equipo pudo adaptarse rápidamente y los resultados fueron inmediatos. Una inversión inteligente.' 
  },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  const next = () => setI((i+1)%items.length)
  const prev = () => setI((i-1+items.length)%items.length)

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Lo que dicen nuestros clientes
        </h2>
        <p className="text-gray-600 mb-12">
          Miles de empresas confían en nosotros
        </p>

        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-lg relative">
          <Quote className="h-12 w-12 text-primary/20 absolute top-8 left-8" />
          
          <div className="relative z-10">
            <p className="text-lg md:text-xl italic text-gray-700 mb-6">
              &quot;{items[i].text}&quot;
            </p>
            
            <div className="mt-6">
              <div className="font-semibold text-gray-900 text-lg">
                {items[i].name}
              </div>
              <div className="text-gray-500">
                {items[i].role}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="mt-8 flex justify-center gap-4">
            <button 
              onClick={prev} 
              aria-label="Anterior testimonio" 
              className="p-3 border-2 border-gray-300 rounded-full hover:border-primary hover:text-primary transition-all duration-200 hover:scale-110"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            
            <button 
              onClick={next} 
              aria-label="Siguiente testimonio" 
              className="p-3 border-2 border-gray-300 rounded-full hover:border-primary hover:text-primary transition-all duration-200 hover:scale-110"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="mt-6 flex justify-center gap-2">
            {items.map((item, index) => (
              <button
                key={item.id}
                onClick={() => setI(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === i ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}