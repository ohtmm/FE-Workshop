import StepFormProvider from '@/app/_provider/stepper/step-form-provider';
import ToggleProvider from '@/app/_provider/toggle-provider';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <StepFormProvider>
        <ToggleProvider>{children}</ToggleProvider>
      </StepFormProvider>
    </div>
  );
};

export default Layout;
