'use client';

import { useRouter } from 'next/navigation';
import Button from '../../shared/button';

const StepperOnboardingPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/stepper/step');
  };
  return (
    <div className='w-full h-screen grid grid-cols-1 grid-rows-2 justify-center items-center px-4'>
      <p className='text-center w-full'>
        <span className='block mb-8 text-[48px] font-bold text-left'>
          Stepper
        </span>
        <span className='block w-full text-sm font-normal flex gap-2'>
          <span className='border border-grey600 text-grey600 px-2 pb-1 rounded-full h-fit'>
            purpose
          </span>
          <span className='w-full text-left text-grey300'>
            사용자가 순차적으로 form을 작성하도록 <br />
            직관적인 UI로 가이드합니다. <br />
            단계와 남은 작업을 쉽게 파악함으로써
            <br />
            사용자 경험을 향상할 뿐 아니라,
            <br /> 한 번에 많은 정보를 입력해야 하는 <br /> 부담감을 감소시킬
            것입니다.
          </span>
        </span>
      </p>
      <Button variant='primary' fullWidth className='' onClick={handleClick}>
        회원가입
      </Button>
    </div>
  );
};

export default StepperOnboardingPage;
