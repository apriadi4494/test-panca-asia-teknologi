/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
import { ENGLISH, INDONESIA } from '@/commons/fixtures/label';
import { useEffect, useState } from 'react';
import LeftPannel from '@/components/register/leftPannel';
import Section2 from '@/components/register/section2';
import Section1 from '@/components/register/section1';
import Section3 from '@/components/register/section3';
import Image from 'next/image';
import PopText from '@/components/base/popText';

function Register() {
  const [language, setLanguage] = useState('eng');
  const [label, setLabel] = useState(ENGLISH);
  const [section, setSection] = useState('section1');

  useEffect(() => {
    const chooseLabel = language === 'eng' ? ENGLISH : INDONESIA;
    setLabel(chooseLabel);
  }, [language]);

  return (
    <div className="grid grid-cols-7 w-full">
      {/* LEFT PANNEL */}
      <div className="col-span-3">
        <LeftPannel label={label} language={language} setLanguage={setLanguage} />
      </div>
      <div className="col-span-4 h-screen">
        {section !== 'section1' && <PopText language={language} setLanguage={setLanguage} section={section} />}
        {section === 'section1' && <Section1 language={language} setLanguage={setLanguage} setSection={setSection} />}
        {section === 'section2' && <Section2 setSection={setSection} />}
        {section === 'section3' && <Section3 setSection={setSection} />}

        <div className="mt-5 px-5">
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
        <div className="w-full mt-1 px-5">
          <p className="text-blue-700 text-xs text-right">Skip for now</p>
        </div>
      </div>
    </div>
  );
}

export default Register;
