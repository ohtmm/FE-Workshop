import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className='bg-white max-w-[375px] min-h-screen w-full mx-auto'>
      {children}
    </div>
  );
};

export default Layout;
