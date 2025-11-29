import { ArrowRight, CheckCircle, Play, Sparkles, Zap } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const x = (clientX / window.innerWidth - 0.5) * 20
      const y = (clientY / window.innerHeight - 0.5) * 20
      setMousePosition({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden flex items-center">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Gradient Orbs with 3D effect */}
      <div 
        className="absolute top-20 -left-40 w-96 h-96 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse-slow"
        style={{ 
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      ></div>
      <div 
        className="absolute bottom-20 -right-40 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse-slow"
        style={{ 
          transform: `translate(${-mousePosition.x}px, ${-mousePosition.y}px)`,
          transition: 'transform 0.3s ease-out',
          animationDelay: '1s'
        }}
      ></div>
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 rounded-full blur-3xl opacity-20 animate-spin-slow"
      ></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-50"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {/* Glowing Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full mb-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-semibold text-white">
                Lanzamiento Exclusivo 2025
              </span>
              <Zap className="w-4 h-4 text-yellow-400 group-hover:rotate-12 transition-transform" />
            </div>

            {/* Main Headline with Gradient */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-tight mb-6">
              <span className="block text-white mb-2 animate-fade-in">
                Tecnología
              </span>
              <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient-x">
                del Futuro
              </span>
              <span className="block text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-2">
                Hoy
              </span>
            </h1>

            {/* Subtitle with Glassmorphism */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 mb-8">
              <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                Experimenta productos revolucionarios que combinan{' '}
                <span className="text-cyan-400 font-semibold">innovación</span>,{' '}
                <span className="text-purple-400 font-semibold">diseño</span> y{' '}
                <span className="text-pink-400 font-semibold">rendimiento</span>.
                Tu próximo nivel comienza aquí.
              </p>
            </div>

            {/* Features List */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center lg:justify-start">
              {[
                { icon: '🚀', text: 'Envío Express 24h' },
                { icon: '🛡️', text: 'Garantía 3 años' },
                { icon: '💎', text: 'Calidad Premium' }
              ].map((feature, i) => (
                <div 
                  key={i} 
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="text-xl">{feature.icon}</span>
                  <span className="text-white font-medium text-sm">{feature.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons with 3D effect */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <a
                href="/catalog"
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-bold shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative flex items-center gap-2">
                  Explorar productos
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </a>

              <button 
                onClick={() => alert('🎥 Demo disponible próximamente con realidad aumentada')}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white/30 text-white rounded-xl font-bold hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                Ver demo AR
              </button>
            </div>

            {/* Social Proof with Glassmorphism */}
            <div className="pt-8 border-t border-white/20">
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
                {[
                  { value: '50K+', label: 'Usuarios activos' },
                  { value: '4.9/5', label: 'Calificación' },
                  { value: '100+', label: 'Productos' }
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className="text-center bg-white/5 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105"
                  >
                    <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 3D Product Showcase */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative z-10">
              {/* Main Product Card with Glassmorphism */}
              <div 
                className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 bg-white/10 backdrop-blur-xl hover:scale-105 transition-all duration-500"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20"></div>
                <img
                  src="https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=800"
                  alt="Productos premium de tecnología"
                  className="w-full h-auto object-cover relative z-10"
                  loading="eager"
                />
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
              </div>

              {/* Floating Card 1 - Enhanced */}
              <div 
                className="absolute -left-6 top-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 animate-float hidden md:block border border-purple-200 hover:scale-110 transition-transform duration-300"
                style={{
                  transform: `translateY(${mousePosition.y * 0.2}px)`
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl flex items-center justify-center shadow-lg">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">Envío Express</div>
                    <div className="text-sm text-gray-600">Entrega en 24h</div>
                  </div>
                </div>
              </div>

              {/* Floating Card 2 - Enhanced */}
              <div 
                className="absolute -right-6 bottom-20 bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-4 animate-float-delayed hidden md:block border border-yellow-200 hover:scale-110 transition-transform duration-300"
                style={{
                  transform: `translateY(${-mousePosition.y * 0.2}px)`
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-600 rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    ⭐
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">10,000+ Reviews</div>
                    <div className="text-sm text-gray-600">4.9 estrellas</div>
                  </div>
                </div>
              </div>

              {/* New Floating Card 3 - Innovation Badge */}
              <div 
                className="absolute top-1/2 -right-8 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl shadow-2xl p-4 animate-float hidden lg:block border border-white/30 hover:scale-110 transition-transform duration-300"
                style={{
                  transform: `translateX(${mousePosition.x * 0.3}px)`,
                  animationDelay: '2s'
                }}
              >
                <div className="text-center text-white">
                  <Zap className="w-8 h-8 mx-auto mb-1" />
                  <div className="font-bold text-sm">IA Integrada</div>
                  <div className="text-xs opacity-90">Próxima Gen</div>
                </div>
              </div>
            </div>

            {/* 3D Background Elements */}
            <div 
              className="absolute -z-10 top-0 right-0 w-96 h-96 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-full blur-3xl animate-pulse-slow"
              style={{
                transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`
              }}
            ></div>
            <div 
              className="absolute -z-10 -bottom-12 -left-12 w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-full blur-3xl animate-pulse-slow"
              style={{
                transform: `translate(${-mousePosition.x * 0.5}px, ${-mousePosition.y * 0.5}px)`,
                animationDelay: '1.5s'
              }}
            ></div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.05); }
        }
        @keyframes spin-slow {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}