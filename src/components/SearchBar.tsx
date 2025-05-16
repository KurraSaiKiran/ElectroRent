import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/mockData';
import { useTheme } from '../context/ThemeContext';

export const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef(null);
  const { theme } = useTheme();

  useEffect(() => {
    // Handle clicks outside of search to close results
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsSearchOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const term = searchTerm.toLowerCase().trim();
    const filtered = products.filter(product => 
      product.name.toLowerCase().includes(term) || 
      product.description.toLowerCase().includes(term)
    ).slice(0, 5); // Limit to 5 results
    
    setSearchResults(filtered);
  }, [searchTerm]);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);
    setIsSearchOpen(value.trim() !== '');
  };

  const clearSearch = () => {
    setSearchTerm('');
    setIsSearchOpen(false);
  };

  const highlightMatch = (text, term) => {
    if (!term.trim()) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    const parts = text.split(regex);
    
    return parts.map((part, i) => 
      regex.test(part) ? <span key={i} className="bg-yellow-200 dark:bg-yellow-700">{part}</span> : part
    );
  };

  return (
    <div className="relative max-w-sm w-full" ref={searchRef}>
      <div className={`flex items-center px-3 py-2 rounded-lg border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-300'}`}>
        <Search className={`h-5 w-5 mr-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className={`flex-grow outline-none ${theme === 'dark' ? 'bg-gray-800 text-white placeholder-gray-400' : 'bg-white text-gray-800 placeholder-gray-500'}`}
        />
        {searchTerm && (
          <button onClick={clearSearch} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {isSearchOpen && searchResults.length > 0 && (
        <div className={`absolute z-50 mt-1 w-full rounded-lg shadow-lg overflow-hidden ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'}`}>
          <ul>
            {searchResults.map(product => (
              <li key={product.id} className="border-b last:border-b-0 dark:border-gray-700">
                <Link
                  to={`/product/${product.id}`}
                  onClick={clearSearch}
                  className={`flex items-center p-3 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors`}
                >
                  <div className="h-12 w-12 bg-gray-100 dark:bg-gray-600 rounded overflow-hidden mr-3 flex-shrink-0">
                    <img src={product.image} alt={product.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className={`font-medium truncate ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                      {highlightMatch(product.name, searchTerm)}
                    </h4>
                    <div className={`text-sm truncate ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                      ${product.pricePerDay}/day
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
