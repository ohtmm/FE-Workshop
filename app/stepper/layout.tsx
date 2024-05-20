import { PropsWithChildren } from 'react';
import StepFormProvider from '../_provider/stepper/step-form-provider';
import ToggleProvider from '../_provider/stepper/toggle-provider';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-white max-w-[375px] min-h-screen w-full mx-auto'>
      <StepFormProvider>
        <ToggleProvider>{children}</ToggleProvider>
      </StepFormProvider>
    </div>
  );
};

export default Layout;
