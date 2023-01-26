/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React, { useState } from 'react';
import CardPromotion from '../base/cardPromotion';

function Section2() {
  const [choose, setChoose] = useState(1);
  return (
    <div className="mt-16 lg:mt-0 text-register px-10">
      <div className="sm:flex gap-5 mt-5">
        <CardPromotion index={1} setChoose={setChoose} isComplete={choose === 1} borderColor="border-blue-600" bgColor="bg-blue-600" textColor="text-blue-600" />
        <CardPromotion index={2} setChoose={setChoose} isComplete={choose === 2} borderColor="border-red-400" bgColor="bg-red-400" textColor="text-red-400" />
        <CardPromotion index={3} setChoose={setChoose} isComplete={choose === 3} borderColor="border-green-600" bgColor="bg-green-600" textColor="text-green-600" />
      </div>
    </div>
  );
}

export default React.memo(Section2);
