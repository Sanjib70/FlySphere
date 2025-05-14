import { useState } from 'react';
import cardlist from '../components/data.js';

function Normal() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-4 gap-6">
        {cardlist.map((card, index) => (
          <div 
            className='shadow-lg rounded-lg bg-grey-100 transition-all duration-300 ease-in-out'
            key={card.title}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              transform: hoveredIndex === index ? 'translateY(-10px)' : 'translateY(0)',
              transition: 'all 0.3s ease-in-out'
            }}
          >
            <div 
              className="flex justify-center pt-6 transition-transform duration-300"
              style={{
                transform: hoveredIndex === index ? 'scale(1.2)' : 'scale(1)',
              }}
            >
              <img 
                className='w-20 h-20 object-contain' 
                src={card.img} 
                alt={card.title} 
              />
            </div>
            <div className='p-5 text-center'>
              <h3 
                className='text-3xl font-bold mb-3'
                style={{ 
                  color: '#4CD4A0',
                  textShadow: hoveredIndex === index ? '0 0 8px rgba(76, 212, 160, 0.5)' : 'none'
                }}
              >
                {card.title}
              </h3>
              <p 
                className='text-lg font-normal'
                style={{
                  color: '#4CD4A0',
                  opacity: hoveredIndex === index ? 1 : 0.8,
                }}
              >
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Normal;