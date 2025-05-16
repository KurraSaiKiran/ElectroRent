import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart } from 'lucide-react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import { PageTransition } from '../components/PageTransition';
import { useTheme } from '../context/ThemeContext';
import { Product } from '../types';

export const WishlistPage = () => {
  const { getWishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { theme } = useTheme();
  
  const wishlistItems = getWishlistItems();
  
  const handleAddToCart = (product: Product) => {
    removeFromWishlist(product.id);
    addToCart({
      productId: product.id,
      days: 1,
      startDate: new Date().toISOString().split('T')[0]
    });
    toast.success('Added to cart!');
  };
  
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-8 px-6">
        <Link 
          to="/" 
          className="flex items-center text-indigo-600 dark:text-indigo-400 mb-6 hover:text-indigo-800 dark:hover:text-indigo-300 transition"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
        
        <div className="flex items-center mb-8">
          <Heart className="h-6 w-6 text-red-500 mr-3" />
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            My Wishlist
          </h1>
        </div>
        
        {wishlistItems.length === 0 ? (
          <div className={`text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <Heart className="h-16 w-16 mx-auto text-gray-300 dark:text-gray-600 mb-4" />
            <h2 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              Your wishlist is empty
            </h2>
            <p className="mb-6">Items you add to your wishlist will appear here</p>
            <Link 
              to="/categories" 
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition inline-block"
            >
              Browse Categories
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {wishlistItems.map(product => (
              <div 
                key={product.id} 
                className={`rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white'}`}
              >
                <div className="aspect-square overflow-hidden bg-gray-100 dark:bg-gray-700 relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => removeFromWishlist(product.id)}
                    className="absolute top-2 right-2 bg-white dark:bg-gray-800 text-red-500 p-1.5 rounded-full shadow-md hover:bg-red-100 dark:hover:bg-gray-700 transition"
                    aria-label="Remove from wishlist"
                  >
                    <Heart className="h-5 w-5 fill-current" />
                  </button>
                </div>
                <div className="p-4">
                  <Link 
                    to={`/product/${product.id}`}
                    className={`font-semibold hover:text-indigo-600 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
                  >
                    {product.name}
                  </Link>
                  <div className="mt-1 flex justify-between items-center">
                    <div className="text-indigo-600 dark:text-indigo-400 font-medium">${product.pricePerDay}/day</div>
                    {product.stock > 0 ? (
                      <span className={`text-xs px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                        {product.stock} available
                      </span>
                    ) : (
                      <span className={`text-xs px-2 py-1 rounded-full ${theme === 'dark' ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'}`}>
                        Out of stock
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => handleAddToCart(product)}
                    disabled={product.stock <= 0}
                    className={`w-full mt-3 py-2 rounded flex items-center justify-center transition ${
                      product.stock > 0 
                        ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                        : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                    }`}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageTransition>
  );
};
