import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { toast } from 'react-hot-toast';
import { Product } from '../types';
import { products } from '../data/mockData';

interface WishlistContextType {
  wishlist: string[];
  addToWishlist: (productId: string) => void;
  removeFromWishlist: (productId: string) => void;
  isInWishlist: (productId: string) => boolean;
  getWishlistItems: () => Product[];
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export const WishlistProvider = ({ children }: { children: ReactNode }) => {
  const [wishlist, setWishlist] = useState<string[]>(() => {
    const savedWishlist = localStorage.getItem('electroRentalWishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem('electroRentalWishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToWishlist = (productId: string) => {
    if (!wishlist.includes(productId)) {
      setWishlist(prev => [...prev, productId]);
      toast.success('Added to wishlist!');
    }
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist(prev => prev.filter(id => id !== productId));
    toast.success('Removed from wishlist');
  };

  const isInWishlist = (productId: string) => {
    return wishlist.includes(productId);
  };

  const getWishlistItems = () => {
    return products.filter(product => wishlist.includes(product.id));
  };

  return (
    <WishlistContext.Provider value={{ 
      wishlist, 
      addToWishlist, 
      removeFromWishlist, 
      isInWishlist,
      getWishlistItems
    }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
};
