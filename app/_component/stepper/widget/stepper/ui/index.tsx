'use client';

import useStepForm from '../lib/useStepForm';
import useCurrentStep from '../lib/useCurrentStep';
import useToggle from '../../../../shared/lib/useToggle';
import Step from '../../step/ui';
import NavigationButtons from './navigation-buttons';
import isNextButtonDisabled from '../lib/isNextButtonDisabled';

const Stepper = () => {
  const { fields } = useStepForm();
  const { total, current, updateCurrent } = useCurrentStep();

  const { order, fields: inputFields } = current;
  const { setIsActive: setIsDone } = useToggle();

  const goToNextStep = () => {
    updateCurrent(order + 1);
  };

  const goToPrevStep = () => {
    updateCurrent(order - 1);
  };

  const goToPreview = () => {
    setIsDone((prev) => !prev);
  };
  return (
    <div className='pt-4'>
      <Step current={current} total={total} />
      <NavigationButtons
        order={order}
        total={total}
        onNext={goToNextStep}
        onPrev={goToPrevStep}
        onDone={goToPreview}
        isNextDisabled={isNextButtonDisabled(inputFields, fields)}
      />
    </div>
  );
};

export default Stepper;
