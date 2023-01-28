/* eslint-disable consistent-return */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';

export const RegisterContext = createContext();

// eslint-disable-next-line react/prop-types
export function RegisterProvider({ children }) {
  const [formFinal, setFormFinal] = useState({
    user_id: '',
    package_id: '2',
    payment_id: '1',
  });
  const [countries, setContries] = useState([]);
  const [country, setCountry] = useState('');
  const [section, setSection] = useState(4);
  const [loadingButton, setLoadingButton] = useState(false);
  const [aggree, setAggre] = useState(false);
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    mobile_code: '62',
    mobile: '',
    password: '',
    password_confirmation: '',
    country: '62',
  });

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const getContries = async () => {
    await axios({
      method: 'get',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/get-country`,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => {
        setContries(res.data.data.countries);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const register = async () => {
    if (!aggree) {
      Swal.fire({
        icon: 'error',
        title: 'Aggreement',
        text: 'you have to aggree with term and condition',
      });
      return true;
    }
    setLoadingButton(true);
    await axios({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/register`,
      data: form,
      headers: {
        Accept: 'application/json',
      },
    })
      .then((res) => {
        setFormFinal({ ...formFinal, user_id: res.data.data.id.toString() });
        setSection(2);
      })
      .catch((err) => {
        if (err.response.data.message.error) {
          Swal.fire({
            icon: 'error',
            title: 'Create Failed',
            text: err.response.data.message.error,
          });
        }
      });
    setLoadingButton(false);
  };

  const registerFinal = async () => {
    setLoadingButton(true);
    await axios({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/register-package`,
      data: formFinal,
      headers: {
        Accept: 'application/json',
      },
    })
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Success Register',
          text: 'you have success register',
        });
        setSection(4);
      })
      .catch((err) => {
        if (err.response.data.message.error) {
          Swal.fire({
            icon: 'error',
            title: 'Create Failed',
            text: err.response.data.message.error,
          });
        }
      });
    setLoadingButton(false);
  };

  useEffect(() => {
    getContries();
  }, []);

  const registerState = { countries, form, onChange, country, setCountry, register, section, setSection, loadingButton, registerFinal, aggree, setAggre };

  return <RegisterContext.Provider value={registerState}>{children}</RegisterContext.Provider>;
}
