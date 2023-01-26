/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import Image from 'next/image';
import Link from 'next/link';
import { languages } from '@/commons/fixtures/languages';
import FormInputComponent from './formInputComponent';

const contries = [
  { label: 'New York', value: 'NY' },
  { label: 'Rome', value: 'RM' },
  { label: 'London', value: 'LDN' },
  { label: 'Istanbul', value: 'IST' },
  { label: 'Paris', value: 'PRS' },
  { label: 'Indonesia', value: 'ID' },
];

function RightPannel(props) {
  const { language, setLanguage } = props;
  const [country, setCountry] = useState('');

  return (
    <div className="p-10 px-32">
      <div className="flex w-full">
        <div className="grid justify-items-end h-full">
          <p className="font-semibold" style={{ color: '#23A455', fontSize: 30.8 }}>
            Start your free trial
          </p>
        </div>
        <div className="absolute right-0 pr-20">
          <Dropdown value={language} options={languages} onChange={(e) => setLanguage(e.value)} placeholder="Select a City" />
        </div>
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
          <div className="grid grid-cols-2 gap-5">
            <FormInputComponent type="text" label="First name" required placeholder="Enter your first name" />
            <FormInputComponent type="text" label="Last name" required placeholder="Enter your last name" />
          </div>
          <div>
            <FormInputComponent type="text" label="Email" placeholder="Enter your email" />
          </div>
          <div className="mt-5 w-full">
            <p className="font-semibold mb-2" style={{ fontSize: 15.4, color: '#666666' }}>
              Country
            </p>
            <Dropdown className="custom_pannel" value={country} options={contries} onChange={(e) => setCountry(e.value)} placeholder="Choose your country" />
          </div>
        </div>
      </div>

      <div className="mt-5 w-full">
        <div>
          <FormInputComponent type="text" icon="/images/phone.svg" label="Whatsapp Number (with country code)" required placeholder="Phone number" />
        </div>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-2 gap-5">
          <FormInputComponent type="password" lastIcon="/images/eye.png" label="Password" placeholder="Enter your password" />
          <FormInputComponent type="password" lastIcon="/images/eye.png" label="Confirm password" placeholder="Confirm your password" />
        </div>
      </div>
      <div className="mt-8 w-full">
        <div className="flex">
          <div className="mr-5">
            <input type="checkbox" className="bg-white focus:ring-transparent" style={{ width: 30, height: 30 }} />
          </div>
          <div className="grid items-center">
            <p style={{ color: '#666666', fontSize: 14 }}>
              I agree to <span className="text-green-600 cursor-pointer">Terms and conditions</span> and <span className="text-green-600 cursor-pointer">Privacy Policy</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mt-8 w-full">
        <button type="button" className="bg-gray-200 rounded-md w-full p-3" style={{ height: 60 }}>
          Create an account
        </button>
      </div>
      <div className="flex w-full gap-2 justify-center mt-5">
        <span>Already have an account?</span>
        <span className="text-green-600">Login</span>
      </div>

      <div className="mt-5">
        <div className="flex gap-4 justify-center">
          <div>
            <Image src="/images/appstore.png" width={154} height={54} />
          </div>
          <div>
            <Image src="/images/googleplay.png" width={187} height={55} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(RightPannel);
