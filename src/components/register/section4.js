import Image from 'next/image';
import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import TextIcon from '../base/textIcon';

function Section4() {
  return (
    <div className="w-full mt-32 md:mt-16 md:px-10 sans-pro">
      <div className="grid w-full justify-center">
        <p className="text-center mb-2 font-bold" style={{ color: '#E08011', fontSize: 23 }}>
          Satu langkah lagi
        </p>
        <p className="text-center">Untuk menyelesaikan proses transaksi, silahkan lakukan pembayaran sejumlah:</p>
        <p className="text-center font-bold mt-2" style={{ fontSize: 40 }}>
          Rp1.177.<span style={{ color: '#E08011' }}>560</span>
        </p>
      </div>
      <div className="grid xl:grid-cols-2 w-full gap-5 px-5 mt-4">
        <div className="border border-gray-300 rounded-md">
          <div className="flex gap-5 py-3">
            <Image className="ml-5" src="/images/payment-icon/bca.svg" width={50} height={24} />
            <p className="font-bold" style={{ fontSize: 16 }}>
              BCA Virtual Account
            </p>
          </div>
          <div className="border-t border-gray-300" style={{ backgroundColor: '#F9F9F9' }}>
            <div className="grid w-full justify-center text-center">
              <p className="mt-2">Kode Pembayaran</p>
              <div className="flex mt-2">
                <p className="text-red-700 font-semibold" style={{ fontSize: 27 }}>
                  1900533413521170
                </p>
                <Image className="ml-5" src="/images/copy.svg" width={14} height={15} />
              </div>
              <div className="mt-5">
                <p>Batas Waktu Pembayaran</p>
                <p className="text-red-700 font-bold" style={{ fontSize: 20 }}>
                  03 jam 50 menit 18 detik
                </p>
              </div>
            </div>
            <div className="mt-5">
              <TextIcon text="Butuh Bantuan?" icon="/images/help.svg" />
              <div className="grid px-5 py-3 gap-y-2">
                <Dropdown className="w-full h-10 detail-payment" value={null} options={[]} placeholder="m-BCA" />
                <Dropdown className="w-full h-10 detail-payment" value={null} options={[]} placeholder="ATM-BCA" />
                <Dropdown className="w-full h-10 detail-payment" value={null} options={[]} placeholder="KlickBca Individual" />
                <Dropdown className="w-full h-10 detail-payment" value={null} options={[]} placeholder="KlickBca Bisnis" />
                <Dropdown className="w-full h-10 detail-payment" value={null} options={[]} placeholder="MyBCA" />
              </div>
              <div className="grid w-full justify-center py-2 pb-4">
                <div className="py-2 px-7 bg-white border border-gray-300 rounded-3xl">
                  <p style={{ fontSize: 12, color: '#5D5D5D' }}>Panduan Lengkap</p>
                </div>
              </div>
              <div className="bg-white border-t border-gray-300 w-full flex justify-center gap-5 py-4">
                <div>
                  <Image src="/images/security.svg" width={115.23} height={38} />
                </div>
                <div>
                  <Image src="/images/garansi.svg" width={113.38} height={38} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 divide-y divide-gray-100">
            <div className="grid grid-cols-2 w-full py-3">
              <p style={{ fontSize: 15 }}>No. Transaksi</p>
              <p style={{ fontSize: 15 }} className="text-right font-semibold">
                WZP23UGRW
              </p>
            </div>
            <div className="grid grid-cols-2 w-full py-3">
              <p style={{ fontSize: 15 }}>Waktu Pemesanan</p>
              <p style={{ fontSize: 15 }} className="text-right font-semibold">
                22:13 WIB - 22 Jan 2023
              </p>
            </div>
            <div className="grid grid-cols-2 w-full py-3">
              <p style={{ fontSize: 15 }}>Batas Waktu Pembayaran</p>
              <p style={{ fontSize: 15 }} className="text-right font-semibold">
                03 jam 50 menit 18 detik
              </p>
            </div>
            <div className="grid grid-cols-2 w-full py-3">
              <p style={{ fontSize: 15 }}>Metode Pembayaran</p>
              <p style={{ fontSize: 15 }} className="text-right font-semibold">
                BCA Virtual Account
              </p>
            </div>
            <div className="grid grid-cols-2 w-full py-3">
              <p style={{ fontSize: 15 }}>Produk</p>
              <p style={{ fontSize: 15 }} className="text-right font-semibold">
                Blazing Premium
              </p>
            </div>
            <div className="grid grid-cols-2 w-full py-3">
              <p style={{ fontSize: 15 }}>Durasi Langganan</p>
              <p style={{ fontSize: 15 }} className="text-right font-semibold">
                1 Tahun
              </p>
            </div>
            <div className="grid grid-cols-2 w-full py-3">
              <p style={{ fontSize: 15 }}>Kontak Tambahan</p>
              <p style={{ fontSize: 15 }} className="text-right font-semibold">
                +40.000 Kontak
              </p>
            </div>
            <div className="grid grid-cols-2 w-full py-3">
              <p style={{ fontSize: 15 }}>Nomor Tambahan</p>
              <p style={{ fontSize: 15 }} className="text-right font-semibold">
                +4 No WhatsApp
              </p>
            </div>
          </div>
          <div className="mt-3 p-5 rounded-md mb-5" style={{ backgroundColor: '#F9F9F9' }}>
            <p className="text-xs">Kami juga telah mengirimkan detail pemesanan Anda ke email. Jika akun Anda belum aktif dalam 30 menit setelah melakukan pembayaran, segera hubungi kami.</p>
          </div>
          <TextIcon text="Butuh Bantuan?" icon="/images/question.svg" width={20} height={20} />
          <div className="mt-5">
            <p>
              Apabila anda membutuhkan bantuan terkait hal apapun, silahkan hubungi <span className="text-blue-500">Customer Support kami via WhatsApp</span> atau kirim email ke{' '}
              <span className="text-blue-500">support@blazing.com</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(Section4);
