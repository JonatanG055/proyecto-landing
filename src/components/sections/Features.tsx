import { Award, Clock, Headphones, Shield, TrendingUp, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const features = [
  {
    id: 1,
    icon: Zap,
    title: 'Velocidad sin Límites',
    desc: 'Tecnología de última generación que acelera tu productividad al máximo nivel posible.',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-50'
  },
  {
    id: 2,
    icon: Shield,
    title: 'Seguridad Garantizada',
    desc: 'Protección avanzada de datos con encriptación de nivel empresarial y respaldo automático.',
    color: 'text-blue-500',
    bgColor: 'bg-blue-50'
  },
  {
    id: 3,
    icon: Clock,
    title: 'Ahorra Tiempo',
    desc: 'Automatización inteligente que te permite enfocarte en lo que realmente importa.',
    color: 'text-purple-500',
    bgColor: 'bg-purple-50'
  },
  {
    id: 4,
    icon: Headphones,
    title: 'Soporte 24/7',
    desc: 'Equipo experto disponible en todo momento para resolver cualquier consulta o problema.',
    color: 'text-green-500',
    bgColor: 'bg-green-50'
  },
  {
    id: 5,
    icon: TrendingUp,
    title: 'Mejora Continua',
    desc: 'Actualizaciones regulares con nuevas funcionalidades y optimizaciones de rendimiento.',
    color: 'text-red-500',
    bgColor: 'bg-red-50'
  },
  {
    id: 6,
    icon: Award,
    title: 'Calidad Premium',
    desc: 'Productos certificados y galardonados que cumplen los más altos estándares de calidad.',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-50'
  }
]

export default function Features() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            ¿Por qué elegirnos?
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Características que nos hacen diferentes y nos posicionan como líderes 
            en innovación tecnológica
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <article
                key={feature.id}
                className="group bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon Container */}
                <div className={`w-14 h-14 ${feature.bgColor} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="font-bold text-xl mb-3 group-hover:text-blue-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.desc}
                </p>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            ¿Quieres saber más sobre nuestras características?
          </p>
          <Link
            to="/catalog"
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
          >
            Ver todas las características
          </Link>
        </div>
      </div>
    </section>
  )
}