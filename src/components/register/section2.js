/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import React from 'react';
import CardPromotion from '../base/cardPromotion';

function Section2() {
  return (
    <div className="text-register px-10">
      <div className="flex gap-5 mt-5">
        <CardPromotion isComplete borderColor="border-blue-600" bgColor="bg-blue-600" textColor="text-blue-600" />
        <CardPromotion borderColor="border-red-400" bgColor="bg-red-400" textColor="text-red-400" />
        <CardPromotion borderColor="border-green-600" bgColor="bg-green-600" textColor="text-green-600" />
      </div>
    </div>
  );
}

export default React.memo(Section2);
