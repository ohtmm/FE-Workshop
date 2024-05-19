'use client';

import React from 'react';
import CloseButton from '../shared/close-button';
import { useRouter } from 'next/navigation';

import IconArrowLeft from '../shared/icons/icon-arrow-left';

import Step from '../widget/step/step';
import { Step as StepType } from '../type';
import Button from '../shared/button';

const STEPPER: StepType[] = [
  {
    order: 1,
    isActive: true,
    title: '개인정보 입력',
    description: '이름을 입력해주세요',
    fields: [
      {
        label: '성',
        inputPlaceholder: '성을 입력하세요',
        inputName: 'first_name',
        inputType: 'text',
        validationRule: () => false,
      },
      {
        label: '이름',
        inputPlaceholder: '이름을 입력하세요',
        inputName: 'last_name',
        inputType: 'text',
        validationRule: () => true,
      },
    ],
  },
  {
    order: 2,
    isActive: false,
    title: '전화번호 입력',
    description: '전화번호를 입력해주세요',
    fields: [
      {
        label: '전화번호',
        inputPlaceholder: '전화번호를 입력하세요',
        inputName: 'phone_number',
        inputType: 'tel',
        validationRule: () => true,
      },
    ],
  },
];

const StepperStepPage = () => {
  const router = useRouter();
  const handleOnClose = () => {
    router.push('/stepper');
  };

  const currentStep = STEPPER.find((step) => step.isActive)!;

  return (
    <div className='relative min-h-screen'>
      <CloseButton onClose={handleOnClose} className='absolute right-4 top-4' />
      <Step step={currentStep} />
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
