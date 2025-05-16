import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem } from '../types';

interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  updateCartItem: (productId: string, days: number, startDate: string) => void;
  clearCart: () => void;
  getTotalDays: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    const savedCart = localStorage.getItem('electroRentalCart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('electroRentalCart', JSON.stringify(items));
  }, [items]);

  const addToCart = (item: CartItem) => {
    setItems(prev => {
      // Check if item already exists in cart
      const existingItemIndex = prev.findIndex(i => i.productId === item.productId);
      if (existingItemIndex >= 0) {
        // Replace the item if it exists
        const newItems = [...prev];
        newItems[existingItemIndex] = item;
        return newItems;
      }
      // Otherwise add new item
      return [...prev, item];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems(prev => prev.filter(item => item.productId !== productId));
  };

  const updateCartItem = (productId: string, days: number, startDate: string, endDate?: string) => {
    setItems(prev => prev.map(item => 
      item.productId === productId ? { ...item, days, startDate, endDate } : item
    ));
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotalDays = () => {
    return items.reduce((total, item) => total + item.days, 0);
  };

  return (
    <CartContext.Provider value={{ 
      items, 
      addToCart, 
      removeFromCart, 
      updateCartItem, 
      clearCart, 
      getTotalDays 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
