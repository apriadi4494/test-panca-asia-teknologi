import Image from 'next/image';
import React from 'react';

function FormInputComponent(props) {
  const { value, onChange, name, type, label, image, placeholder, lastIcon, changeType } = props;
  return (
    <div className="py-2 tracking-wide">
      <div className="mb-1">
        <p className="form-label font-semibold " style={{ color: '#666666', fontSize: 16 }}>
          {label}
        </p>
      </div>
      <div className="flex w-full bg-white rounded-md" style={{ height: 50 }}>
        <div className="flex items-center justify-center" style={{ width: 53 }}>
          <Image src={image} width={24} height={24} />
        </div>
        <div className="my-2" style={{ width: 2, backgroundColor: '#E8EAF2' }} />
        <div className="flex w-full px-2">
          <input
            name={name}
            value={value}
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            className="w-full h-full text-gray-600 placeholder-gray-200 outline-none text-sm flex-1 border-transparent focus:border-transparent focus:ring-0"
            style={{ fontSize: 14 }}
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
}

const FormInput = React.memo(FormInputComponent);
export default FormInput;
