'use client';

import { useRouter } from 'next/navigation';
import Button from '../shared/button';

const StepperSuccessPage = () => {
  const router = useRouter();

  return (
    <div className='w-full pt-4 px-4 min-h-screen items-center justify-center grid grid-rows-2'>
      <span className='text-lg font-semibold text-center'>
        제출을 완료하였습니다 🙂 <br /> Stepper 경험은 어땠나요?{' '}
      </span>
      <Button
        variant='primary'
        fullWidth
        onClick={() => {
          router.push('/');
        }}
      >
        홈으로 이동
      </Button>
    </div>
  );
};

export default StepperSuccessPage;
