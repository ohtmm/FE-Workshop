import { toggleContext } from '@/app/_provider/toggle-provider';
import { useContext } from 'react';

const useToggle = () => {
  const context = useContext(toggleContext);

  if (!context) {
    throw Error('toggle provider 내부에서 사용해주세요');
  }

  return context;
};

export default useToggle;
