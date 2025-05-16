import { PageTransition } from '../components/PageTransition';

export const AboutPage = () => {
  return (
    <PageTransition>
      <div className="max-w-6xl mx-auto py-8 px-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">About ElectroRental</h1>
        
        {/* Company Overview */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Who We Are</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="text-gray-600 mb-4">
                Founded in 2021, ElectroRental is a leading electronics rental service providing consumers and businesses with access to premium technology without the commitment of purchasing.
              </p>
              <p className="text-gray-600 mb-4">
                Our mission is to make high-quality electronics accessible to everyone while promoting sustainability through the sharing economy. By enabling people to rent rather than buy, we help reduce electronic waste and make cutting-edge technology more affordable.
              </p>
              <p className="text-gray-600">
                Based in San Francisco with operations across major US cities, ElectroRental offers an extensive catalog of premium electronics, from professional cameras and audio equipment to gaming consoles and smart home devices.
              </p>
            </div>
            <div className="bg-indigo-50 p-8 rounded-lg">
              <h3 className="text-xl font-medium text-indigo-800 mb-4">Our Values</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full h-6 w-6 flex items-center justify-center text-indigo-600 font-bold text-sm mt-0.5 mr-3">1</div>
                  <div>
                    <span className="font-medium text-gray-900">Accessibility</span>
                    <p className="text-gray-600 text-sm">Making premium technology available to everyone</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full h-6 w-6 flex items-center justify-center text-indigo-600 font-bold text-sm mt-0.5 mr-3">2</div>
                  <div>
                    <span className="font-medium text-gray-900">Sustainability</span>
                    <p className="text-gray-600 text-sm">Reducing electronic waste through shared usage</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full h-6 w-6 flex items-center justify-center text-indigo-600 font-bold text-sm mt-0.5 mr-3">3</div>
                  <div>
                    <span className="font-medium text-gray-900">Quality Service</span>
                    <p className="text-gray-600 text-sm">Delivering exceptional customer experiences</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-indigo-100 rounded-full h-6 w-6 flex items-center justify-center text-indigo-600 font-bold text-sm mt-0.5 mr-3">4</div>
                  <div>
                    <span className="font-medium text-gray-900">Innovation</span>
                    <p className="text-gray-600 text-sm">Constantly expanding our offering with the latest tech</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
            <p className="text-gray-600 mb-4">
              ElectroRental was born from a simple observation: many high-quality electronics sit unused for most of their lifespan while remaining financially out of reach for many potential users.
            </p>
            <p className="text-gray-600 mb-4">
              Our founder, Saikiran, experienced this problem firsthand when he needed expensive camera equipment for a short-term project. The experience inspired him to create a platform that would make premium electronics accessible on a temporary basis.
            </p>
            <p className="text-gray-600 mb-4">
              Starting with just cameras and audio equipment, ElectroRental quickly expanded to include laptops, gaming systems, and smart home devices. Our user base grew from local photographers and filmmakers to include students, travelers, event organizers, and businesses.
            </p>
            <p className="text-gray-600">
              Today, ElectroRental serves thousands of customers nationwide, with plans to expand internationally in the coming years. Our mission remains the same: to democratize access to technology while promoting a more sustainable approach to electronics consumption.
            </p>
          </div>
        </section>
        
        {/* Team */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Leadership Team</h2>
          <div className="flex justify-center">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 text-center max-w-md">
              <div className="w-24 h-24 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mx-auto mb-4">
                <span className="text-xl font-bold">SK</span>
              </div>
              <h3 className="text-xl font-medium text-gray-900">Saikiran</h3>
              <p className="text-indigo-600 mb-3">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Visionary entrepreneur with a passion for technology and making premium electronics accessible to everyone. With a strong background in tech and business, Saikiran built ElectroRental from the ground up to revolutionize how people access high-end equipment.
              </p>
            </div>
          </div>
        </section>
        
        {/* Join Us CTA */}
        <section className="bg-gradient-to-r from-indigo-600 to-indigo-800 text-white p-8 rounded-lg">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Join the ElectroRental Family</h2>
            <p className="text-indigo-100 mb-6 max-w-xl mx-auto">
              We're on a mission to transform how people access and use technology. Whether you're a customer, partner, or interested in joining our team, we'd love to connect with you.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact" className="px-6 py-3 bg-white text-indigo-700 rounded-lg font-medium hover:bg-indigo-50 transition">
                Contact Us
              </a>
              <a href="/careers" className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white/10 transition">
                View Careers
              </a>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};
