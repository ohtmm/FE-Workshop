'use client';

import Step from '../widget/step/step';
import CloseStepButton from '../widget/close-step-button';
import FormPreivew from '../widget/preview';
import useToggle from '../shared/lib/useToggle';

const StepperStepPage = () => {
  const { isActive: isDone } = useToggle();

  return (
    <div className='relative min-h-screen'>
      <CloseStepButton />
      {!isDone && <Step />}
      {isDone && <FormPreivew />}
    </div>
  );
};

export default StepperStepPage;
