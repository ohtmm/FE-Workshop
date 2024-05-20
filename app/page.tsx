'use client';

import { useRouter } from 'next/navigation';
import Button from './_component/shared/button';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/stepper');
  };
  return (
    <main className='w-full min-h-screen text-[36px] text-black bg-white items-center font-bold justify-between p-4'>
      <div className='w-full text-left leading-8'>
        {/* <p className='text-base font-semibold'>youngyoung</p> */}
        <p className=''>FRONT-END WORKSHOP</p>
      </div>
      <div className='w-full mt-20 flex flex-wrap gap-4'>
        <Button
          fullWidth
          variant='primary'
          className='font-normal'
          onClick={handleClick}
        >
          Stepper
        </Button>
        <Button fullWidth disabled className='font-normal'>
          coming soon
        </Button>
        <Button fullWidth disabled className='font-normal'>
          coming soon
        </Button>
        <Button fullWidth disabled className='font-normal'>
          coming soon
        </Button>
        <Button fullWidth disabled className='font-normal'>
          coming soon
        </Button>
      </div>
      <footer className='text-xs font-normal text-grey700 mt-40 text-center'>
        Ⓒ Jiyoung Choi 2024. 05
      </footer>
    </main>
  );
}
