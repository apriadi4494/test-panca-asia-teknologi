import Image from 'next/image';
import React from 'react';
import ListComponent from '../base/list-component';

function LeftPannel(props) {
  const { label } = props;

  return (
    <div className="p-10 px-20 h-full" style={{ backgroundColor: '#E8EAF2' }}>
      <div>
        <Image src="/images/logo.png" width={219.1} height={63.5} />
      </div>
      <div className="mt-5">
        <p className="font-bold" style={{ fontSize: 32 }}>
          {label.REGISTER.TEXT_ONE}
        </p>
      </div>
      <div className="mt-5">
        <p className="font-bold" style={{ fontSize: 20 }}>
          {label.REGISTER.TEXT_TWO}
        </p>
      </div>
      <div className="mt-5">
        <p style={{ fontSize: 17 }}>{label.REGISTER.TEXT_THREE}</p>
      </div>
      <div className="mt-10">
        <ListComponent text={label.REGISTER.LIST_1.LIST_1} icon="/images/checklist-1.svg" />
        <ListComponent text={label.REGISTER.LIST_1.LIST_2} icon="/images/checklist-1.svg" />
        <ListComponent text={label.REGISTER.LIST_1.LIST_3} icon="/images/checklist-1.svg" />
        <ListComponent text={label.REGISTER.LIST_1.LIST_4} icon="/images/checklist-1.svg" />
      </div>
      <div className="mt-8">
        <p className="font-bold" style={{ fontSize: 17 }}>
          {label.REGISTER.TEXT_FOUR}
        </p>
      </div>
      <div className="mt-8">
        <p className="font-bold" style={{ fontSize: 17 }}>
          {label.REGISTER.TEXT_FIVE}
        </p>
      </div>
      <div className="mt-8">
        <ListComponent text={label.REGISTER.LIST_2.LIST_1} icon="/images/checklist-2.svg" />
        <ListComponent text={label.REGISTER.LIST_2.LIST_2} icon="/images/checklist-2.svg" />
        <ListComponent text={label.REGISTER.LIST_2.LIST_3} icon="/images/checklist-2.svg" />
        <ListComponent text={label.REGISTER.LIST_2.LIST_4} icon="/images/checklist-2.svg" />
      </div>
      <div className="mt-8">
        <p className="font-semibold" style={{ fontSize: 17 }}>
          {label.REGISTER.TEXT_SIX}
        </p>
      </div>
    </div>
  );
}

export default React.memo(LeftPannel);
