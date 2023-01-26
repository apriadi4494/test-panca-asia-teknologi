/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useContext } from 'react';
import Image from 'next/image';
import { AuthContext } from '@/providers/authProvider';
import { RegisterContext } from '@/providers/registerProvider';
import LeftPannel from './leftPannel';
import PopText from '../base/popText';
import Section1 from './section1';
import Section2 from './section2';
import Section3 from './section3';
import Section4 from './section4';

export function RegisterContent() {
  const { label, language, setLanguage } = useContext(AuthContext);
  const { section, setSection } = useContext(RegisterContext);

  return (
    <div className="grid lg:grid-cols-7 w-full h-screen">
      {/* LEFT PANNEL */}
      <div className="sticky col-span-3 hidden lg:block h-full">
        <LeftPannel label={label} language={language} setLanguage={setLanguage} />
      </div>
      <div className="col-span-4 h-full">
        {section !== 1 && <PopText language={language} setLanguage={setLanguage} section={section} />}
        {section === 1 && <Section1 language={language} setLanguage={setLanguage} setSection={setSection} />}
        {section === 2 && <Section2 setSection={setSection} />}
        {section === 3 && <Section3 setSection={setSection} />}
        {section === 4 && <Section4 setSection={setSection} />}

        {section !== 1 && section < 4 && (
          <div>
            <div className="bottom-0">
              {' '}
              <div className="mt-5 px-5">
                <div className="grid grid-cols-2 w-full">
                  <button onClick={() => setSection(section - 1)} type="button" className="flex w-full justify-end gap-5 py-3 rounded-l-lg bg-gray-50 border duration-500 hover:bg-gray-200">
                    <Image src="/images/arrow-left-gray.svg" alt="arrow-right" width={14} height={16} />
                    <p className="mr-5 font-bold">SEBELUMNYA</p>
                  </button>
                  <button onClick={() => setSection(section + 1)} type="button" className="flex w-full gap-5 py-3 rounded-r-lg bg-blue-500 border duration-500 hover:bg-blue-700">
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
        )}
      </div>
    </div>
  );
}

export default RegisterContent;
