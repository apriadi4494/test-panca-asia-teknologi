/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import Image from 'next/image';
import { Dropdown } from 'primereact/dropdown';
import React from 'react';
import { languages } from '@/commons/fixtures/languages';

function BoxImage(props) {
  const { language, setLanguage } = props;
  return (
    <div className="p-3 grid grid-cols-2 h-20">
      <div className="ml-2">
        <Image src="/images/logo.png" width={219.1} height={63.5} />
      </div>
      <div className="absolute right-0 pr-20">
        <Dropdown value={language} options={languages} onChange={(e) => setLanguage(e.value)} placeholder="Select a City" />
      </div>
    </div>
  );
}

export default React.memo(BoxImage);
