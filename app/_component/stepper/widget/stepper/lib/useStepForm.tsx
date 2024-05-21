import { stepformContext } from '@/app/_provider/stepper/step-form-provider';
import { useContext } from 'react';

const useStepForm = () => {
  const context = useContext(stepformContext);

  if (!context) {
    throw Error('step form context 내부에서 사용해주세요');
  }

  return context;
};

export default useStepForm;
