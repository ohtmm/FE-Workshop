import { PropsWithChildren } from 'react';

const Title = ({ children }: PropsWithChildren) => {
  return <span className='test-base font-bold text-black'>{children}</span>;
};

export default Title;
