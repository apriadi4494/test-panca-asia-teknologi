/* eslint-disable import/no-extraneous-dependencies */
import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

function LanguageDropdown(props) {
  const { language, setLanguage } = props;
  return (
    <div className="absolute flex right-0 pr-20">
      {/* <Dropdown className="language" value={language} options={languages} onChange={(e) => setLanguage(e.value)} placeholder="Select a City" /> */}
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-100 bg-gray-100 px-1 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100">
            <div className="grid grid-cols-2 gap-5 justify-between px-5">
              <div className="border-r">
                <Image className="rounded-full" src={language === 'eng' ? '/images/eng.png' : '/images/ind.png'} width={30} height={30} />
              </div>
              <div className="grid items-center">
                <p className="text-center font-normal">{language === 'eng' ? 'English' : 'Bahasa'}</p>
              </div>
            </div>
            <div className="grid items-center mr-2">
              <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </div>
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-full origin-top-right rounded-md bg-gray-100 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="divide-y">
              <Menu.Item onClick={() => setLanguage('eng')} className="cursor-pointer duration-500 hover:bg-gray-200">
                <div className="grid grid-cols-2 p-4">
                  <div className="border-r grid justify-center">
                    <Image className="rounded-full" src="/images/eng.png" width={25} height={25} />
                  </div>
                  <div className="grid items-center">
                    <p className="text-center text-xs">English</p>
                  </div>
                </div>
              </Menu.Item>
              <Menu.Item onClick={() => setLanguage('in')} className="cursor-pointer duration-500 hover:bg-gray-200">
                <div className="grid grid-cols-2 p-4">
                  <div className="border-r grid justify-center ">
                    <Image className="rounded-full " src="/images/ind.png" width={25} height={25} />
                  </div>
                  <div className="grid items-center">
                    <p className="text-center text-xs">Bahasa</p>
                  </div>
                </div>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

export default LanguageDropdown;
