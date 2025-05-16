import { Link } from 'react-router-dom';
import { ChartBar, Heart, Lock } from 'lucide-react';
import { Product } from '../types';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';
import { useState } from 'react';
import { AuthModal } from './AuthModal';

interface ProductCardProps {
  product: Product;
  className?: string;
}

export const ProductCard = ({ product, className = '' }: ProductCardProps) => {
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { isInCompareList, addToCompare, removeFromCompare } = useCompare();
  const { theme } = useTheme();
  const { currentUser } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const isWishlisted = isInWishlist(product.id);
  const isCompared = isInCompareList(product.id);
  
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    
    if (isWishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };
  
  const handleCompareClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (!currentUser) {
      setIsAuthModalOpen(true);
      return;
    }
    
    if (isCompared) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product.id);
    }
  };
  
  const handleProductClick = (e: React.MouseEvent) => {
    if (!currentUser) {
      e.preventDefault();
      setIsAuthModalOpen(true);
    }
  };

  return (
    <>
      <Link 
        to={`/product/${product.id}`} 
        onClick={handleProductClick}
        className={`group block rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className} bg-white`}
      >
        <div className="aspect-square overflow-hidden bg-gray-100 relative">
          <img 
            src={product.image} 
            alt={product.name} 
            className={`w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 ${!currentUser ? 'blur-sm' : ''}`}
          />
          {!currentUser && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
              <Lock className="h-8 w-8 text-white" />
            </div>
          )}
          <div className="absolute top-2 right-2 flex flex-col space-y-2">
            <button
              onClick={handleWishlistClick}
              className={`p-1.5 rounded-full shadow-md transition ${
                isWishlisted 
                  ? 'bg-red-50 text-red-500 hover:bg-red-100 dark:bg-red-900 dark:text-red-300 dark:hover:bg-red-800' 
                  : 'bg-white text-gray-400 hover:text-red-500 dark:bg-gray-800 dark:hover:text-red-400'
              }`}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >
              <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            
            <button
              onClick={handleCompareClick}
              className={`p-1.5 rounded-full shadow-md transition ${
                isCompared 
                  ? 'bg-yellow-50 text-yellow-600 hover:bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300 dark:hover:bg-yellow-800' 
                  : 'bg-white text-gray-400 hover:text-yellow-500 dark:bg-gray-800 dark:hover:text-yellow-400'
              }`}
              aria-label={isCompared ? 'Remove from compare' : 'Add to compare'}
            >
              <ChartBar className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors">
            {product.name}
          </h3>
          <div className="mt-1 flex justify-between items-center">
            <div className="text-indigo-600 font-medium">${product.pricePerDay}/day</div>
            {product.stock > 0 ? (
              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                {product.stock} available
              </span>
            ) : (
              <span className="text-xs px-2 py-1 rounded-full bg-red-100 text-red-800">
                Out of stock
              </span>
            )}
          </div>
        </div>
      </Link>
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode="login" 
      />
    </>
  );
};
