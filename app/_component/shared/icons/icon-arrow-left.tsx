import Image from 'next/image';
import { ClassNameProps } from '../type';

const IconArrowLeft = ({ className }: ClassNameProps) => {
  return (
    <Image
      src='/icon/previous_24.svg'
      alt='왼쪽 화살표 아이콘'
      width={24}
      height={24}
      className={className}
    />
  );
};

export default IconArrowLeft;
