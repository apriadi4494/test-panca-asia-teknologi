/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
import Image from 'next/image';
import React from 'react';

const payments = [
  {
    id: 1,
    label: 'VIRTUAL ACCOUNT',
    icon: '/images/payment-icon/virtual-account.svg',
    images: '/images/payment-icon/virtual-account-list.svg',
    width: 16,
    height: 16,
    widthList: 422.81,
    heightList: 24,
  },
  {
    id: 2,
    label: 'BANK TRANSFER',
    icon: '/images/payment-icon/bank-transfer.svg',
    images: '/images/payment-icon/bank-transfer-list.svg',
    width: 16,
    height: 16,
    widthList: 434.41,
    heightList: 24,
  },
  {
    id: 4,
    label: 'E-WALLET',
    icon: '/images/payment-icon/e-wallet.svg',
    images: '/images/payment-icon/e-walet-list.svg',
    width: 16,
    height: 16,
    widthList: 475.72,
    heightList: 24,
  },
  {
    id: 4,
    label: 'MODERN STORE',
    icon: '/images/payment-icon/modern-store.svg',
    images: '/images/payment-icon/moderen-store-list.svg',
    width: 16,
    height: 16,
    widthList: 436.75,
    heightList: 24,
  },
  {
    id: 5,
    label: 'CLICKPAY',
    icon: '/images/payment-icon/clickpay.svg',
    images: '/images/payment-icon/clickpay-list.svg',
    width: 16,
    height: 16,
    widthList: 436.75,
    heightList: 24,
  },
  {
    id: 6,
    label: 'PAYPAL',
    icon: '/images/payment-icon/paypal.svg',
    images: '/images/payment-icon/paypal-list.svg',
    width: 16,
    height: 16,
    widthList: 436.75,
    heightList: 24,
  },
];

function ListPayment(props) {
  const { label, icon, width = 16, height = 16, images, widthList, heightList } = props;
  return (
    <div className="grid grid-cols-2 border border-gray-300 rounded-md">
      <div className="flex w-full p-4">
        <Image className="mr-5 ml-1" src={icon} width={width} height={height} />
        <p className="source-sans-pro font-semibold">{label}</p>
      </div>
      <div className="grid items-center mr-5">
        <Image className="mr-5 ml-1" src={images} width={widthList} height={heightList} />
      </div>
    </div>
  );
}
function Section3() {
  return (
    <div className="text-register px-10 mt-20 h-4/5 lg:h-4/6 ">
      <div className="grid xl:grid-cols-9 gap-5 mt-5">
        <div className="grid col-span-5 gap-y-4">
          <div className="mb-5">
            <p className="source-sans-pro font-semibold text-gray-400">PLIHI METODE PEMBAYARAN</p>
          </div>
          {payments.map((payment) => (
            <ListPayment
              key={payment.id}
              label={payment.label}
              icon={payment.icon}
              images={payment.images}
              width={payment.width}
              height={payment.height}
              widthList={payment.widthList}
              heightList={payment.heightList}
            />
          ))}
        </div>
        <div className="col-span-4 w-full px-5 border-l">
          <div>
            <p>ORDER SUMMARY</p>
          </div>
          <div className="bg-cyan-50 border-2 rounded-md w-full p-3 mt-5" style={{ backgroundColor: '#FBFBFD' }}>
            <div className="grid grid-cols-2 mb-5">
              <div>
                <p className="font-bold" style={{ fontSize: 14.5 }}>
                  Blazing Premium
                </p>
                <p className="text-gray-400" style={{ fontSize: 13 }}>
                  1 Tahun
                </p>
              </div>
              <div>
                <p className="text-right">IDR 2.475.000,-</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-5">
              <div>
                <p className="font-bold" style={{ fontSize: 14.5 }}>
                  50,000 Contacts
                </p>
                <p className="text-gray-400" style={{ fontSize: 13 }}>
                  (Included)
                </p>
              </div>
              <div>
                <p className="text-right">IDR 0,-</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mb-5">
              <div>
                <p className="font-bold" style={{ fontSize: 14.5 }}>
                  6 WhatsApp Numbers
                </p>
                <p className="text-gray-400" style={{ fontSize: 13 }}>
                  (Included)
                </p>
              </div>
              <div>
                <p className="text-right">IDR 0,-</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5 mb-5">
              <div>
                <p className="font-bold" style={{ fontSize: 14.5 }}>
                  Sub Total
                </p>
              </div>
              <div>
                <p className="text-right">IDR 2.475.000,-</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-5 mb-5">
              <div>
                <p className="font-bold text-green-600" style={{ fontSize: 14.5 }}>
                  Diskon (60%)
                </p>
              </div>
              <div>
                <p className="text-green-600 text-right">-IDR 1.485.000,-</p>
              </div>
            </div>
            <div className="grid grid-cols-2 mt-10 mb-5">
              <div>
                <p className="font-bold" style={{ fontSize: 14.5 }}>
                  Grand Total
                </p>
              </div>
              <div>
                <p className="text-right">IDR 990.000,-</p>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <p style={{ fontSize: 14 }}>
              Punya Kode Kupon? <span className="text-red-500 cursor-pointer duration-700 hover:text-red-800">Klik di sini</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Section3);
