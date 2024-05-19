import { StepForm } from '@/app/_provider/stepper/step-form-provider';
import { HTMLInputTypeAttribute, ReactNode } from 'react';

export type Step = {
  order: number;
  title: string;
  description: string;
  // isCompleted: boolean;
  isActive: boolean;
  fields: Field[];
};

export type Field = {
  label: string;
  inputPlaceholder: string;
  inputName: keyof StepForm;
  inputType: HTMLInputTypeAttribute;
  validationRule: (value: any) => boolean;
};
