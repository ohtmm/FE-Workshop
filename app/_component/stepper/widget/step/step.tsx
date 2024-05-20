'use client';

import { ChangeEvent } from 'react';
import ProgressBar from '../progress-bar';
import Description from '../description';
import Field from '../field';
import useStepForm from './lib/useStepForm';
import Button from '../../../shared/button';
import useCurrentStep from './lib/useCurrentStep';
import isNextButtonDisabled from './lib/isNextButtonDisabled';
import PrevButton from '../prev-button';
import useToggle from '../../../shared/lib/useToggle';

const Step = () => {
  const { setIsActive: setIsDone } = useToggle();
  const { fields, setFields } = useStepForm();
  const {
    total,
    current: { order, title, description, fields: inputFields },
    updateCurrent,
  } = useCurrentStep();

  const updateFormField = (e: ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const goToNextStep = () => {
    updateCurrent(order + 1);
  };

  const goToPrevStep = () => {
    updateCurrent(order - 1);
  };

  const goToPreview = () => {
    setIsDone((prev) => !prev);
  };
  const handleNextButton = () => {
    return isNextButtonDisabled(inputFields, fields);
  };
  return (
    <div className='pt-4'>
      <div className='relative pt-4'>
        <ProgressBar title={title} current={order} total={total} />
      </div>
      <div className='px-4 pt-10'>
        <Description
          description={description}
          current={order}
          total={total}
          className='mb-12'
        />
        <div className='flex flex-wrap gap-10'>
          {inputFields.map(
            (
              {
                label,
                inputPlaceholder,
                inputName,
                inputType,
                validationRule,
                invalidText,
              },
              idx
            ) => (
              <Field
                key={idx}
                label={label}
                placeholder={inputPlaceholder}
                inputName={inputName}
                inputType={inputType}
                inputValue={fields[inputName] ?? ''}
                onChange={updateFormField}
                validationRule={validationRule}
                invalidText={invalidText}
              />
            )
          )}
        </div>
      </div>
      <div className='flex gap-4 px-4 w-full absolute left-0 bottom-8'>
        {order > 1 && <PrevButton onClick={goToPrevStep} />}
        {order < total && (
          <Button disabled={handleNextButton()} onClick={goToNextStep}>
            다음
          </Button>
        )}
        {order === total && (
          <Button disabled={handleNextButton()} onClick={goToPreview}>
            작성 완료
          </Button>
        )}
      </div>
    </div>
  );
};

export default Step;
