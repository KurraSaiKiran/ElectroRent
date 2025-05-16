import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart, X } from 'lucide-react';
import { useCompare } from '../context/CompareContext';
import { useCart } from '../context/CartContext';
import { PageTransition } from '../components/PageTransition';
import { toast } from 'react-hot-toast';
import { useTheme } from '../context/ThemeContext';

export const ComparePage = () => {
  const { getCompareItems, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();
  const { theme } = useTheme();
  
  const compareItems = getCompareItems();
  
  const handleAddToCart = (product) => {
    addToCart({
      productId: product.id,
      days: 1,
      startDate: new Date().toISOString().split('T')[0]
    });
    toast.success('Added to cart!');
  };
  
  // Get all unique specification keys across all products
  const getAllSpecKeys = () => {
    const keys = new Set();
    compareItems.forEach(item => {
      Object.keys(item.specifications).forEach(key => keys.add(key));
    });
    return Array.from(keys);
  };
  
  const specKeys = getAllSpecKeys();
  
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-8 px-6">
        <Link 
          to="/" 
          className="flex items-center text-indigo-600 dark:text-indigo-400 mb-6 hover:text-indigo-800 dark:hover:text-indigo-300 transition"
        >
          <ArrowLeft className="h-4 w-4 mr-1" /> Back to Home
        </Link>
        
        <div className="flex justify-between items-center mb-8">
          <h1 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Compare Products
          </h1>
          {compareItems.length > 0 && (
            <button
              onClick={clearCompare}
              className="text-red-500 hover:text-red-700 dark:hover:text-red-400 transition flex items-center"
            >
              <X className="h-4 w-4 mr-1" /> Clear All
            </button>
          )}
        </div>
        
        {compareItems.length === 0 ? (
          <div className={`text-center py-12 bg-gray-50 dark:bg-gray-800 rounded-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            <div className="h-16 w-16 mx-auto text-gray-300 dark:text-gray-600 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h2 className={`text-xl font-semibold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              No products to compare
            </h2>
            <p className="mb-6">Add products to compare from product pages</p>
            <Link 
              to="/categories" 
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition inline-block"
            >
              Browse Categories
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className={`w-full border-collapse ${theme === 'dark' ? 'text-gray-200' : 'text-gray-800'}`}>
              {/* Product Headers */}
              <thead>
                <tr>
                  <th className={`text-left p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                    <span className="font-medium">Product</span>
                  </th>
                  {compareItems.map(item => (
                    <th key={item.id} className={`min-w-[250px] p-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-gray-100'}`}>
                      <div className="relative">
                        <button
                          onClick={() => removeFromCompare(item.id)}
                          className="absolute -top-2 -right-2 bg-white dark:bg-gray-700 text-red-500 p-1 rounded-full shadow-sm hover:bg-red-100 dark:hover:bg-gray-600 transition"
                          aria-label="Remove from compare"
                        >
                          <X className="h-4 w-4" />
                        </button>
                        <div className="h-36 mb-4 bg-gray-200 dark:bg-gray-700 rounded overflow-hidden">
                          <img src={item.image} alt={item.name} className="w-full h-full object-contain" />
                        </div>
                        <Link 
                          to={`/product/${item.id}`}
                          className="font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                        >
                          {item.name}
                        </Link>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Price Row */}
                <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className={`p-4 font-medium ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                    Price per day
                  </td>
                  {compareItems.map(item => (
                    <td key={item.id} className="p-4 text-center text-indigo-600 dark:text-indigo-400 font-medium">
                      ${item.pricePerDay}
                    </td>
                  ))}
                </tr>
                {/* Stock Row */}
                <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className={`p-4 font-medium ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                    Availability
                  </td>
                  {compareItems.map(item => (
                    <td key={item.id} className="p-4 text-center">
                      {item.stock > 0 ? (
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${theme === 'dark' ? 'bg-green-900 text-green-300' : 'bg-green-100 text-green-800'}`}>
                          {item.stock} available
                        </span>
                      ) : (
                        <span className={`inline-block px-2 py-1 text-xs rounded-full ${theme === 'dark' ? 'bg-red-900 text-red-300' : 'bg-red-100 text-red-800'}`}>
                          Out of stock
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
                {/* Category Row */}
                <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className={`p-4 font-medium ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                    Category
                  </td>
                  {compareItems.map(item => (
                    <td key={item.id} className="p-4 text-center">
                      <Link to={`/category/${item.categoryId}`} className="text-indigo-600 dark:text-indigo-400 hover:underline">
                        {item.categoryId.charAt(0).toUpperCase() + item.categoryId.slice(1)}
                      </Link>
                    </td>
                  ))}
                </tr>
                {/* Description Row */}
                <tr className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                  <td className={`p-4 font-medium ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                    Description
                  </td>
                  {compareItems.map(item => (
                    <td key={item.id} className="p-4 text-sm">
                      {item.description}
                    </td>
                  ))}
                </tr>
                {/* Specifications Rows */}
                {specKeys.map(key => (
                  <tr key={key} className={`border-b ${theme === 'dark' ? 'border-gray-700' : 'border-gray-200'}`}>
                    <td className={`p-4 font-medium ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                      {key}
                    </td>
                    {compareItems.map(item => (
                      <td key={item.id} className="p-4 text-center">
                        {item.specifications[key] || '—'}
                      </td>
                    ))}
                  </tr>
                ))}
                {/* Actions Row */}
                <tr>
                  <td className={`p-4 font-medium ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                    Action
                  </td>
                  {compareItems.map(item => (
                    <td key={item.id} className="p-4 text-center">
                      <button
                        onClick={() => handleAddToCart(item)}
                        disabled={item.stock <= 0}
                        className={`py-2 px-4 rounded flex items-center justify-center mx-auto transition ${
                          item.stock > 0 
                            ? 'bg-indigo-600 hover:bg-indigo-700 text-white' 
                            : 'bg-gray-300 dark:bg-gray-700 text-gray-500 dark:text-gray-400 cursor-not-allowed'
                        }`}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Add to Cart
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PageTransition>
  );
};
