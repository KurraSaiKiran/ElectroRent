import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { Loader, Mail, MapPin, Phone, Send } from 'lucide-react';
import { PageTransition } from '../components/PageTransition';
import { submitContactForm } from '../services/apiService';
import { Contact } from '../types';

export const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<Contact>();
  
  const onSubmit = async (data: Contact) => {
    setIsSubmitting(true);
    try {
      const result = await submitContactForm(data);
      console.log('Contact form submitted successfully', result);
      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-8 px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-8">
              Have questions about our rental services or need assistance with your order? 
              Our team is ready to help. Reach out to us via the form or using our contact information.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Email</h3>
                  <a href="mailto:saikiranmlw@gmail.com" className="text-indigo-600 hover:underline">
                    saikiranmlw@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Phone</h3>
                  <a href="tel:8639580649" className="text-indigo-600 hover:underline">
                    +91 8639580649
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="h-6 w-6 text-indigo-600 mr-3 mt-0.5" />
                <div>
                  <h3 className="font-medium text-gray-900">Address</h3>
                  <p className="text-gray-600">
                    Hyderabad, Madhapur
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <iframe 
                title="ElectroRental Location" 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15224.976623731325!2d78.37135422589475!3d17.44601431625698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8f5d20e3%3A0x7b529ad9febc696b!2sMadhapur%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sus!4v1642503834013!5m2!1sen!2sus" 
                className="w-full h-64 rounded-lg border-0 shadow-md"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Send a Message</h2>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors`}
                  placeholder="Your name"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <p className="mt-1 text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">Email</label>
                <input
                  type="email"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors`}
                  placeholder="Your email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 mb-2 font-medium">Phone Number</label>
                <input
                  type="tel"
                  className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors`}
                  placeholder="Your phone number"
                  {...register('phone', { required: 'Phone number is required' })}
                />
                {errors.phone && (
                  <p className="mt-1 text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 mb-2 font-medium">Message</label>
                <textarea
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors`}
                  rows={4}
                  placeholder="How can we help you?"
                  {...register('message', { required: 'Message is required' })}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-red-500 text-sm">{errors.message.message}</p>
                )}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 px-6 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="h-5 w-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};
