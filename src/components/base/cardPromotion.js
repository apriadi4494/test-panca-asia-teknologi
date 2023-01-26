import Image from 'next/image';
import React from 'react';
import ListComponentRegister from './list-component-register';

const cardPromotion = (props) => {
  const { isComplete, borderColor, bgColor, textColor } = props;

  return (
    <div>
      {isComplete && (
        <div className={`${bgColor} h-10 rounded-t-md grid items-center`} style={{ width: 330 }}>
          <p className="text-white font-semibold text-center" style={{ fontSize: 15 }}>
            DENGAN FITUR TERLENGKAP
          </p>
        </div>
      )}
      <div className={`relative flex w-full overflow-hidden border-2 ${borderColor} ${isComplete ? 'rounded-b-md' : 'rounded mt-10'} shadow-md`} style={{ width: 330, height: 690 }}>
        <div className="absolute grid justify-center z-0 top-0 left-0 w-full">
          <div className="grid w-full text-center gap-y-2 mt-5">
            <p className="text-register" style={{ fontSize: 28, fontWeight: 600 }}>
              PREMIUM
            </p>
            <p className={`text-register ${textColor} line-through`} style={{ fontSize: 17, fontWeight: 400 }}>
              IDR.2.252.020
            </p>
            <p className={`text-register ${textColor}`} style={{ fontSize: 14, fontWeight: 400 }}>
              IDR{' '}
              <span className="font-bold" style={{ fontSize: 48 }}>
                74.167
              </span>{' '}
              / bulan
            </p>
            <p>
              Rp 890.000 <strong>Per 12 Bulan</strong>
            </p>
          </div>

          <div className="grid w-full justify-center">
            <button type="button" className={`flex justify-center gap-2 ${bgColor} rounded-lg p-2 mt-4 text-white font-semibold`} style={{ width: 137.3 }}>
              <Image src="/images/arrow-right.svg" width={14} height={16} />
              Choose
            </button>
          </div>

          <div className="mt-5">
            <ListComponentRegister icon="/images/check-green.svg" width={28.75} height={23}>
              <p>
                <span className="font-semibold underline">4 WhatsApp Number</span> (Included)
              </p>
            </ListComponentRegister>
            <ListComponentRegister icon="/images/check-green.svg" width={28.75} height={23}>
              <span className="font-semibold underline">25.000 Contacts</span> (Included)
            </ListComponentRegister>
            <ListComponentRegister icon="/images/check-green.svg" width={28.75} height={23}>
              <span className="font-semibold underline"> Send Unlimited</span> Messages
            </ListComponentRegister>
            <ListComponentRegister icon="/images/check-green.svg" width={28.75} height={23}>
              <span className="font-semibold underline">Unlimited </span> Devices
            </ListComponentRegister>
            <ListComponentRegister icon="/images/check-green.svg" width={28.75} height={23}>
              <span className="font-semibold underline">50 WA </span> Link Rotator
            </ListComponentRegister>
            <ListComponentRegister icon="/images/check-green.svg" width={28.75} height={23}>
              <span className="font-semibold underline">15 Website </span>(Live Chat Widget)
            </ListComponentRegister>
            <ListComponentRegister icon="/images/check-green.svg" width={28.75} height={23}>
              <span className="font-semibold underline">4 Team Member </span>
            </ListComponentRegister>
            <ListComponentRegister icon="/images/cross-white.svg" width={23.2} height={23}>
              <span className="font-semibold underline ml-1">Multi-user WhatsApp Web</span>
            </ListComponentRegister>
            <ListComponentRegister icon="/images/cross-white.svg" width={23.2} height={23}>
              <span className="font-semibold underline ml-1">Perfect Timing Broadcast</span>
            </ListComponentRegister>
            <ListComponentRegister icon="/images/cross-white.svg" width={23.2} height={23}>
              <span className="font-semibold underline  ml-1">Allow Unsubscribe</span>
            </ListComponentRegister>
            <ListComponentRegister icon="/images/cross-white.svg" width={23.2} height={23}>
              <span className="font-semibold underline ml-1">Prioritized Technical Support</span>
            </ListComponentRegister>
          </div>
          <div className="mt-5">
            <p className="font-semibold text-center" style={{ color: '#DA336B', fontSize: 16 }}>
              Lihat Semua Fitur
            </p>
          </div>
        </div>
        <div className="absolute w-full grid justify-end z-10  top-0 left-0">
          <div className={`${bgColor} h-7 grid w-96 justify-center rotate-45`} style={{ marginRight: -120, marginTop: 2 }}>
            <p className="ml-20 p-1 text-white font-bold" style={{ fontSize: 12 }}>
              Paket hemat
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(cardPromotion);
