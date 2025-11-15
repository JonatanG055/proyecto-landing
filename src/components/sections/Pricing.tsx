import { Check, X } from 'lucide-react'
import { useState } from 'react'

interface PricingFeature {
  name: string
  included: boolean
}

interface Plan {
  id: string
  name: string
  description: string
  monthlyPrice: number
  annualPrice: number
  features: PricingFeature[]
  popular?: boolean
  cta: string
}

const plans: Plan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Perfecto para empezar',
    monthlyPrice: 9,
    annualPrice: 90,
    cta: 'Comenzar gratis',
    features: [
      { name: 'Hasta 5 productos', included: true },
      { name: 'Soporte por email', included: true },
      { name: 'Actualizaciones básicas', included: true },
      { name: 'Analytics básico', included: true },
      { name: 'Soporte prioritario', included: false },
      { name: 'API avanzada', included: false },
      { name: 'Integraciones premium', included: false }
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    description: 'Para equipos en crecimiento',
    monthlyPrice: 29,
    annualPrice: 290,
    popular: true,
    cta: 'Empezar ahora',
    features: [
      { name: 'Productos ilimitados', included: true },
      { name: 'Soporte prioritario 24/7', included: true },
      { name: 'Actualizaciones automáticas', included: true },
      { name: 'Analytics avanzado', included: true },
      { name: 'Personalización completa', included: true },
      { name: 'API completa', included: true },
      { name: 'Integraciones premium', included: false }
    ]
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    description: 'Para grandes organizaciones',
    monthlyPrice: 99,
    annualPrice: 990,
    cta: 'Contactar ventas',
    features: [
      { name: 'Todo de Pro', included: true },
      { name: 'Soporte dedicado', included: true },
      { name: 'Gestor de cuenta', included: true },
      { name: 'SLA garantizado', included: true },
      { name: 'Seguridad avanzada', included: true },
      { name: 'Integraciones personalizadas', included: true },
      { name: 'Capacitación on-site', included: true }
    ]
  }
]

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false)

  const calculateSavings = (monthlyPrice: number, annualPrice: number) => {
    const monthlyCost = monthlyPrice * 12
    const savings = ((monthlyCost - annualPrice) / monthlyCost) * 100
    return Math.round(savings)
  }

  const handlePlanSelection = (planName: string, planId: string) => {
    alert(`¡Seleccionaste el plan ${planName}! 🎉\nRedirección al proceso de pago próximamente.`)
    console.log(`Plan seleccionado: ${planId}`)
  }

  const handleContactSales = () => {
    alert('Contactando con el equipo de ventas...\n📧 ventas@proyectolanding.com\n📞 +1 (555) 123-4567')
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Planes que se adaptan a ti
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Elige el plan perfecto para tu negocio. Todos incluyen 14 días de prueba gratis.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-gray-100 rounded-lg">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 ${
                !isAnnual
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Mensual
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-md font-medium transition-all duration-200 relative ${
                isAnnual
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Anual
              <span className="absolute -top-2 -right-2 px-2 py-0.5 bg-green-500 text-white text-xs rounded-full">
                -17%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {plans.map((plan) => {
            const price = isAnnual ? plan.annualPrice : plan.monthlyPrice
            const savings = calculateSavings(plan.monthlyPrice, plan.annualPrice)

            return (
              <div
                key={plan.id}
                className={`relative bg-white rounded-2xl border-2 transition-all duration-300 ${
                  plan.popular
                    ? 'border-primary shadow-xl scale-105 lg:scale-110'
                    : 'border-gray-200 hover:border-gray-300 hover:shadow-lg'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <span className="px-4 py-1 bg-gradient-to-r from-primary to-secondary text-white text-sm font-semibold rounded-full shadow-lg">
                      Más Popular
                    </span>
                  </div>
                )}

                <div className="p-8">
                  {/* Plan Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold">${price}</span>
                      <span className="text-gray-600">
                        /{isAnnual ? 'año' : 'mes'}
                      </span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-green-600 mt-2">
                        Ahorras {savings}% vs plan mensual
                      </p>
                    )}
                    {!isAnnual && plan.annualPrice && (
                      <p className="text-sm text-gray-500 mt-2">
                        ${plan.annualPrice}/año si pagas anualmente
                      </p>
                    )}
                  </div>

                  {/* CTA Button - AHORA FUNCIONAL */}
                  <button
                    onClick={() => {
                      if (plan.id === 'enterprise') {
                        handleContactSales()
                      } else {
                        handlePlanSelection(plan.name, plan.id)
                      }
                    }}
                    className={`w-full py-3 px-6 rounded-lg font-semibold mb-8 transition-all duration-200 ${
                      plan.popular
                        ? 'bg-primary text-white hover:bg-primary/90 shadow-lg hover:shadow-xl'
                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                  >
                    {plan.cta}
                  </button>

                  {/* Features List */}
                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 flex-shrink-0 mt-0.5" />
                        )}
                        <span
                          className={`text-sm ${
                            feature.included ? 'text-gray-700' : 'text-gray-400'
                          }`}
                        >
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-4">
            ¿Necesitas un plan personalizado para tu empresa?
          </p>
          <button 
            onClick={handleContactSales}
            className="px-8 py-3 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-200"
          >
            Contactar con ventas
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-sm text-gray-600">Uptime garantizado</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-gray-600">Soporte disponible</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">10k+</div>
              <div className="text-sm text-gray-600">Clientes satisfechos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">14 días</div>
              <div className="text-sm text-gray-600">Prueba gratis</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}