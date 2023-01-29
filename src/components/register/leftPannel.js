/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Image from 'next/image';
import React, { useContext } from 'react';
import { RegisterContext } from '@/providers/registerProvider';
import ListComponent from '../base/list-component';

function LeftPannel(props) {
  const { section } = useContext(RegisterContext);
  const { label } = props;

  return (
    <div className={`p-10 md:px-20 h-full mt-10 md:mt-0 ${section === 2 ? ' w-4/5' : 'w-full'}`} style={{ backgroundColor: '#F5F6FA' }}>
      <div>
        <Image src="/images/logo.png" width={219.1} height={63.5} />
      </div>
      <div className="mt-5">
        <p className="font-bold text-lato " style={{ fontSize: 32 }}>
          {label.REGISTER.TEXT_ONE}
        </p>
      </div>
      <div>
        <div className="mt-5 text-popins">
          <p className="font-bold tracking-tighter" style={{ fontSize: 18 }}>
            {label.REGISTER.TEXT_TWO}
          </p>
        </div>
        <div className="mt-5">
          <p className="text-popins tracking-tighter" style={{ fontSize: 17 }}>
            {label.REGISTER.TEXT_THREE}
          </p>
        </div>
        <div className="mt-10">
          <ListComponent text={label.REGISTER.LIST_1.LIST_1} icon="/images/checklist-1.svg" />
          <ListComponent text={label.REGISTER.LIST_1.LIST_2} icon="/images/checklist-1.svg" />
          <ListComponent text={label.REGISTER.LIST_1.LIST_3} icon="/images/checklist-1.svg" />
          <ListComponent text={label.REGISTER.LIST_1.LIST_4} icon="/images/checklist-1.svg" />
        </div>
        <div className="mt-8">
          <p className="text-popins font-semibold" style={{ fontSize: 15 }}>
            {label.REGISTER.TEXT_FOUR}
          </p>
        </div>
        <div className="mt-6">
          <p className="font-bold" style={{ fontSize: 15 }}>
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
    </div>
  );
}

export default React.memo(LeftPannel);
