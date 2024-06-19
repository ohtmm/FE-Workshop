import { StepForm } from '@/app/_provider/stepper/step-form-provider';
import ProgressBar from '../../step/ui/step-progress-bar';
import INITIAL_STEPPER from '../../stepper/const/intial_stepper';
import useStepForm from '../../stepper/lib/useStepForm';
import Button from '../../../../shared/button';
import { useRouter } from 'next/navigation';
import FieldPreview from './field-preview';

const FormPreivew = () => {
  const { fields: formFields } = useStepForm();
  const router = useRouter();

  const previewField = INITIAL_STEPPER.map((step) => {
    return {
      title: step.title,
      fields: step.fields.map((field) => {
        return {
          label: field.label,
          value: formFields[field.name as keyof Partial<StepForm>],
        };
      }),
    };
  });

  const handleSubmitButton = () => {
    router.push('/stepper/success');
  };
  return (
    <div className='pt-4 relative min-h-screen'>
      <div className='relative'>
        <ProgressBar title='미리보기' current={4} total={4} />
      </div>
      <div className='px-4 pt-10'>
        <p className='text-lg font-bold text-black mb-6'>
          입력된 정보를 확인해 주세요
        </p>
        <div className='w-full flex flex-wrap gap-6'>
          {previewField.map((fields, idx) => (
            <FieldPreview
              key={idx}
              title={fields.title}
              fields={fields.fields}
            />
          ))}
        </div>
      </div>

      <div className='px-4 w-full fixed left-0 bottom-8'>
        <Button variant='primary' fullWidth onClick={handleSubmitButton}>
          제출
        </Button>
      </div>
    </div>
  );
};
export default FormPreivew;
