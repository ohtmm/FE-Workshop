'use client';

import { useRouter } from 'next/navigation';
import CloseButton from '../shared/close-button';

const CloseStepButton = () => {
  const router = useRouter();
  const handleOnClose = () => {
    router.push('/stepper');
  };

  return (
    <CloseButton onClose={handleOnClose} className='absolute right-4 top-4' />
  );
};

export default CloseStepButton;
