import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChartBar, Heart, LogOut, Menu, Moon, ShoppingCart, Sun, User, X } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { useWishlist } from '../context/WishlistContext';
import { useCompare } from '../context/CompareContext';
import { SearchBar } from './SearchBar';
import { ThemeToggle } from './ThemeToggle';
import { AuthModal } from './AuthModal';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authModalMode, setAuthModalMode] = useState<'login' | 'signup'>('login');
  const { items } = useCart();
  const { currentUser, logout } = useAuth();
  const { theme } = useTheme();
  const { wishlist } = useWishlist();
  const { compareList } = useCompare();
  const location = useLocation();
  
  // Close mobile menu when location changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);
  
  const handleOpenAuth = (mode: 'login' | 'signup') => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };
  
  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className={`${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b shadow-sm py-4 px-6 sticky top-0 z-50 transition-colors duration-200`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className={`text-xl font-bold ${theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600'} flex items-center`}>
          <span className="bg-indigo-600 text-white p-1.5 rounded-lg mr-2">ER</span>
          ElectroRental
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-between flex-1 ml-8">
          <div className="flex items-center space-x-8">
            <Link to="/" className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition ${location.pathname === '/' ? `font-medium ${theme === 'dark' ? 'text-white' : 'text-indigo-600'}` : ''}`}>
              Home
            </Link>
            <Link to="/categories" className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition ${location.pathname === '/categories' ? `font-medium ${theme === 'dark' ? 'text-white' : 'text-indigo-600'}` : ''}`}>
              Categories
            </Link>
            <Link to="/how-it-works" className={`${theme === 'dark' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition ${location.pathname === '/how-it-works' ? `font-medium ${theme === 'dark' ? 'text-white' : 'text-indigo-600'}` : ''}`}>
              How It Works
            </Link>
          </div>
          
          <SearchBar />
          
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="relative">
              <Heart className={`h-6 w-6 ${wishlist.length > 0 ? 'text-red-500' : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition`} />
              {wishlist.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {wishlist.length}
                </span>
              )}
            </Link>
            
            <Link to="/compare" className="relative">
              <ChartBar className={`h-6 w-6 ${compareList.length > 0 ? theme === 'dark' ? 'text-yellow-400' : 'text-yellow-500' : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition`} />
              {compareList.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {compareList.length}
                </span>
              )}
            </Link>
            
            <Link to="/cart" className="relative">
              <ShoppingCart className={`h-6 w-6 ${items.length > 0 ? theme === 'dark' ? 'text-indigo-400' : 'text-indigo-600' : theme === 'dark' ? 'text-gray-400 hover:text-white' : 'text-gray-700 hover:text-indigo-600'} transition`} />
              {items.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  {items.length}
                </span>
              )}
            </Link>
            
            <ThemeToggle />
          </div>
        
          {currentUser ? (
            <div className="relative group">
              <button className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-800">
                <User className="h-5 w-5" />
                <span className="font-medium">{currentUser.displayName || 'User'}</span>
              </button>
              <div className="absolute right-0 w-48 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <div className="px-4 py-3">
                  <p className="text-sm text-gray-500">Signed in as</p>
                  <p className="text-sm font-medium text-gray-900 truncate">{currentUser.email}</p>
                </div>
                <div className="py-1">
                  <button
                    onClick={handleLogout}
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 w-full text-left"
                  >
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign out
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex items-center space-x-4">
              <button
                onClick={() => handleOpenAuth('login')}
                className="text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => handleOpenAuth('signup')}
                className="bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg px-4 py-2 text-sm font-medium transition"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <Link to="/cart" className="relative mr-4">
            <ShoppingCart className={`h-6 w-6 ${items.length > 0 ? 'text-indigo-600' : 'text-gray-700'}`} />
            {items.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                {items.length}
              </span>
            )}
          </Link>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700">
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 py-2 px-4 bg-white absolute top-16 left-0 right-0 z-50 border-b shadow-md flex flex-col space-y-4">
          <Link to="/" className={`text-gray-700 py-2 ${location.pathname === '/' ? 'font-medium text-indigo-600' : ''}`}>
            Home
          </Link>
          <Link to="/categories" className={`text-gray-700 py-2 ${location.pathname === '/categories' ? 'font-medium text-indigo-600' : ''}`}>
            Categories
          </Link>
          <Link to="/how-it-works" className={`text-gray-700 py-2 ${location.pathname === '/how-it-works' ? 'font-medium text-indigo-600' : ''}`}>
            How It Works
          </Link>
          <Link to="/contact" className={`text-gray-700 py-2 ${location.pathname === '/contact' ? 'font-medium text-indigo-600' : ''}`}>
            Contact
          </Link>
          
          {currentUser ? (
            <>
              <div className="border-t pt-2 text-gray-600 font-medium">
                Signed in as: {currentUser.displayName || 'User'}
              </div>
              <button 
                onClick={handleLogout}
                className="flex items-center text-red-500 py-2"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sign out
              </button>
            </>
          ) : (
            <div className="flex flex-col space-y-2 pt-2 border-t">
              <button
                onClick={() => handleOpenAuth('login')}
                className="text-indigo-600 py-2 font-medium"
              >
                Sign In
              </button>
              <button
                onClick={() => handleOpenAuth('signup')}
                className="bg-indigo-600 text-white rounded-lg py-2 font-medium"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      )}
      
      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
        initialMode={authModalMode}
      />
    </nav>
  );
};
