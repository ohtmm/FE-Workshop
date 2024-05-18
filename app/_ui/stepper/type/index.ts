import { ReactNode } from 'react';

export type Step = {
  // current: number;
  title: string;
  description: string;
  isCompleted: boolean;
  isActive: boolean;
  validationRule: (value: any) => boolean;
  component: ReactNode;
  fieldName: string;
  fieldType: string;
};

export type Stepper = {
  total: number;
  current: number;
};
