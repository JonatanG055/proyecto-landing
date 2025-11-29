import { ArrowRight, CheckCircle, Play } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 overflow-hidden">
      {/* Decorative Elements - SIN cuadrícula visible */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
              <span className="text-sm font-semibold text-primary">
                Nuevo lanzamiento 2025
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6">
              Tecnología que{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                transforma
              </span>{' '}
              tu vida
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
              Descubre productos innovadores diseñados para hacerte más productivo, 
              conectado y exitoso. Calidad premium al mejor precio.
            </p>

            {/* Features List */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              {['Envío gratis', 'Garantía 2 años', 'Soporte 24/7'].map((feature, i) => (
                <div key={i} className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span className="font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/catalog"
                className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold shadow-lg hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200"
              >
                Explorar productos
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <button 
                onClick={() => alert('Demo próximamente disponible')}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-gray-300 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Play className="w-5 h-5" />
                Ver demo
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-gray-900">10,000+</div>
                  <div className="text-sm text-gray-600">Clientes felices</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-gray-900">4.9/5</div>
                  <div className="text-sm text-gray-600">Calificación promedio</div>
                </div>
                <div className="text-center sm:text-left">
                  <div className="text-3xl font-bold text-gray-900">50+</div>
                  <div className="text-sm text-gray-600">Productos premium</div>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image - SIN cuadrícula */}
          <div className="relative">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800"
                  alt="Productos premium de tecnología"
                  className="w-full h-auto object-cover"
                  loading="eager"
                />
              </div>

              {/* Floating Card 1 */}
              <div className="absolute -left-6 top-20 bg-white rounded-xl shadow-xl p-4 animate-float hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold">Envío Express</div>
                    <div className="text-sm text-gray-600">24-48 horas</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 */}
              <div className="absolute -right-6 bottom-20 bg-white rounded-xl shadow-xl p-4 animate-float-delayed hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-xl">
                    ⭐
                  </div>
                  <div>
                    <div className="font-semibold">5,000+ Reviews</div>
                    <div className="text-sm text-gray-600">4.9 estrellas</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative circles */}
            <div className="absolute -z-10 -top-4 -right-4 w-72 h-72 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -z-10 -bottom-8 -left-8 w-64 h-64 bg-secondary/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 3s ease-in-out infinite;
          animation-delay: 1.5s;
        }
      `}</style>
    </section>
  )
}