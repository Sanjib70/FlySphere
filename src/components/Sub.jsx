import React from 'react';

function Sub() {
  return (
    <>
    <div>
      <div className="grid lg:grid-cols-4">
        {cardList.map(card =>(
          <div>
            hello world
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Sub