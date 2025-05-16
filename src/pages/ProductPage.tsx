import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { format, addDays, differenceInDays, parseISO } from 'date-fns';
import { ArrowLeft, Calendar, ChevronDown, ChevronUp, ShoppingCart, Heart, BarChart3, Lock } from 'lucide-react';
import { products } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { toast } from 'react-toastify';
import { AuthModal } from '../components/AuthModal';
import { Product } from '../types';

export const ProductPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { isInCompareList, addToCompare } = useCompare();
  const { theme } = useTheme();
  const { currentUser } = useAuth();
  
  const [product, setProduct] = useState<Product | null>(null);
  const [startDate, setStartDate] = useState(format(new Date(), 'yyyy-MM-dd'));
  const [endDate, setEndDate] = useState(format(addDays(new Date(), 1), 'yyyy-MM-dd'));
  const [days, setDays] = useState(1);
  const [showSpecs, setShowSpecs] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  // Update days when dates change
  useEffect(() => {
    if (startDate && endDate) {
      const start = parseISO(startDate);
      const end = parseISO(endDate);
      const daysDiff = differenceInDays(end, start);
      
      if (daysDiff < 1) {
        // If end date is before or same as start date, set end date to start date + 1 day
        setEndDate(format(addDays(start, 1), 'yyyy-MM-dd'));
        setDays(1);
      } else {
        setDays(daysDiff);
      }
    }
  }, [startDate, endDate]);
  
  // Update end date when days change manually
  const handleDaysChange = (newDays: number) => {
    const adjustedDays = Math.max(1, newDays);
    setDays(adjustedDays);
    setEndDate(format(addDays(parseISO(startDate), adjustedDays), 'yyyy-MM-dd'));
  };
  
  // Handle start date change
  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    
    // Ensure end date is at least one day after start date
    const start = parseISO(newStartDate);
    const end = parseISO(endDate);
    
    if (differenceInDays(end, start) < 1) {
      setEndDate(format(addDays(start, 1), 'yyyy-MM-dd'));
    }
  };
  
  useEffect(() => {
    const foundProduct = products.find(p => p.id === productId);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      navigate('/');
    }
  }, [productId, navigate]);
  
  if (!product) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }
  
  const handleAddToCart = () => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    
    addToCart({
      productId: product.id,
      days,
      startDate,
      endDate,
    });
    toast.success('Added to cart!');
    navigate('/cart');
  };
  
  const handleAuthAction = (action: string) => {
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return false;
    }
    return true;
  };
  
  const totalPrice = product.pricePerDay * days;
  
  return (
    <PageTransition>
    <div className="max-w-6xl mx-auto py-8 px-6">
      <button 
        onClick={() => navigate(-1)} 
        className={`flex items-center ${theme === 'dark' ? 'text-indigo-400 hover:text-indigo-300' : 'text-indigo-600 hover:text-indigo-800'} mb-6 transition`}
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> Back
      </button>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden bg-white shadow-md relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-auto object-cover ${!currentUser ? 'blur-sm' : ''}`}
          />
          {!currentUser && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-white">
              <Lock className="h-12 w-12 mb-4" />
              <h3 className="text-xl font-bold mb-2">Login Required</h3>
              <p className="text-center max-w-xs mb-4">Please sign in to see detailed product information and rental options</p>
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition font-medium"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
          <div className="text-2xl font-semibold text-indigo-600 mb-4">${product.pricePerDay} <span className="text-gray-500 text-lg font-normal">per day</span></div>
          
          {currentUser ? (
            <>
              <p className="text-gray-700 mb-6">{product.description}</p>
              
              {/* Specifications */}
              <div className="mb-6 border rounded-lg overflow-hidden">
                <button 
                  className="w-full py-3 px-4 bg-gray-100 flex justify-between items-center font-medium text-gray-800"
                  onClick={() => setShowSpecs(!showSpecs)}
                >
                  Specifications
                  {showSpecs ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
                </button>
                {showSpecs && (
                  <div className="p-4 bg-white">
                    <table className="w-full">
                      <tbody>
                        {Object.entries(product.specifications).map(([key, value]) => (
                          <tr key={key} className="border-b last:border-0">
                            <td className="py-2 font-medium text-gray-600">{key}</td>
                            <td className="py-2 text-gray-800">{String(value)}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
              
              {/* Rental Form */}
              <div className="bg-gray-50 p-6 rounded-lg border mb-6">
                <h3 className="font-semibold text-gray-800 mb-4">Rental Details</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-1">Start Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        min={format(new Date(), 'yyyy-MM-dd')}
                        value={startDate}
                        onChange={handleStartDateChange}
                        className="w-full px-4 py-2 border rounded-lg pl-10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      />
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-gray-700 mb-1">End Date</label>
                    <div className="relative">
                      <input
                        type="date"
                        min={format(addDays(parseISO(startDate), 1), 'yyyy-MM-dd')}
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg pl-10 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                      />
                      <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <label className="block text-gray-700 mb-1">Rental Duration (Days)</label>
                  <div className="flex">
                    <button 
                      onClick={() => handleDaysChange(days - 1)}
                      className="px-3 py-2 border rounded-l-lg bg-gray-100 hover:bg-gray-200 transition"
                      disabled={days <= 1}
                    >-</button>
                    <input
                      type="number"
                      min="1"
                      value={days}
                      onChange={(e) => handleDaysChange(parseInt(e.target.value) || 1)}
                      className="w-16 text-center border-t border-b focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none"
                    />
                    <button 
                      onClick={() => handleDaysChange(days + 1)}
                      className="px-3 py-2 border rounded-r-lg bg-gray-100 hover:bg-gray-200 transition"
                    >+</button>
                  </div>
                </div>
                
                <div className="text-gray-700">
                  <p className="mb-1">Start Date: <span className="font-medium">{format(parseISO(startDate), 'MMM d, yyyy')}</span></p>
                  <p>End Date: <span className="font-medium">{format(parseISO(endDate), 'MMM d, yyyy')}</span></p>
                  <p className="mt-4 text-lg font-semibold">
                    Total: <span className="text-indigo-600">${totalPrice.toFixed(2)}</span>
                  </p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={() => {
                    if (handleAuthAction('wishlist')) {
                      isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product.id);
                    }
                  }}
                  className={`py-3 px-4 rounded-lg flex items-center justify-center font-medium transition ${
                    isInWishlist(product.id)
                      ? 'bg-red-100 text-red-600 hover:bg-red-200 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800'
                      : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isInWishlist(product.id) ? 'fill-current' : ''}`} />
                </button>
                
                <button
                  onClick={() => {
                    if (handleAuthAction('compare')) {
                      addToCompare(product.id);
                    }
                  }}
                  disabled={isInCompareList(product.id)}
                  className={`py-3 px-4 rounded-lg flex items-center justify-center font-medium transition ${
                    isInCompareList(product.id)
                      ? 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900 dark:text-yellow-300 cursor-not-allowed'
                      : theme === 'dark' ? 'bg-gray-700 text-gray-300 hover:bg-gray-600' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <BarChart3 className="h-5 w-5" />
                </button>
                
                <button
                  onClick={handleAddToCart}
                  disabled={product.stock <= 0}
                  className={`flex-1 py-3 px-6 rounded-lg flex items-center justify-center font-medium text-white transition ${
                    product.stock > 0 
                      ? 'bg-indigo-600 hover:bg-indigo-700' 
                      : theme === 'dark' ? 'bg-gray-700 text-gray-500 cursor-not-allowed' : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
                </button>
              </div>
              
              {product.stock > 0 && (
                <p className="text-sm text-gray-600 mt-2 text-center">
                  {product.stock} {product.stock === 1 ? 'unit' : 'units'} available for rent
                </p>
              )}
            </>
          ) : (
            <div className="bg-gray-50 p-6 rounded-lg border text-center">
              <p className="text-gray-600 mb-4">Sign in to see detailed product information and rental options</p>
              <button 
                onClick={() => setIsAuthModalOpen(true)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-6 rounded-lg transition font-medium"
              >
                Sign In
              </button>
            </div>
          )}
        </div>
      </div>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode="login" 
      />
    </div>
    </PageTransition>
  );
};
