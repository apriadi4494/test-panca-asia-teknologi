/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Image from 'next/image';
import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import CardPromotion from '../base/cardPromotion';
import { languages } from '@/commons/fixtures/languages';

function Section2(props) {
  const { language, setLanguage, setSection } = props;
  return (
    <div className="text-register px-10 h-screen">
      <div className="grid justify-center text-popup-register">
        <div className="flex rounded-b-md shadow-md py-2 px-5">
          <div className="rounded-full grid justify-center" style={{ width: 28, heigt: 28, backgroundColor: '#FBB32D' }}>
            <p className="font-bold text-white">1</p>
          </div>
          <div className="ml-4">
            <p>Pilih Produk</p>
          </div>
          <div className="grid items-center mx-10">
            <Image src="/images/right.svg" width={8} height={13} />
          </div>
          <div className="rounded-full border border-gray-300 grid justify-center" style={{ width: 28, heigt: 28 }}>
            <p className="font-bold text-gray-300">2</p>
          </div>
          <div className="ml-4">
            <p className="font-bold text-gray-300">Payment</p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 pr-7">
        <Dropdown value={language} options={languages} onChange={(e) => setLanguage(e.value)} placeholder="Select a City" />
      </div>
      <div className="flex gap-5 mt-5">
        <CardPromotion isComplete borderColor="border-blue-600" bgColor="bg-blue-600" textColor="text-blue-600" />
        <CardPromotion borderColor="border-red-400" bgColor="bg-red-400" textColor="text-red-400" />
        <CardPromotion borderColor="border-green-600" bgColor="bg-green-600" textColor="text-green-600" />
      </div>
      <div className="mt-5">
        <div className="grid grid-cols-2 w-full">
          <button onClick={() => setSection('section1')} type="button" className="flex w-full justify-end gap-5 py-3 rounded-l-lg bg-gray-50 border duration-500 hover:bg-gray-200">
            <Image src="/images/arrow-left-gray.svg" alt="arrow-right" width={14} height={16} />
            <p className="mr-5 font-bold">SEBELUMNYA</p>
          </button>
          <button onClick={() => setSection('section3')} type="button" className="flex w-full gap-5 py-3 rounded-r-lg bg-blue-500 border duration-500 hover:bg-blue-700">
            <p className="ml-5 text-white font-bold">SELANJUTNYA</p>
            <Image className="mr-5" src="/images/arrow-right.svg" alt="arrow-left" width={14} height={16} />
          </button>
        </div>
      </div>
      <div className="w-full mt-1">
        <p className="text-blue-700 text-xs text-right">Skip for now</p>
      </div>
    </div>
  );
}

export default React.memo(Section2);
