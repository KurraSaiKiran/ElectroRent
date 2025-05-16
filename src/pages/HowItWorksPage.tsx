import { ArrowDownRight } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { motion } from 'framer-motion';

export const HowItWorksPage = () => {
  return (
    <PageTransition>
    <div className="max-w-6xl mx-auto py-8 px-6">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">How ElectroRental Works</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Rent Electronics?</h2>
          <p className="text-gray-600 mb-4">
            Renting electronics offers a cost-effective alternative to purchasing expensive gadgets 
            that you may only need temporarily. Whether you're a professional needing specialized 
            equipment for a project, a creator looking to try new gear, or someone who wants to test 
            a product before committing to a purchase, ElectroRental provides a flexible solution.
          </p>
          <p className="text-gray-600">
            Our service allows you to access premium electronics without the full investment, 
            making high-end technology accessible to everyone.
          </p>
        </div>
        <div className="bg-indigo-50 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-indigo-900 mb-4">Benefits of Renting</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <ArrowDownRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
              <span className="text-gray-700">Try before you buy expensive equipment</span>
            </li>
            <li className="flex items-start">
              <ArrowDownRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
              <span className="text-gray-700">Save money on one-time or short-term needs</span>
            </li>
            <li className="flex items-start">
              <ArrowDownRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
              <span className="text-gray-700">Access to the latest technology without commitment</span>
            </li>
            <li className="flex items-start">
              <ArrowDownRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
              <span className="text-gray-700">Environmentally friendly alternative to buying</span>
            </li>
            <li className="flex items-start">
              <ArrowDownRight className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
              <span className="text-gray-700">No maintenance or storage concerns</span>
            </li>
          </ul>
        </div>
      </div>
      
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Rental Process</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">1</div>
          <h3 className="text-xl font-medium text-gray-800 mb-3 mt-4">Browse & Select</h3>
          <p className="text-gray-600">
            Browse our categories and choose from our wide range of premium electronics. 
            Each product listing includes detailed specifications and daily rental rates.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">2</div>
          <h3 className="text-xl font-medium text-gray-800 mb-3 mt-4">Book & Pay</h3>
          <p className="text-gray-600">
            Select your rental duration and start date. Add items to your cart and complete 
            the booking process by providing your contact and delivery information.
          </p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-md relative">
          <div className="absolute -top-4 -left-4 w-10 h-10 bg-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold">3</div>
          <h3 className="text-xl font-medium text-gray-800 mb-3 mt-4">Receive & Return</h3>
          <p className="text-gray-600">
            Your rented items will be delivered on your selected date. Use them for your 
            rental period, then return them using our simple return process when done.
          </p>
        </div>
      </div>
      
      <div className="bg-gray-50 p-8 rounded-lg border">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">What if I want to extend my rental?</h3>
            <p className="text-gray-600">
              You can request an extension through your account if the item isn't already booked by someone else. 
              Additional daily rates will apply.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Is there a security deposit?</h3>
            <p className="text-gray-600">
              Yes, we require a refundable security deposit for most items. The specific amount varies 
              depending on the value of the equipment being rented.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">What happens if the equipment is damaged?</h3>
            <p className="text-gray-600">
              Minor wear and tear is expected, but significant damage may result in additional charges. 
              We offer optional insurance plans to cover potential damages.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium text-gray-800 mb-2">Can I cancel my reservation?</h3>
            <p className="text-gray-600">
              Cancellations made at least 48 hours before the scheduled rental date are eligible for a full refund. 
              Late cancellations may be subject to a cancellation fee.
            </p>
          </div>
        </div>
      </div>
    </div>
    </PageTransition>
  );
};
