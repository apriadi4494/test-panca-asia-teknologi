/* eslint-disable import/no-unresolved */
/* eslint-disable import/order */
/* eslint-disable import/extensions */
import { ENGLISH, INDONESIA } from '@/commons/fixtures/label';
import { useEffect, useState } from 'react';
import LeftPannel from '@/components/register/leftPannel';
import RightPannel from '@/components/register/rightPannel';

function Register() {
  const [language, setLanguage] = useState('eng');
  const [label, setLabel] = useState(ENGLISH);

  useEffect(() => {
    const chooseLabel = language === 'eng' ? ENGLISH : INDONESIA;
    setLabel(chooseLabel);
  }, [language]);

  return (
    <div className="grid grid-cols-2 w-full">
      {/* LEFT PANNEL */}
      <LeftPannel label={label} />
      <RightPannel language={language} setLanguage={setLanguage} />
    </div>
  );
}

export default Register;
