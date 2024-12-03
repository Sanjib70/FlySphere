import React from 'react';
import cardlist from '../componenets/data.js';

function Normal() {
  return (
    <div className="container mx-auto py-36 px-8">
      <div className="grid lg:grid-cols-4 gap-6">
        {cardlist.map((card) => (
          <div className='shadow-ig roundedlg bg-grey-100' key={card.title}>
            <img className='rounded-t-lg w-20 h-25 ' src={card.img} alt={card.title} />
            <div className='p-5'>
            <h3 className='text-3xl font-bold text-teal-300 mb-3'>{card.title}</h3>
            <p className='text-lg font-normal text-teal-500'>{card.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Normal