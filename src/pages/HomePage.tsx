import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { PageTransition } from '../components/PageTransition';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from '../components/ProductCard';
import { CategoryCard } from '../components/CategoryCard';
import { categories, products } from '../data/mockData';
import { AuthModal } from '../components/AuthModal';

export const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);
  
  useEffect(() => {
    // Get featured products
    const featured = products.filter(product => product.featured);
    setFeaturedProducts(featured);
    
    // Add Google fonts
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <PageTransition>
      <div className="min-h-screen" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-indigo-600 to-indigo-800 text-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              Rent Premium Electronics For Your Needs
            </h1>
            <p className="text-lg mb-8 text-indigo-100">
              Access high-quality electronics without the commitment of purchase. Rent by the day and return when done.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/categories" 
                className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-indigo-50 transition shadow-md"
              >
                Browse Categories
              </Link>
              <Link 
                to="/how-it-works" 
                className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition"
              >
                How It Works
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-0 w-full md:w-1/2 h-full opacity-10 pointer-events-none">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')] bg-no-repeat bg-cover"></div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-indigo-50 py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                alt="Happy customer with rented tech" 
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to start renting?</h2>
              <p className="text-lg text-gray-700 mb-6">
                Join hundreds of satisfied customers who save money by renting instead of buying. 
                Get started today and experience the future of tech access.
              </p>
              <button 
                onClick={() => setShowAuthModal(true)} 
                className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition shadow-md"
              >
                Create an Account
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Browse Categories
            </h2>
            <Link to="/categories" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 3).map(category => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
              Featured Products
            </h2>
            <Link to="/products" className="text-indigo-600 font-medium flex items-center hover:text-indigo-800 transition">
              View All <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 text-center mb-12">
            How ElectroRental Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Choose Your Product</h3>
              <p className="text-gray-600">Browse our wide selection of premium electronics and select what you need.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Set Rental Duration</h3>
              <p className="text-gray-600">Select how many days you need the item and your preferred dates.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="w-12 h-12 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="text-xl font-medium text-gray-800 mb-3">Enjoy & Return</h3>
              <p className="text-gray-600">Receive your item, use it for your rental period, then return it when done.</p>
            </div>
          </div>
        </div>
      </section>
      
      
      
      {/* Happy Customer Testimonial */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl overflow-hidden shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="flex mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="h-6 w-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  "ElectroRental has completely changed how I access tech for my projects!"
                </h3>
                <p className="text-gray-700 mb-6">
                  I needed a high-end camera for a weekend photoshoot but couldn't justify buying one. ElectroRental delivered a professional-grade Sony A7 III right to my doorstep. The rental process was seamless, and the equipment was in perfect condition. I'll definitely be using their service again!
                </p>
                <div>
                  <p className="font-bold text-gray-900">Sarah Johnson</p>
                  <p className="text-indigo-600">Freelance Photographer</p>
                </div>
              </div>
              <div className="hidden md:block">
                <img 
                  src="https://mocha-cdn.com/0196d744-b64b-79b1-9c16-5cfc07e41b19/logo2.jpeg" 
                  alt="Happy ElectroRental customer" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} initialMode="signup" />
    </div>
    </PageTransition>
  );
};
