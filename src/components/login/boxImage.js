/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';
import React from 'react';
import LanguageDropdown from '../base/languageDropdown';

function BoxImage(props) {
  const { language, setLanguage } = props;

  return (
    <div className="p-3 grid grid-cols-2 h-20">
      <div className="ml-2">
        <Image src="/images/logo.png" width={219.1} height={63.5} />
      </div>
      <LanguageDropdown language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default React.memo(BoxImage);
