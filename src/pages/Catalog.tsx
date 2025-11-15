import { Grid, Heart, List, Search, ShoppingCart, SlidersHorizontal, Star, X } from 'lucide-react'
import { useMemo, useState } from 'react'

interface Product {
  id: number
  name: string
  price: number
  originalPrice?: number
  rating: number
  reviews: number
  image: string
  category: string
  badge?: 'Nuevo' | 'Bestseller' | 'Oferta'
  inStock: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: 'Laptop Premium Pro 15"',
    price: 1299.99,
    originalPrice: 1499.99,
    rating: 4.8,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500',
    category: 'Electronics',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 2,
    name: 'Wireless Headphones Pro',
    price: 199.99,
    rating: 4.6,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
    category: 'Audio',
    badge: 'Nuevo',
    inStock: true
  },
  {
    id: 3,
    name: 'Smart Watch Series X',
    price: 399.99,
    originalPrice: 499.99,
    rating: 4.7,
    reviews: 412,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500',
    category: 'Wearables',
    badge: 'Oferta',
    inStock: true
  },
  {
    id: 4,
    name: 'Professional Camera Kit',
    price: 899.99,
    rating: 4.9,
    reviews: 156,
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500',
    category: 'Photography',
    inStock: true
  },
  {
    id: 5,
    name: 'Gaming Mouse RGB',
    price: 79.99,
    rating: 4.5,
    reviews: 567,
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500',
    category: 'Gaming',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 6,
    name: 'Mechanical Keyboard Pro',
    price: 149.99,
    rating: 4.7,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500',
    category: 'Gaming',
    inStock: true
  },
  {
    id: 7,
    name: 'Tablet Ultra 11"',
    price: 599.99,
    originalPrice: 699.99,
    rating: 4.6,
    reviews: 278,
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
    category: 'Electronics',
    badge: 'Oferta',
    inStock: true
  },
  {
    id: 8,
    name: 'Bluetooth Speaker XL',
    price: 129.99,
    rating: 4.4,
    reviews: 423,
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500',
    category: 'Audio',
    inStock: false
  },
  {
    id: 9,
    name: 'USB-C Hub 7-in-1',
    price: 49.99,
    rating: 4.8,
    reviews: 891,
    image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500',
    category: 'Accessories',
    badge: 'Bestseller',
    inStock: true
  },
  {
    id: 10,
    name: 'Wireless Charger Pad',
    price: 34.99,
    rating: 4.3,
    reviews: 612,
    image: 'https://images.unsplash.com/photo-1591290619762-c588e8880b7d?w=500',
    category: 'Accessories',
    inStock: true
  },
  {
    id: 11,
    name: 'External SSD 1TB',
    price: 179.99,
    rating: 4.9,
    reviews: 234,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500',
    category: 'Storage',
    badge: 'Nuevo',
    inStock: true
  },
  {
    id: 12,
    name: 'Monitor 4K 27"',
    price: 449.99,
    originalPrice: 549.99,
    rating: 4.7,
    reviews: 189,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500',
    category: 'Electronics',
    badge: 'Oferta',
    inStock: true
  }
]

type ViewMode = 'grid' | 'list'
type SortOption = 'featured' | 'price-asc' | 'price-desc' | 'rating' | 'newest'

export default function Catalog() {
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1500])
  const [minRating, setMinRating] = useState(0)
  const [sortBy, setSortBy] = useState<SortOption>('featured')
  const [showFilters, setShowFilters] = useState(false)
  const [favorites, setFavorites] = useState<number[]>([])

  const categories = useMemo(() => {
    const cats = new Set(products.map(p => p.category))
    return ['all', ...Array.from(cats)]
  }, [])

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Search
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    }

    // Category
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p => p.category === selectedCategory)
    }

    // Price range
    filtered = filtered.filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])

    // Rating
    filtered = filtered.filter(p => p.rating >= minRating)

    // Sort
    const sorted = [...filtered]
    switch (sortBy) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        sorted.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        sorted.sort((a, b) => (b.badge === 'Nuevo' ? 1 : 0) - (a.badge === 'Nuevo' ? 1 : 0))
        break
    }

    return sorted
  }, [searchQuery, selectedCategory, priceRange, minRating, sortBy])

  const toggleFavorite = (id: number) => {
    setFavorites(prev =>
      prev.includes(id) ? prev.filter(fav => fav !== id) : [...prev, id]
    )
  }

  const ProductCard = ({ product }: { product: Product }) => {
    const isFavorite = favorites.includes(product.id)

    if (viewMode === 'list') {
      return (
        <div className="bg-white rounded-lg shadow-sm p-4 hover:shadow-md transition-shadow">
          <div className="flex gap-4">
            <div className="relative flex-shrink-0">
              <img
                src={product.image}
                alt={product.name}
                className="w-32 h-32 object-cover rounded-lg"
                loading="lazy"
              />
              {product.badge && (
                <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-semibold rounded-full ${
                  product.badge === 'Nuevo' ? 'bg-blue-500 text-white' :
                  product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' :
                  'bg-red-500 text-white'
                }`}>
                  {product.badge}
                </span>
              )}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
                >
                  <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                </button>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600">({product.reviews})</span>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-400 line-through mr-2">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                  <span className="text-2xl font-bold text-primary">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <button
                  disabled={!product.inStock}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  <ShoppingCart className="h-5 w-5" />
                  {product.inStock ? 'Agregar' : 'Agotado'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          {product.badge && (
            <span className={`absolute top-3 left-3 px-3 py-1 text-sm font-semibold rounded-full ${
              product.badge === 'Nuevo' ? 'bg-blue-500 text-white' :
              product.badge === 'Bestseller' ? 'bg-yellow-500 text-white' :
              'bg-red-500 text-white'
            }`}>
              {product.badge}
            </span>
          )}
          <button
            onClick={() => toggleFavorite(product.id)}
            className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-gray-100 transition-colors"
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
          </button>
        </div>

        <div className="p-4">
          <p className="text-sm text-gray-500 mb-1">{product.category}</p>
          <h3 className="font-semibold text-lg mb-2 line-clamp-2">{product.name}</h3>

          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">({product.reviews})</span>
          </div>

          <div className="mb-4">
            {product.originalPrice && (
              <span className="text-sm text-gray-400 line-through mr-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            <span className="text-2xl font-bold text-primary">
              ${product.price.toFixed(2)}
            </span>
          </div>

          <button
            disabled={!product.inStock}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
          >
            <ShoppingCart className="h-5 w-5" />
            {product.inStock ? 'Agregar al carrito' : 'Agotado'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Catálogo de Productos</h1>
          <p className="text-lg opacity-90">Descubre nuestra selección de productos premium</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Search & View Toggle */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar productos..."
              className="w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
            />
          </div>

          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center justify-center gap-2 px-4 py-3 border rounded-lg hover:bg-gray-50"
          >
            <SlidersHorizontal className="h-5 w-5" />
            Filtros
          </button>

          <div className="flex gap-2">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-3 border rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-primary text-white' : 'hover:bg-gray-50'
              }`}
              aria-label="Vista de cuadrícula"
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-3 border rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-primary text-white' : 'hover:bg-gray-50'
              }`}
              aria-label="Vista de lista"
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-bold">Filtros</h2>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden p-1"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Categoría</h3>
                <div className="space-y-2">
                  {categories.map(cat => (
                    <label key={cat} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                        className="text-primary focus:ring-primary"
                      />
                      <span className="text-sm capitalize">
                        {cat === 'all' ? 'Todos' : cat}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Rango de Precio</h3>
                <input
                  type="range"
                  min="0"
                  max="1500"
                  step="50"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, Number(e.target.value)])}
                  className="w-full"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>${priceRange[0]}</span>
                  <span>${priceRange[1]}</span>
                </div>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Calificación mínima</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1, 0].map(rating => (
                    <label key={rating} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="text-primary focus:ring-primary"
                      />
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                        {rating > 0 && <span className="text-sm text-gray-600 ml-1">& más</span>}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="font-semibold mb-3">Ordenar por</h3>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                >
                  <option value="featured">Destacados</option>
                  <option value="price-asc">Precio: Menor a Mayor</option>
                  <option value="price-desc">Precio: Mayor a Menor</option>
                  <option value="rating">Mejor Calificados</option>
                  <option value="newest">Más Nuevos</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Products Grid/List */}
          <div className="flex-1">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-gray-600">
                Mostrando <span className="font-semibold">{filteredProducts.length}</span> productos
              </p>
            </div>

            {filteredProducts.length === 0 ? (
              <div className="bg-white rounded-lg shadow-sm p-12 text-center">
                <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No se encontraron productos</h3>
                <p className="text-gray-600">Intenta ajustar los filtros de búsqueda</p>
              </div>
            ) : (
              <div className={`
                ${viewMode === 'grid' 
                  ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' 
                  : 'space-y-4'
                }
              `}>
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}