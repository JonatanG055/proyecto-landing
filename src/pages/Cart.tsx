import { ArrowLeft, Lightbulb, Minus, Plus, ShoppingBag, Tag, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocalStorage } from '../hooks/useLocalStorage'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  category: string
}

export default function Cart() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>('shopping-cart', [
    {
      id: 1,
      name: 'Laptop Premium Pro',
      price: 1299.99,
      quantity: 1,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: 199.99,
      quantity: 2,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300',
      category: 'Audio'
    }
  ])

  const [couponCode, setCouponCode] = useState('')
  const [appliedCoupon, setAppliedCoupon] = useState<{ code: string; discount: number } | null>(null)
  const [couponError, setCouponError] = useState('')

  const validCoupons = {
    'SAVE10': 10,
    'SAVE20': 20,
    'WELCOME': 15
  }

  const updateQuantity = (id: number, delta: number) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQuantity = Math.max(1, item.quantity + delta)
        return { ...item, quantity: newQuantity }
      }
      return item
    }))
  }

  const removeItem = (id: number) => {
    setCartItems(cartItems.filter(item => item.id !== id))
  }

  const applyCoupon = () => {
    const discount = validCoupons[couponCode.toUpperCase() as keyof typeof validCoupons]
    if (discount) {
      setAppliedCoupon({ code: couponCode.toUpperCase(), discount })
      setCouponError('')
    } else {
      setCouponError('Cupón inválido')
      setAppliedCoupon(null)
    }
  }

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shipping = subtotal > 100 ? 0 : 15
  const discount = appliedCoupon ? (subtotal * appliedCoupon.discount) / 100 : 0
  const total = subtotal + shipping - discount

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
        <div className="text-center">
          <ShoppingBag className="mx-auto h-24 w-24 text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-600 mb-6">Agrega productos para comenzar tu compra</p>
          <Link
            to="/catalog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ShoppingBag className="h-5 w-5" />
            Explorar productos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link to="/catalog" className="inline-flex items-center gap-2 text-gray-600 hover:text-primary mb-4">
            <ArrowLeft className="h-5 w-5" />
            Continuar comprando
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold">Carrito de Compras</h1>
          <p className="text-gray-600 mt-2">{cartItems.length} productos en tu carrito</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Items List */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 md:p-6 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-lg"
                  />
                  
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="font-semibold text-lg">{item.name}</h3>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        aria-label={`Eliminar ${item.name}`}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          disabled={item.quantity <= 1}
                          className="p-2 border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                          aria-label="Disminuir cantidad"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="font-semibold w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-2 border rounded-lg hover:bg-gray-50 transition-colors"
                          aria-label="Aumentar cantidad"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-500">${item.price.toFixed(2)} c/u</p>
                        <p className="text-xl font-bold text-primary">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
              <h2 className="text-xl font-bold mb-6">Resumen del pedido</h2>

              {/* Coupon */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Cupón de descuento</label>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    placeholder="Código de cupón"
                    className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  />
                  <button
                    onClick={applyCoupon}
                    className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg font-medium transition-colors"
                  >
                    Aplicar
                  </button>
                </div>
                {couponError && (
                  <p className="text-sm text-red-600 mt-1">{couponError}</p>
                )}
                {appliedCoupon && (
                  <div className="flex items-center gap-2 mt-2 text-sm text-green-600">
                    <Tag className="h-4 w-4" />
                    <span>Cupón {appliedCoupon.code} aplicado ({appliedCoupon.discount}% descuento)</span>
                  </div>
                )}
                <p className="text-xs text-gray-500 mt-2">Prueba: SAVE10, SAVE20, WELCOME</p>
              </div>

              {/* Price Details */}
              <div className="space-y-3 mb-6 pb-6 border-b">
                <div className="flex justify-between">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Envío</span>
                  <span className="font-semibold">
                    {shipping === 0 ? 'GRATIS' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {appliedCoupon && (
                  <div className="flex justify-between text-green-600">
                    <span>Descuento ({appliedCoupon.discount}%)</span>
                    <span className="font-semibold">-${discount.toFixed(2)}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">Total</span>
                <span className="text-2xl font-bold text-primary">${total.toFixed(2)}</span>
              </div>

              <button 
                onClick={() => alert('🎉 Redirigiendo al proceso de pago seguro...')}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-3"
              >
                Proceder al pago
              </button>

              <Link
                to="/catalog"
                className="block w-full text-center border border-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Continuar comprando
              </Link>

              {subtotal < 100 && (
                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-blue-800">
                    Agrega ${(100 - subtotal).toFixed(2)} más para <strong>envío gratis</strong>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}