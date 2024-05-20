import { StepForm } from '@/app/_provider/stepper/step-form-provider';
import { Field } from '../type';

const isNextButtonDisabled = (
  inputFields: Field[],
  formDataFields: Partial<StepForm>
) => {
  return !inputFields.every((field) =>
    field.validationRule(formDataFields[field.inputName])
  );
};

export default isNextButtonDisabled;
