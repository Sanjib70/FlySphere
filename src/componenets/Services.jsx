import {
  CreditCard,
  Headphones,
  Luggage,
  Phone,
  Plane,
  ShieldCheck,
  Ticket,
  UtensilsCrossed,
  Wifi,
} from 'lucide-react';

const Services = [
  {
    title: 'Flight Booking',
    description: 'Book domestic and international flights easily.',
    icon: <Plane className="h-8 w-8 text-blue-500 mb-4" />,
    features: [
      'One-way & round-trip booking',
      'Multi-city itineraries',
      'Flexible date search',
      'Seat selection',
    ],
  },
  {
    title: 'Baggage Services',
    description: 'Check-in, carry-on, and additional baggage help.',
    icon: <Luggage className="h-8 w-8 text-green-500 mb-4" />,
    features: [
      'Baggage allowance info',
      'Extra baggage purchase',
      'Lost & found support',
    ],
  },
  {
    title: 'Ticketing',
    description: 'Access and manage your tickets anytime.',
    icon: <Ticket className="h-8 w-8 text-purple-500 mb-4" />,
    features: [
      'E-tickets',
      'Cancellations & modifications',
      'Boarding pass download',
    ],
  },
  {
    title: 'In-Flight Meals',
    description: 'Delicious meals and beverages on board.',
    icon: <UtensilsCrossed className="h-8 w-8 text-yellow-500 mb-4" />,
    features: [
      'Meal selection',
      'Special dietary options',
      'Beverage service',
    ],
  },
  {
    title: 'Wi-Fi & Connectivity',
    description: 'Stay connected in the air.',
    icon: <Wifi className="h-8 w-8 text-orange-500 mb-4" />,
    features: ['Wi-Fi access', 'Charging ports', 'Satellite phone'],
  },
  {
    title: 'Entertainment',
    description: 'Relax and enjoy your journey.',
    icon: <Headphones className="h-8 w-8 text-pink-500 mb-4" />,
    features: ['Movies & TV', 'Music', 'Games & magazines'],
  },
  {
    title: 'Travel Insurance',
    description: 'Comprehensive travel insurance plans.',
    icon: <ShieldCheck className="h-8 w-8 text-cyan-500 mb-4" />,
    features: [
      'Trip cancellation coverage',
      'Medical coverage',
      'Lost baggage assistance',
    ],
  },
  {
    title: 'Payment Options',
    description: 'Multiple secure payment methods.',
    icon: <CreditCard className="h-8 w-8 text-indigo-500 mb-4" />,
    features: [
      'Credit/Debit cards',
      'UPI & wallets',
      'Net banking',
    ],
  },
  {
    title: 'Customer Support',
    description: '24/7 support for all your needs.',
    icon: <Phone className="h-8 w-8 text-gray-400 mb-4" />,
    features: [
      'Phone & chat support',
      'Email assistance',
      'FAQs and helpdesk',
    ],
  },
];

export default Services;
