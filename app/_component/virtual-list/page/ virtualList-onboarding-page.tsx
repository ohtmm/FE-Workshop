'use client';

import { useRouter } from 'next/navigation';
import Button from '../../shared/button';

const VirtualListOnboardingPage = () => {
  const router = useRouter();
  const handleClick = () => {
    router.push('/virtual-list/colorchips');
  };
  return (
    <div className='w-full h-screen grid grid-cols-1 grid-rows-2 justify-center items-center px-4'>
      <p className='text-center w-full'>
        <span className='block mb-8 text-[48px] font-bold text-left'>
          Virtual List
        </span>
        <span className='block w-full text-sm font-normal flex gap-2'>
          <span className='border border-grey600 text-grey600 px-2 pb-1 rounded-full h-fit'>
            purpose
          </span>
          <span className='w-full text-left text-grey300'>
            무한스크롤을 구현하기 위해 <br />
            가상 리스트를 활용합니다. <br />
            화면에 보이는 요소만 렌더링하므로,
            <br />
            DOM 로드의 부담을 줄여
            <br /> 메모리 성능을 높입니다.
            <br /> 또한 사용자의 스크롤이 지연되거나 <br />
            끊기는 현상을 감소시킬 수 있습니다.
          </span>
        </span>
      </p>
      <Button variant='primary' fullWidth className='' onClick={handleClick}>
        오늘 나에게 어울리는 색은?
      </Button>
    </div>
  );
};

export default VirtualListOnboardingPage;
