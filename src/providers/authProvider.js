/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */
import { ENGLISH, INDONESIA } from '@/commons/fixtures/label';
import axios from 'axios';
import localStorage from 'local-storage';
import React, { useEffect, useState, createContext } from 'react';

const localToken = localStorage.get('token');

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export function AuthProvider({ children }) {
  const [language, setLanguage] = useState('eng');
  const [label, setLabel] = useState(ENGLISH);
  const [loading, setLoading] = useState(true);
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState('');

  const checkIsLogin = async (accessToken) => {
    if (accessToken !== null) {
      await axios({
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_API_URL}/api/user/profile`,
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
        .then(() => {
          localStorage.set('token', accessToken);
          setToken(accessToken);
          setIsLogin(true);
        })
        .catch((e) => {
          console.log(e);
        });
    }
    setLoading(false);
  };

  useEffect(() => {
    const chooseLabel = language === 'eng' ? ENGLISH : INDONESIA;
    setLabel(chooseLabel);
  }, [language]);

  useEffect(() => {
    checkIsLogin(localToken);
  }, []);

  const authStates = { loading, isLogin, setIsLogin, token, checkIsLogin, language, setLanguage, label };

  return <AuthContext.Provider value={authStates}>{children}</AuthContext.Provider>;
}
