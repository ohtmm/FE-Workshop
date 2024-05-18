'use client';

import Image from 'next/image';
import { ClassNameProps } from './type';

interface Props extends ClassNameProps {
  onClose: () => void;
}

const CloseButton = ({ onClose, className }: Props) => {
  return (
    <Image
      src='/icon/close_24.svg'
      alt='close icon'
      width={24}
      height={24}
      onClick={onClose}
      className={className}
    />
  );
};

export default CloseButton;
