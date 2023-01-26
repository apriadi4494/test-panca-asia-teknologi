import Image from 'next/image';
import React from 'react';

// eslint-disable-next-line react/function-component-definition
const FormInputComponent = (props) => {
  const { value, onChange, name, type, label, placeholder, required = false, icon, lastIcon, changeType } = props;
  return (
    <div className="w-full mt-5">
      <p className="font-semibold" style={{ fontSize: 15.4, color: '#666666' }}>
        {label} {required && '*'}
      </p>
      <div className="flex mt-2 gap-5">
        {icon && (
          <div className="flex rounded-md bg-gray-100 items-center justify-center" style={{ width: 71.45 }}>
            <Image src={icon} width={24} height={24} />
          </div>
        )}
        <div className="flex bg-gray-100 w-full rounded-md h-12 p-2">
          <input
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className="bg-gray-100 w-full h-full text-gray-600 ml-2 placeholder-gray-400 outline-none text-sm flex-1 border-transparent focus:border-transparent focus:ring-0"
          />
          {lastIcon && (
            <button onClick={changeType} type="button" className="flex cursor-pointer items-center justify-center hover:scale-105" style={{ width: 53 }}>
              <Image src={lastIcon} width={24} height={24} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default React.memo(FormInputComponent);
