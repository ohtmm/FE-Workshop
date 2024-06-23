import { useState } from 'react';
import { StepType } from '../type';
import INITIAL_STEPPER from '../const/intial_stepper';

const useCurrentStep = () => {
  const [steps, setSteps] = useState(INITIAL_STEPPER);

  const updateCurrent = (newOrder: number) => {
    const newSteps: StepType[] = steps.map((step) => {
      if (step.isActive) {
        return { ...step, isActive: false };
      } else if (step.order === newOrder) {
        return { ...step, isActive: true };
      } else {
        return step;
      }
    });
    setSteps(newSteps);
  };

  const current = steps.find((step) => step.isActive)!;
  return {
    total: steps.length,
    current,
    updateCurrent,
  };
};

export default useCurrentStep;
