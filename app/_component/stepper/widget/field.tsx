'use client';

import { ChangeEvent, HTMLInputTypeAttribute, useState } from 'react';
import { ClassNameProps } from '../shared/type';

interface Props extends ClassNameProps {
  label: string;
  placeholder: string;
  inputName: string;
  inputType: HTMLInputTypeAttribute;
  inputValue: any;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  validationRule: (value: any) => boolean;
  invalidText: string;
}

const Field = ({
  className,
  label,
  placeholder,
  inputName,
  inputType,
  inputValue,
  onChange,
  validationRule,
  invalidText,
}: Props) => {
  const [isValid, setIsValid] = useState<boolean | 'pending'>('pending');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e);
    if (!validationRule(e.target.value)) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
  };

  return (
    <div className={`${className} w-full flex flex-wrap `}>
      <label htmlFor={inputName} className='text-sm text-black'>
        {label}
      </label>
      <input
        className={`block p-2 w-full text-xl font-medium placeholder-grey200 text-black border-b ${
          isValid === false ? 'border-red' : 'border-grey200'
        }`}
        id={inputName}
        name={inputName}
        type={inputType}
        value={inputValue}
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
