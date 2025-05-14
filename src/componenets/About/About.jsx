import Footer from '../Footer';
import Navbar from '../Navbar';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="bg-slate-900 min-h-screen pt-28 pb-12">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-5xl font-extrabold mb-8">
            About <span className="text-blue-500">FlySphere</span>
          </h1>

          <p className="text-lg leading-relaxed mb-6 text-gray-300">
            <strong className="text-blue-400">FlySphere</strong> is your trusted partner in air travel, committed to providing a seamless, safe,
            and enjoyable flying experience. We bridge people and places across the globe with modern
            aircraft, top-tier service, and cutting-edge technology.
          </p>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-2">🚀 Our Mission</h2>
            <p className="text-gray-300 leading-relaxed">
              To make air travel affordable, accessible, and enjoyable for everyone—while maintaining the
              highest standards of safety, customer satisfaction, and environmental responsibility.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-2">🌟 Why Choose FlySphere?</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>🛫 Convenient domestic and international routes</li>
              <li>🛎️ 24/7 customer support and real-time assistance</li>
              <li>🍽️ Curated in-flight meals and world-class entertainment</li>
              <li>💳 Multiple payment options and secure booking</li>
              <li>🛡️ Comprehensive travel insurance & safety protocols</li>
              <li>♻️ Eco-conscious flying with fuel-efficient aircraft</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold text-white mb-2">🌍 Beyond the Skies</h2>
            <p className="text-gray-300 leading-relaxed">
              At FlySphere, we’re not just flying aircraft—we're flying dreams. With every journey,
              we aim to connect cultures, inspire adventures, and open new possibilities for travelers
              everywhere.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-white mb-2">✈️ Join the Journey</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              Whether you're traveling for business, leisure, or exploration—FlySphere is here to
              elevate your journey. Book with us and experience aviation the way it was meant to be:
              smooth, secure, and memorable.
            </p>

            <div className="text-center">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg">
                <a href='/SearchFlight'>Book Your Flight</a>
              </button>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
