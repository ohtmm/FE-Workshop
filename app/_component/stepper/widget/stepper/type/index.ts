import { StepForm } from '@/app/_provider/stepper/step-form-provider';
import { HTMLInputTypeAttribute } from 'react';

export type Step = {
  order: number;
  title: string;
  description: string;
  isActive: boolean;
  fields: Field[];
};

export type Field = {
  label: string;
  placeholder: string;
  name: keyof StepForm;
  type: HTMLInputTypeAttribute;
  validationRule: (value: any) => boolean;
  invalidText: string;
};
