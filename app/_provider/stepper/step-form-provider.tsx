'use client';

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

export type StepForm = {
  first_name: string;
  last_name: string;
  phone_number: number;
  identification_number: number;
  address: string;
};

type StepFormCreate = {
  fields: Partial<StepForm>;
  setFields: Dispatch<SetStateAction<Partial<StepForm>>>;
};

export const stepformContext = createContext<StepFormCreate | null>(null);

const StepFormProvider = ({ children }: PropsWithChildren) => {
  const [fields, setFields] = useState<Partial<StepForm>>({});

  return (
    <stepformContext.Provider value={{ fields, setFields }}>
      {children}
    </stepformContext.Provider>
  );
};

export default StepFormProvider;
