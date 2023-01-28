/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useContext, useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import Image from 'next/image';
import Link from 'next/link';
import FormInputComponent from '../base/formInputComponent';
import { RegisterContext } from '@/providers/registerProvider';
import { AuthContext } from '@/providers/authProvider';
import LanguageDropdown from '../base/languageDropdown';

function Section1() {
  const { language, setLanguage, label } = useContext(AuthContext);
  const { countries, form, onChange, country, setCountry, register, loadingButton, aggree, setAggre } = useContext(RegisterContext);
  const [seePassword, setSeePassowrd] = useState(false);
  const [seePasswordConfirmation, setSeePassowrdConfirmation] = useState(false);

  return (
    <div className="p-10 lg:px-32 h-screen">
      <div className="flex w-full">
        <div className="mt-20 lg:mt-0 grid justify-items-end h-full">
          <p className="font-semibold" style={{ color: '#23A455', fontSize: 30.8 }}>
            Start your free trial
          </p>
        </div>
        <LanguageDropdown language={language} setLanguage={setLanguage} />
      </div>
      <div className="mt-5">
        <Link href="/login">
          <div className="flex justify-items-center gap-3">
            <Image src="/images/arrow-left.svg" width={14} height={10} />
            <p style={{ fontSize: 14, color: '#0E71C3' }}>Back</p>
          </div>
        </Link>
      </div>
      <div>
        <div>
          <div className="grid lg:grid-cols-2 lg:gap-5">
            <FormInputComponent name="firstname" value={form.firstname} onChange={onChange} type="text" label="First name" required placeholder="Enter your first name" />
            <FormInputComponent name="lastname" value={form.lastname} onChange={onChange} type="text" label="Last name" required placeholder="Enter your last name" />
          </div>
          <div>
            <FormInputComponent name="email" value={form.email} onChange={onChange} type="text" label="Email" placeholder="Enter your email" />
          </div>
          <div className="mt-5 w-full">
            <p className="font-semibold mb-2" style={{ fontSize: 15.4, color: '#666666' }}>
              Country
            </p>
            <Dropdown optionLabel="name" className="custom_pannel" value={country} options={countries} onChange={(e) => setCountry(e.value)} placeholder="Choose your country" />
          </div>
        </div>
      </div>

      <div className="mt-5 w-full">
        <div>
          <FormInputComponent
            name="mobile"
            value={form.mobile}
            onChange={onChange}
            type="text"
            icon="/images/phone.svg"
            label="Whatsapp Number (with country code)"
            required
            placeholder="Phone number"
          />
        </div>
      </div>
      <div className="w-full">
        <div className="grid lg:grid-cols-2 lg:gap-5">
          <FormInputComponent
            name="password"
            value={form.password}
            onChange={onChange}
            type={seePassword ? 'text' : 'password'}
            lastIcon="/images/eye.png"
            label="Password"
            placeholder="Enter your password"
            changeType={() => {
              setSeePassowrd(!seePassword);
            }}
          />
          <FormInputComponent
            name="password_confirmation"
            value={form.password_confirmation}
            onChange={onChange}
            type={seePasswordConfirmation ? 'text' : 'password'}
            lastIcon="/images/eye.png"
            label="Confirm password"
            placeholder="Confirm your password"
            changeType={() => {
              setSeePassowrdConfirmation(!seePasswordConfirmation);
            }}
          />
        </div>
      </div>
      <div className="mt-8 w-full">
        <div className="flex">
          <div className="mr-5">
            <input type="checkbox" checked={aggree} onChange={() => setAggre(!aggree)} className="bg-white focus:ring-transparent" style={{ width: 30, height: 30 }} />
          </div>
          <div className="grid items-center">
            <p style={{ color: '#666666', fontSize: 14 }}>
              I agree to <span className="text-green-600 cursor-pointer">Terms and conditions</span> and <span className="text-green-600 cursor-pointer">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full">
        <button type="button" onClick={register} className={`${loadingButton ? 'bg-gray-200' : 'bg-blue-500'} rounded-md w-full p-3 text-white`} style={{ height: 60 }}>
          {!loadingButton ? 'Create an account' : label.GLOBAL.LOADING}
        </button>
      </div>
      <div className="flex w-full gap-2 justify-center mt-5">
        <span>Already have an account?</span>
        <Link href="/login">
          <span className="text-green-600">Login</span>
        </Link>
      </div>

      <div className="mt-5">
        <div className="flex gap-4 justify-center">
          <div className="cursor-pointer duration-700 hover:scale-105">
            <Image src="/images/appstore.png" width={154} height={54} />
          </div>
          <div className="cursor-pointer duration-700 hover:scale-105">
            <Image src="/images/googleplay.png" width={187} height={55} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Section1);
