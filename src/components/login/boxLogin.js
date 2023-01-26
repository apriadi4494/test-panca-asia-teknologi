import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import FormInput from './formInput';

function BoxLogin(props) {
  const { label } = props;
  const [isVisiblePassword, setIsVisiblePassword] = useState(false);
  const changeType = () => {
    setIsVisiblePassword(!isVisiblePassword);
  };

  return (
    <div className="grid justify-center py-10">
      <div className="w-fit grid grid-cols-2 rounded-sm shadow-md" style={{ backgroundColor: '#F5F6FA' }}>
        {/* GAMBAR */}
        <div className="grid justify-center p-5">
          <div>
            <Image src="/images/login_bg.cb29655a.svg.png" width={570} height={570} />
          </div>
          <div className="flex gap-4 justify-center">
            <div>
              <Image src="/images/appstore.png" width={154} height={54} />
            </div>
            <div>
              <Image src="/images/googleplay.png" width={187} height={55} />
            </div>
          </div>
        </div>

        {/* FORM */}
        <div>
          <div className="p-5">
            <div className="mb-5">
              <p className="font-semibold" style={{ color: '#23A455', fontSize: 30.8 }}>
                {label.LOGIN.LOGIN}
              </p>
            </div>
            {/* BUTTON LOGIN SSO */}
            <div className="flex gap-5">
              <div className="cursor-pointer duration-500 hover:scale-105">
                <Image src="/images/b-google.png" width={166.66} height={50} />
              </div>
              <div className="cursor-pointer duration-500 hover:scale-105">
                <Image src="/images/b-facebook.png" width={166.66} height={50} />
              </div>
              <div className="cursor-pointer duration-500 hover:scale-105">
                <Image src="/images/b-shopify.png" width={166.66} height={50} />
              </div>
            </div>
            {/* DIVIDER */}
            <div className="relative flex py-5 items-center">
              <div className="flex-grow border-t border-gray-200" />
              <span className="flex-shrink mx-4 text-gray-400">{label.LOGIN.OR}</span>
              <div className="flex-grow border-t border-gray-200" />
            </div>

            {/* FORM */}
            <div>
              <FormInput type="text" label={label.LOGIN.EMAIL} image="/images/mail.png" placeholder={label.LOGIN.EMAIL_PLACEHOLDER} />
              <FormInput
                type={isVisiblePassword ? 'text' : 'password'}
                label={label.LOGIN.PASSWORD}
                image="/images/keys.svg"
                lastIcon="/images/eye.png"
                placeholder={label.LOGIN.PASSOWRD_PLACEHOLDER}
                changeType={changeType}
              />
            </div>

            {/* FORGOT PASSWORD */}
            <div className="grid grid-cols-2 w-full mt-5">
              <div className="flex">
                <div className="mr-5">
                  <input type="checkbox" className="bg-white focus:ring-transparent" style={{ width: 21, height: 21 }} />
                </div>
                <div>
                  <p style={{ color: '#666666', fontSize: 14 }}>{label.LOGIN.REMEMBER_ME}</p>
                </div>
              </div>
              <div>
                <p className="text-right" style={{ color: '#666666', fontSize: 14 }}>
                  {label.LOGIN.FORGOT_PASSWORD}
                </p>
              </div>
            </div>

            {/* BUTTON */}
            <div className="mt-10">
              <button type="button" className="bg-green-600 rounded-md w-full p-3">
                <p className="text-white" style={{ fontSize: 16.8 }}>
                  {label.LOGIN.LOGIN}
                </p>
              </button>
            </div>

            {/* QUESTION IS HAVE ACCOUNT */}
            <div className="mt-2">
              <div className="flex justify-center gap-2" style={{ fontSize: 15.4 }}>
                <span>{label.LOGIN.ACCOUNT_QUESTION}</span>
                <Link href="/register">
                  <span className="text-green-500">{label.LOGIN.PLEASE_SIGNUP}</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(BoxLogin);
