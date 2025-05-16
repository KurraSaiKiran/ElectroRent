import { createContext, useContext, useState, ReactNode } from 'react';
import { Product } from '../types';
import { products } from '../data/mockData';
import { toast } from 'react-hot-toast';

interface CompareContextType {
  compareList: string[];
  addToCompare: (productId: string) => void;
  removeFromCompare: (productId: string) => void;
  clearCompare: () => void;
  isInCompareList: (productId: string) => boolean;
  getCompareItems: () => Product[];
}

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider = ({ children }: { children: ReactNode }) => {
  const [compareList, setCompareList] = useState<string[]>([]);

  const addToCompare = (productId: string) => {
    if (compareList.includes(productId)) {
      toast.error('Product already in compare list');
      return;
    }
    
    if (compareList.length >= 3) {
      toast.error('You can compare maximum 3 products');
      return;
    }
    
    setCompareList(prev => [...prev, productId]);
    toast.success('Added to compare list');
  };

  const removeFromCompare = (productId: string) => {
    setCompareList(prev => prev.filter(id => id !== productId));
  };

  const clearCompare = () => {
    setCompareList([]);
  };

  const isInCompareList = (productId: string) => {
    return compareList.includes(productId);
  };

  const getCompareItems = () => {
    return products.filter(product => compareList.includes(product.id));
  };

  return (
    <CompareContext.Provider value={{
      compareList,
      addToCompare,
      removeFromCompare,
      clearCompare,
      isInCompareList,
      getCompareItems
    }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};
