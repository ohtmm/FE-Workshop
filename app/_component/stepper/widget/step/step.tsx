'use client';

import { ChangeEvent } from 'react';
import { Step } from '../../type';
import ProgressBar from '../progress-bar';
import Description from '../description';
import Field from '../field';
import useStepForm from './lib/useStepForm';

interface Props {
  step: Step;
}

const Step = ({
  step: { order, title, description, isActive, fields: inputFields },
}: Props) => {
  const { setFields } = useStepForm();

  const handleFieldChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div className='pt-4'>
      <div className='relative pt-4'>
        <ProgressBar title={title} current={order} total={4} />
      </div>
      <div className='px-4 pt-10'>
        <Description
          description={description}
          current={order}
          total={4}
          className='mb-12'
        />
        <div className='flex flex-wrap gap-10'>
          {inputFields.map(
            ({
              label,
              inputPlaceholder,
              inputName,
              inputType,
              validationRule,
            }) => (
              <Field
                label={label}
                placeholder={inputPlaceholder}
                inputName={inputName}
                inputType={inputType}
                onChange={handleFieldChange}
                validationRule={validationRule}
                invalidText={`유효한 ${label}이 아닙니다`}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Step;
