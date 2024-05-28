'use client';

import Stepper from '../widget/stepper/ui';
import CloseStepButton from '../widget/stepper/ui/close-step-button';
import FormPreivew from '../widget/form-preview/ui';
import useToggle from '../../shared/lib/useToggle';

const StepperStepPage = () => {
  const { isActive: isDone } = useToggle();

  return (
    <div className='relative min-h-screen'>
      <CloseStepButton />
      {!isDone && <Stepper />}
      {isDone && <FormPreivew />}
    </div>
  );
};

export default StepperStepPage;
