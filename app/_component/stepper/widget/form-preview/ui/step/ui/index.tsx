import ProgressBar from './step-progress-bar';
import Description from './step-description';
import Field from './step-form-field';
import { ChangeEvent } from 'react';
import useStepForm from '../../../../stepper/lib/useStepForm';
import { StepType } from '../../../../stepper/type';

interface Props {
  current: StepType;
  total: number;
}

const Step = ({
  current: { title, order, description, fields },
  total,
}: Props) => {
  const { fields: formFields, setFields } = useStepForm();

  const updateFormField = (e: ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return (
    <div>
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
          {fields.map(
            (
              { label, placeholder, name, type, validationRule, invalidText },
              idx
            ) => (
              <Field
                key={idx}
                label={label}
                placeholder={placeholder}
                name={name}
                type={type}
                value={formFields[name] ?? ''}
                onChange={updateFormField}
                validationRule={validationRule}
                invalidText={invalidText}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Step;
