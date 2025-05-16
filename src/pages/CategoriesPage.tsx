import { CategoryCard } from '../components/CategoryCard';
import { categories } from '../data/mockData';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';

export const CategoriesPage = () => {
  return (
    <PageTransition>
    <div className="max-w-6xl mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">All Categories</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
    </PageTransition>
  );
};
