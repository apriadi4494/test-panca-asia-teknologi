/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/image';
import { Dropdown } from 'primereact/dropdown';
import { languages } from '@/commons/fixtures/languages';

function PopText(props) {
  const { section, language, setLanguage } = props;
  return (
    <div>
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
          <div className="rounded-full border border-gray-300 grid justify-center" style={{ width: 28, heigt: 28, backgroundColor: section === 'section3' ? '#FBB32D' : 'white' }}>
            <p className={`font-bold ${section === 'section3' ? 'text-white' : 'text-gray-300'}`}>2</p>
          </div>
          <div className="ml-4">
            <p className={`${section === 'section3' ? 'text-black' : 'text-gray-300'}`}>Payment</p>
          </div>
        </div>
      </div>
      <div className="absolute right-0 pr-7">
        <Dropdown value={language} options={languages} onChange={(e) => setLanguage(e.value)} placeholder="Select a City" />
      </div>
    </div>
  );
}

export default PopText;
