import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { ProductPage } from './pages/ProductPage';
import { CartPage } from './pages/CartPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { CategoriesPage } from './pages/CategoriesPage';
import { ContactPage } from './pages/ContactPage';
import { AboutPage } from './pages/AboutPage';
import { WishlistPage } from './pages/WishlistPage';
import { ComparePage } from './pages/ComparePage';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from './context/ThemeContext';
import { WishlistProvider } from './context/WishlistContext';
import { CompareProvider } from './context/CompareContext';
import { AnimatePresence } from 'framer-motion';
import { Toaster } from 'react-hot-toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

// Animated Routes wrapper
const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/category/:categoryId" element={<CategoryPage />} />
        <Route path="/product/:productId" element={<ProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/compare" element={<ComparePage />} />
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <ThemeProvider>
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <CompareProvider>
                <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-200">
                  <NavBar />
                  <main className="flex-grow">
                    <AnimatedRoutes />
                  </main>
                  <Footer />
                  <ToastContainer position="bottom-right" theme="colored" />
                  <Toaster position="bottom-center" />
                </div>
              </CompareProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
