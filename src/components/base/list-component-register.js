import Image from 'next/image';

function ListComponentRegister({ icon, width = 20, height = 20, children }) {
  return (
    <div className="flex gap-5 mb-2 text-list" style={{ fontSize: 14, color: '#54595F' }}>
      <Image src={icon} width={width} height={height} />
      {children}
    </div>
  );
}

export default ListComponentRegister;
