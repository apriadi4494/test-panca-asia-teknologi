/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import { useEffect, useState } from 'react';
import { ENGLISH, INDONESIA } from '@/commons/fixtures/label';
import BoxLogin from '@/components/login/boxLogin';
import BoxImage from '@/components/login/boxImage';

function Login() {
  const [language, setLanguage] = useState('eng');
  const [label, setLabel] = useState(ENGLISH);

  useEffect(() => {
    const chooseLabel = language === 'eng' ? ENGLISH : INDONESIA;
    setLabel(chooseLabel);
  }, [language]);

  return (
    <div className="md:p-5">
      <BoxImage language={language} setLanguage={setLanguage} />
      <BoxLogin label={label} />
    </div>
  );
}

export default Login;
