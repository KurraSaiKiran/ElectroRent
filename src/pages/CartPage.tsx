import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Loader, ShoppingBag, Trash2 } from 'lucide-react';
import { format, addDays } from 'date-fns';
import { useCart } from '../context/CartContext';
import { products } from '../data/mockData';
import { BookingDetails, Product } from '../types';
import { submitBooking } from '../services/apiService';
import { toast } from 'react-toastify';
import { PageTransition } from '../components/PageTransition';
import { useAuth } from '../context/AuthContext';

interface CartProduct {
  productId: string;
  days: number;
  startDate: string;
  endDate?: string;
  product?: Product;
  total: number;
}

export const CartPage = () => {
  const { items, removeFromCart, updateCartItem, clearCart } = useCart();
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    name: '',
    email: '',
    phone: '',
    address: ''
  });
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // Check if user is authenticated
  useEffect(() => {
    if (!currentUser) {
      toast.error('You must be logged in to access the cart.');
      navigate('/');
    }
  }, [currentUser, navigate]);
  
  // Map cart items to products
  const cartProducts: CartProduct[] = items.map(item => {
    const product = products.find(p => p.id === item.productId);
    return {
      ...item,
      product,
      total: product ? product.pricePerDay * item.days : 0
    };
  });
  
  const subtotal = cartProducts.reduce((sum, item) => sum + item.total, 0);
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Submit booking to API
      await submitBooking(items, bookingDetails);
      setIsSuccess(true);
      clearCart();
      toast.success('Order placed successfully!');
    } catch (error) {
      console.error('Booking error:', error);
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };
  
  if (isSuccess) {
    return (
      <PageTransition>
      <div className="max-w-3xl mx-auto py-16 px-6">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Order Placed Successfully!</h1>
          <p className="text-gray-600 mb-8">
            Thank you for your order. A confirmation has been sent to your email.
          </p>
          <Link 
            to="/" 
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
      </PageTransition>
    );
  }
  
  if (items.length === 0) {
    return (
      <PageTransition>
      <div className="max-w-6xl mx-auto py-16 px-6 text-center">
        <ShoppingBag className="h-16 w-16 mx-auto text-gray-300 mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600 mb-8">
          Looks like you haven't added any products to your cart yet.
        </p>
        <Link 
          to="/" 
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
        >
          Start Shopping
        </Link>
      </div>
      </PageTransition>
    );
  }
  
  return (
    <PageTransition>
    <div className="max-w-6xl mx-auto py-8 px-6">
      <Link 
        to="/" 
        className="flex items-center text-indigo-600 mb-6 hover:text-indigo-800 transition"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Continue Shopping
      </Link>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Your Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          {cartProducts.map((item) => (
            <div key={item.productId} className="flex flex-col sm:flex-row gap-4 p-4 bg-white rounded-lg shadow-sm mb-4">
              {item.product && (
                <div className="w-full sm:w-24 h-24 bg-gray-100 rounded-md overflow-hidden">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="flex-grow">
                <div className="flex justify-between">
                  <h3 className="font-medium">{item.product?.name}</h3>
                  <button 
                    onClick={() => removeFromCart(item.productId)}
                    className="text-gray-400 hover:text-red-500 transition"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
                <p className="text-gray-600 text-sm">${item.product?.pricePerDay}/day</p>
                <div className="mt-2 flex flex-wrap gap-4">
                  <div>
                    <label className="block text-xs text-gray-500">Duration</label>
                    <select 
                      value={item.days}
                      onChange={(e) => updateCartItem(item.productId, parseInt(e.target.value), item.startDate)}
                      className="mt-1 py-1 px-2 border rounded text-sm"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 14, 30].map(day => (
                        <option key={day} value={day}>{day} {day === 1 ? 'day' : 'days'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500">Start Date</label>
                    <input
                      type="date"
                      min={format(new Date(), 'yyyy-MM-dd')}
                      value={item.startDate}
                      onChange={(e) => updateCartItem(item.productId, item.days, e.target.value)}
                      className="mt-1 py-1 px-2 border rounded text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500">Return Date</label>
                    <div className="mt-1 py-1 px-2 text-sm">
                      {item.endDate 
                        ? format(new Date(item.endDate), 'MMM d, yyyy')
                        : format(addDays(new Date(item.startDate), item.days), 'MMM d, yyyy')}
                    </div>
                  </div>
                </div>
                <div className="mt-2 text-right font-medium">
                  ${((item.product?.pricePerDay || 0) * item.days).toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          {!isCheckout ? (
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <div className="border-b pb-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <button
                onClick={() => setIsCheckout(true)}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition"
              >
                Proceed to Checkout
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold mb-4">Customer Information</h2>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  value={bookingDetails.name}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-sm">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  value={bookingDetails.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-sm">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={bookingDetails.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-1 text-sm">Address</label>
                <textarea
                  name="address"
                  required
                  value={bookingDetails.address}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-3 py-2 border rounded focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                />
              </div>
              
              <div className="flex justify-between font-semibold text-lg mb-6">
                <span>Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              
              <button
                type="submit"
                disabled={isLoading}
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition flex items-center justify-center"
              >
                {isLoading ? (
                  <>
                    <Loader className="h-5 w-5 mr-2 animate-spin" />
                    Processing...
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
    </PageTransition>
  );
};
