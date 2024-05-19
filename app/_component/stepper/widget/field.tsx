'use client';

import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';
import { ClassNameProps } from '../shared/type';

interface Props extends ClassNameProps {
  label: string;
  placeholder: string;
  inputName: string;
  inputType: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validationRule: (value: any) => boolean;
  invalidText: string;
}

const Field = ({
  label,
  placeholder,
  inputName,
  inputType,
  onChange,
  invalidText,
  validationRule,
  className,
}: Props) => {
  const [isValid, setIsValid] = useState<boolean | 'pending'>('pending');
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!validationRule(e.target.value)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    onChange(e);
  };

  return (
    <div className={`${className} w-full flex flex-wrap `}>
      <label htmlFor={inputName} className='text-sm text-black'>
        {label}
      </label>
      <input
        className={`block p-2 w-full text-xl font-medium placeholder-grey200 text-black border-b ${
          isValid === true ? 'border-grey200' : 'border-red'
        }`}
        id={inputName}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {isValid === false && (
        <p className='text-xs text-red mt-1'>{invalidText}</p>
      )}
    </div>
  );
};

export default Field;
