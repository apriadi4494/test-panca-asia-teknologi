import Image from 'next/image';

function TextIcon(props) {
  const { text, icon, width = 14, height = 15 } = props;
  return (
    <div className="flex w-full gap-5">
      <Image className="ml-5" src={icon} width={width} height={height} />
      <p className="font-bold" style={{ fontSize: 16 }}>
        {text}
      </p>
    </div>
  );
}

export default TextIcon;
