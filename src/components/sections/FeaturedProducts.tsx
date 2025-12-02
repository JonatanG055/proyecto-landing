import { ArrowRight, Award, Gem, Heart, Shield, ShoppingCart, Star, Truck, Zap } from 'lucide-react'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  image: string
  rating: number
  reviews: number
  badge?: 'Nuevo' | 'Bestseller' | 'Oferta'
  description: string
}

const featuredProducts: Product[] = [
  {
    id: 1,
    name: 'Laptop Premium Pro 15"',
    price: 1299.99,
    originalPrice: 1499.99,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
    rating: 4.8,
    reviews: 234,
    badge: 'Bestseller',
    description: 'Potencia extrema para profesionales. Procesador i9, 32GB RAM, RTX 4070.'
  },
  {
    id: 2,
    name: 'Wireless Headphones Pro',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    rating: 4.6,
    reviews: 189,
    badge: 'Nuevo',
    description: 'Cancelación de ruido activa. Batería 40h. Audio Hi-Res certificado.'
  },
  {
    id: 3,
    name: 'Smart Watch Series X',
    price: 399.99,
    originalPrice: 499.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600',
    rating: 4.7,
    reviews: 412,
    badge: 'Oferta',
    description: 'Monitoreo de salud 24/7. GPS integrado. Resistente al agua hasta 50m.'
  },
  {
    id: 4,
    name: 'Professional Camera Kit',
    price: 899.99,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=600',
    rating: 4.9,
    reviews: 156,
    description: 'Kit completo profesional. 45MP, video 8K, incluye 3 lentes premium.'
  }
]

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState<number[]>([])
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-200 rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full mb-4">
            <Zap className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-blue-600">Lo Más Vendido</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Productos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Destacados
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Selección exclusiva de nuestros productos más populares con tecnología de punta
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-12">
          {featuredProducts.map((product) => {
            const isFavorite = favorites.includes(product.id)
            const isHovered = hoveredProduct === product.id

            return (
              <div
                key={product.id}
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Badge */}
                  {product.badge && (
                    <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold ${
                      product.badge === 'Nuevo' 
                        ? 'bg-blue-500 text-white' 
                        : product.badge === 'Bestseller' 
                        ? 'bg-yellow-500 text-white' 
                        : 'bg-red-500 text-white'
                    }`}>
                      {product.badge}
                    </div>
                  )}

                  {/* Favorite Button */}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-all duration-200 hover:scale-110"
                    aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                  >
                    <Heart 
                      className={`h-5 w-5 transition-all ${
                        isFavorite 
                          ? 'fill-red-500 text-red-500' 
                          : 'text-gray-600'
                      }`} 
                    />
                  </button>

                  {/* Quick View Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <div className="absolute bottom-4 left-4 right-4">
                      <p className="text-white text-sm line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(product.rating)
                              ? 'fill-yellow-400 text-yellow-400'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-baseline gap-2 mb-4">
                    {product.originalPrice && (
                      <span className="text-sm text-gray-400 line-through">
                        ${product.originalPrice.toFixed(2)}
                      </span>
                    )}
                    <span className="text-2xl font-bold text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs font-semibold text-red-600 bg-red-50 px-2 py-1 rounded">
                        -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={() => alert(`Agregando ${product.name} al carrito...`)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 hover:shadow-lg hover:scale-105"
                  >
                    <ShoppingCart className="h-5 w-5" />
                    Agregar al carrito
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex flex-col items-center gap-4 p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-blue-100">
            <div>
              <h3 className="text-2xl font-bold mb-2">¿Buscas más opciones?</h3>
              <p className="text-gray-600">
                Explora nuestro catálogo completo con más de 100 productos premium
              </p>
            </div>
            <a
              href="/catalog"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
            >
              Ver catálogo completo
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                <Truck className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-semibold mb-1">Envío Express</h4>
              <p className="text-sm text-gray-600">Entrega en 24-48h</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h4 className="font-semibold mb-1">Garantía Extendida</h4>
              <p className="text-sm text-gray-600">Hasta 3 años</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                <Gem className="w-8 h-8 text-purple-600" />
              </div>
              <h4 className="font-semibold mb-1">Calidad Premium</h4>
              <p className="text-sm text-gray-600">Productos certificados</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-3">
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
              <h4 className="font-semibold mb-1">10,000+ Clientes</h4>
              <p className="text-sm text-gray-600">4.9/5 estrellas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}