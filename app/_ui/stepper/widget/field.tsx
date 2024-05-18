import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import { ClassNameProps } from '../shared/type';

interface Props extends ClassNameProps {
  label: string;
  placeholder: string;
  inputName: string;
  inputType: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isValid: boolean;
  invalidText: string;
}

const Field = ({
  label,
  placeholder,
  inputName,
  inputType,
  onChange,
  isValid,
  invalidText,
  className,
}: Props) => {
  return (
    <div className={`${className} w-full flex flex-wrap `}>
      <label htmlFor={inputName} className='text-sm text-black'>
        {label}
      </label>
      <input
        className={`block p-2 w-full text-xl font-medium placeholder-grey200 text-black border-b ${
          isValid ? 'border-grey200' : 'border-red'
        }`}
        id={inputName}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
      />
      {!isValid && <p className='text-xs text-red mt-1'>{invalidText}</p>}
    </div>
  );
};

export default Field;
