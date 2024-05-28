'use client';

import { useRouter } from 'next/navigation';
import Button from './_component/shared/button';

const Routes = [
  {
    route: 'stepper',
    title: 'Stepper',
  },
  {
    route: 'virtual-list',
    title: 'Infinite Scroll with a Virtualized List',
  },
];

export default function Home() {
  const router = useRouter();

  const handleClick = (route: string) => {
    router.push(`/${route}`);
  };
  return (
    <main className='w-full min-h-screen text-[36px] text-black bg-white items-center font-bold justify-between p-4'>
      <div className='w-full text-left leading-8'>
        <p className=''>FRONT-END WORKSHOP</p>
      </div>
      <div className='w-full mt-20 flex flex-wrap gap-4'>
        {Routes.map((route, idx) => (
          <Button
            key={idx}
            fullWidth
            variant='primary'
            className='font-normal'
            onClick={() => handleClick(route.route)}
          >
            {route.title}
          </Button>
        ))}
      </div>
      <footer className='text-xs font-normal text-grey700 mt-40 text-center'>
        Ⓒ Jiyoung Choi 2024. 05
      </footer>
    </main>
  );
}
