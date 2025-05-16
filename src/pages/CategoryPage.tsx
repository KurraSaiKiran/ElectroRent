import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { categories, products } from '../data/mockData';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';

export const CategoryPage = () => {
  const { categoryId } = useParams();
  const [category, setCategory] = useState(null);
  const [categoryProducts, setCategoryProducts] = useState([]);
  
  useEffect(() => {
    const foundCategory = categories.find(c => c.id === categoryId);
    if (foundCategory) {
      setCategory(foundCategory);
      
      const filteredProducts = products.filter(p => p.categoryId === categoryId);
      setCategoryProducts(filteredProducts);
    }
  }, [categoryId]);
  
  if (!category) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }
  
  return (
    <PageTransition>
    <div className="max-w-6xl mx-auto py-8 px-6">
      <Link 
        to="/categories" 
        className="flex items-center text-indigo-600 mb-6 hover:text-indigo-800 transition"
      >
        <ArrowLeft className="h-4 w-4 mr-1" /> All Categories
      </Link>
      
      <h1 className="text-3xl font-bold text-gray-900 mb-2">{category.name}</h1>
      <p className="text-gray-600 mb-8">{category.description}</p>
      
      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {categoryProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-gray-50 rounded-lg">
          <p className="text-gray-500">No products available in this category.</p>
        </div>
      )}
    </div>
    </PageTransition>
  );
};
