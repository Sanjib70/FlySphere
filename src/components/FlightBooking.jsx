import { CheckCircle, CreditCard, MapPin, Plane, User } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function FlightBooking() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Personal Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    dob: '',
    gender: '',

    // Address
    streetAddress: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',

    // Payment
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',

    // Terms
    acceptTerms: false,

    // Flight Details (will be populated from selected flight)
    flightDetails: null,
  });

  // Get selected flight data from the location state
  useEffect(() => {
    if (location.state && location.state.selectedFlight) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        flightDetails: location.state.selectedFlight,
      }));
    } else {
      // If no selected flight data, redirect to the search page
      navigate('/search-flights'); // Assuming your search page route is '/search-flights'
    }
  }, [location, navigate]);

  // Mock flight data (fallback in case of issues with location state)
  const selectedFlight = formData.flightDetails || {
    from: 'New York (JFK)',
    to: 'London (LHR)',
    departureDate: '2025-06-15',
    departureTime: '10:30 AM',
    arrivalTime: '10:45 PM',
    flightNumber: 'FL1234',
    airline: 'Global Airways',
    price: '$745.00',
    duration: '7h 15m',
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    navigate('/BookinDetails', { state: bookingData });
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
    window.scrollTo(0, 0);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo(0, 0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would submit the form data to a backend here
    console.log('Form submitted:', formData);
    setCurrentStep(4); // Move to confirmation step
  };

  // Form validation
  const isPersonalDetailsValid = () => {
    const { firstName, lastName, email, phone, dob, gender } = formData;
    return firstName && lastName && email && phone && dob && gender;
  };

  const isAddressValid = () => {
    const { streetAddress, city, state, zipCode, country } = formData;
    return streetAddress && city && state && zipCode && country;
  };

  const isPaymentValid = () => {
    const { paymentMethod, cardNumber, cardName, expiryDate, cvv, acceptTerms } = formData;
    if (paymentMethod === 'credit') {
      return cardNumber && cardName && expiryDate && cvv && acceptTerms;
    }
    return acceptTerms;
  };

  // Render nothing if flight details are not yet loaded
  if (!formData.flightDetails && location.state?.selectedFlight === undefined) {
    return <div>Loading flight details...</div>; // Or a more informative loading state
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        {/* Header */}
        <div className="bg-blue-600 text-white p-6">
          <h1 className="text-2xl font-bold">Complete Your Booking</h1>
          <div className="flex items-center mt-4">
            <Plane size={24} className="mr-2" />
            <div>
              <p className="font-medium">
                {selectedFlight.from} → {selectedFlight.to}
              </p>
              <p className="text-sm">
                {selectedFlight.departureDate} • {selectedFlight.flightNumber}
              </p>
            </div>
          </div>
          <div>
              <p className="text-xl font-bold">{selectedFlight.price}</p>
          </div>
        </div>

        {/* Progress Steps */}
        <div className="flex border-b">
          <div
            className={`flex-1 text-center py-4 ${
              currentStep >= 1
                ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                : ''
            }`}
          >
            <span className="hidden md:inline">Personal Details</span>
            <span className="md:hidden">1. Details</span>
          </div>
          <div
            className={`flex-1 text-center py-4 ${
              currentStep >= 2
                ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                : ''
            }`}
          >
            <span className="hidden md:inline">Address Information</span>
            <span className="md:hidden">2. Address</span>
          </div>
          <div
            className={`flex-1 text-center py-4 ${
              currentStep >= 3
                ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                : ''
            }`}
          >
            <span className="hidden md:inline">Payment Method</span>
            <span className="md:hidden">3. Payment</span>
          </div>
          <div
            className={`flex-1 text-center py-4 ${
              currentStep >= 4
                ? 'border-b-2 border-blue-600 text-blue-600 font-medium'
                : ''
            }`}
          >
            <span className="hidden md:inline">Confirmation</span>
            <span className="md:hidden">4. Confirm</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div className="p-6">
              <div className="flex items-center mb-6">
                <User size={24} className="text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Personal Details</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name*
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name*
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Birth*
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gender*
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="non-binary">Non-binary</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end mt-6">
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isPersonalDetailsValid()}
                  className={`px-6 py-2 rounded text-white ${
                    isPersonalDetailsValid()
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue to Address
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Address Information */}
          {currentStep === 2 && (
            <div className="p-6">
              <div className="flex items-center mb-6">
                <MapPin size={24} className="text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Address Information</h2>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Street Address*
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    City*
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    State/Province*
                  </label>
                  <input
                    type="text"
                    name="state"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    ZIP/Postal Code*
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Country*
                  </label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select Country</option>
                    <option value="us">United States</option>
                    <option value="ca">Canada</option>
                    <option value="uk">United Kingdom</option>
                    <option value="au">Australia</option>
                    <option value="in">India</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!isAddressValid()}
                  className={`px-6 py-2 rounded text-white ${
                    isAddressValid()
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Continue to Payment
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Payment Method */}
          {currentStep === 3 && (
            <div className="p-6">
              <div className="flex items-center mb-6">
                <CreditCard size={24} className="text-blue-600 mr-2" />
                <h2 className="text-xl font-semibold">Payment Method</h2>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Payment Method*
                </label>
                <div className="flex flex-col space-y-3">
                  <label className="flex items-center p-3 border rounded hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="credit"
                      checked={formData.paymentMethod === 'credit'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>Credit/Debit Card</span>
                  </label>
                  <label className="flex items-center p-3 border rounded hover:bg-gray-50">
                    <input
                      type="radio"
                      name="paymentMethod"
                      value="paypal"
                      checked={formData.paymentMethod === 'paypal'}
                      onChange={handleInputChange}
                      className="mr-2"
                    />
                    <span>PayPal</span>
                  </label>
                </div>
              </div>

              {formData.paymentMethod === 'credit' && (
                <div className="mb-6">
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Card Number*
                    </label>
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      placeholder="XXXX XXXX XXXX XXXX"
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Name on Card*
                    </label>
                    <input
                      type="text"
                      name="cardName"
                      value={formData.cardName}
                      onChange={handleInputChange}
                      className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Expiry Date*
                      </label>
                      <input
                        type="text"
                        name="expiryDate"
                        value={formData.expiryDate}
                        onChange={handleInputChange}
                        placeholder="MM/YY"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        CVV*
                      </label>
                      <input
                        type="text"
                        name="cvv"
                        value={formData.cvv}
                        onChange={handleInputChange}
                        placeholder="CVC"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="acceptTerms"
                    checked={formData.acceptTerms}
                    onChange={handleInputChange}
                    className="mr-2"
                    required
                  />
                  <span className="text-sm font-medium">
                    I accept the terms and conditions*
                  </span>
                </label>
              </div>

              <div className="flex justify-between mt-6">
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-6 py-2 bg-gray-300 rounded hover:bg-gray-400"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={!isPaymentValid()}
                  className={`px-6 py-2 rounded text-white ${
                    isPaymentValid()
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-400 cursor-not-allowed'
                  }`}
                >
                  Confirm Booking
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div className="p-6 text-center">
              <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
              <h2 className="text-2xl font-semibold mb-2">
                Booking Confirmed!
              </h2>
              <p className="text-gray-600 mb-6">
                Thank you for your booking. Your ticket details have been sent to
                your email address.
              </p>
              <button
                onClick={() => navigate('/')} // Redirect to home or booking management
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-medium"
              >
                Go to Homepage
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
