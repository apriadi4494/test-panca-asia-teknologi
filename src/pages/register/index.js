/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
import { ENGLISH, INDONESIA } from '@/commons/fixtures/label';
import { useEffect, useState } from 'react';
import LeftPannel from '@/components/register/leftPannel';
import Section2 from '@/components/register/section2';
import Section1 from '@/components/register/section1';

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
        <LeftPannel label={label} />
      </div>
      <div className="col-span-4">
        {section === 'section1' && <Section1 language={language} setLanguage={setLanguage} setSection={setSection} />}
        {section === 'section2' && <Section2 language={language} setLanguage={setLanguage} setSection={setSection} />}
      </div>
    </div>
  );
}

export default Register;
