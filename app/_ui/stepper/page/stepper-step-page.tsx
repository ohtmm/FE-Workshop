'use client';

import React from 'react';
import ProgressBar from '../widget/progress-bar';
import CloseButton from '../shared/close-button';
import { useRouter } from 'next/navigation';
import Description from '../widget/description';
import Field from '../widget/field';
import Button from '../shared/button';
import IconArrowLeft from '../shared/icons/icon-arrow-left';

const StepperStepPage = () => {
  const router = useRouter();

  const handleOnClose = () => {
    router.push('/stepper');
  };
  return (
    <div className='relative min-h-screen'>
      <div className='relative pt-4'>
        <ProgressBar title='1단계' current={1} total={4} />
        <CloseButton
          onClose={handleOnClose}
          className='absolute right-4 top-4'
        />
      </div>
      <div className='px-4 pt-10'>
        <Description
          description='1단계를 입력해주세요'
          current={1}
          total={4}
          className='mb-12'
        />
        <Field
          label='성'
          placeholder='성을 입력해주세요'
          inputName='firstName'
          inputType='text'
          onChange={() => {}}
        />
      </div>
      <div className='flex gap-4 px-4 w-full absolute left-0 bottom-8'>
        <Button variant='secondary' className='w-40'>
          <IconArrowLeft />
        </Button>
        <Button disabled>다음</Button>
      </div>
    </div>
  );
};

export default StepperStepPage;
