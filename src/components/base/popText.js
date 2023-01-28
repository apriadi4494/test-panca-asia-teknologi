/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import React from 'react';
import Image from 'next/image';
import LanguageDropdown from './languageDropdown';

function PopText(props) {
  const { section, language, setLanguage } = props;
  return (
    <div>
      {section < 4 && (
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
            <div className="rounded-full border border-gray-300 grid justify-center" style={{ width: 28, heigt: 28, backgroundColor: section === 3 ? '#FBB32D' : 'white' }}>
              <p className={`font-bold ${section === 3 ? 'text-white' : 'text-gray-300'}`}>2</p>
            </div>
            <div className="ml-4">
              <p className={`${section === 3 ? 'text-black' : 'text-gray-300'}`}>Payment</p>
            </div>
          </div>
        </div>
      )}
      <div className="hidden lg:block right-0 pr-7" style={{ marginTop: section > 3 ? 35 : 0 }}>
        <LanguageDropdown language={language} setLanguage={setLanguage} />
      </div>
    </div>
  );
}

export default PopText;
