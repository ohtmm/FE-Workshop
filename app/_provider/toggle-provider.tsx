'use client';

import {
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type Toggle = {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
};

export const toggleContext = createContext<Toggle | null>(null);

const ToggleProvider = ({ children }: PropsWithChildren) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <toggleContext.Provider value={{ isActive, setIsActive }}>
      {children}
    </toggleContext.Provider>
  );
};

export default ToggleProvider;
