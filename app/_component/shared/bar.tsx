import { ClassNameProps } from './type';

interface Props extends ClassNameProps {
  current: number;
  total: number;
}

const Bar = ({ total, current, className }: Props) => {
  const gridStyle = {
    gridTemplateColumns: `repeat(${total}, minmax(0, 1fr))`,
  };
  return (
    <div className={`grid w-full h-1 ${className}`} style={gridStyle}>
      {Array.from({ length: total }).map((_, idx) => (
        <span
          key={idx}
          className={`${idx + 1 > current ? 'bg-grey150' : 'bg-black'}`}
        ></span>
      ))}
    </div>
  );
};

export default Bar;
