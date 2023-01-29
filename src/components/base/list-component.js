import Image from 'next/image';

function ListComponent({ text, icon, fontSize = 17, width = 20, height = 20 }) {
  return (
    <div className="flex gap-5 mb-1">
      <Image src={icon} width={width} height={height} />
      <p className="font-normal opacity-80 text-popins" style={{ fontSize }}>{text}</p>
    </div>
  );
}

export default ListComponent;
