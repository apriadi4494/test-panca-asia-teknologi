import Image from 'next/image';

function ListComponent({ text, icon }) {
  return (
    <div className="flex gap-5 mb-1">
      <Image src={icon} width={20} height={20} />
      <p style={{ fontSize: 17 }}>{text}</p>
    </div>
  );
}

export default ListComponent;
