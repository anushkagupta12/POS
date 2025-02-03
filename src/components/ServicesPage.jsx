import React from "react";
import { Link } from "react-router-dom";

function ServicesPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Page Header */}
      <header className="bg-blue-500 text-white p-6 text-center">
        <h1 className="text-3xl font-bold">Our Services</h1>
        <p className="mt-2 text-lg">Choose the service that suits your needs.</p>
      </header>

      {/* Services Section */}
      <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Service 1 */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-blue-600">Service 1</h2>
          <p className="mt-2 text-gray-700">
            This is a description of Service 1. It can help you with your needs.
          </p>
          <Link to="/service/1" className="mt-4 inline-block text-blue-500 hover:underline">
            Learn More
          </Link>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-blue-600">Service 2</h2>
          <p className="mt-2 text-gray-700">
            This is a description of Service 2. Let us assist you in achieving your goals.
          </p>
          <Link to="/service/2" className="mt-4 inline-block text-blue-500 hover:underline">
            Learn More
          </Link>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-xl transition-shadow">
          <h2 className="text-xl font-semibold text-blue-600">Service 3</h2>
          <p className="mt-2 text-gray-700">
            Description of Service 3. We provide excellent services for your needs.
          </p>
          <Link to="/service/3" className="mt-4 inline-block text-blue-500 hover:underline">
            Learn More
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>Have a specific need? <Link to="/contact" className="text-blue-400">Contact us</Link> for custom services.</p>
      </footer>
    </div>
  );
}

export default ServicesPage;

