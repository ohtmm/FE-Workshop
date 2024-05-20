'use client';

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export type StepForm = {
  first_name: string | undefined;
  last_name: string | undefined;
  phone_number: string | undefined;
  identification_number: string | undefined;
  address: string | undefined;
};

type StepFormCreate = {
  fields: Partial<StepForm>;
  setFields: Dispatch<SetStateAction<Partial<StepForm>>>;
};

export const stepformContext = createContext<StepFormCreate | null>(null);
const initialForm = {
  first_name: '',
  last_name: '',
  phone_number: '',
  identification_number: '',
  address: '',
};

const StepFormProvider = ({ children }: PropsWithChildren) => {
  const [fields, setFields] = useState<Partial<StepForm>>(initialForm);

  return (
    <stepformContext.Provider value={{ fields, setFields }}>
      {children}
    </stepformContext.Provider>
  );
};

export default StepFormProvider;
