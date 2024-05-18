import { ChangeEvent, HTMLInputTypeAttribute } from 'react';
import { ClassNameProps } from '../shared/type';

interface Props extends ClassNameProps {
  label: string;
  placeholder: string;
  inputName: string;
  inputType: HTMLInputTypeAttribute;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Field = ({
  label,
  placeholder,
  inputName,
  inputType,
  onChange,
  className,
}: Props) => {
  return (
    <div className={`${className} flex flex-wrap `}>
      <label htmlFor={inputName} className='text-sm text-black'>
        {label}
      </label>
      <input
        className='block p-2 w-full text-xl font-medium placeholder-grey200 text-black border-b border-grey200'
        id={inputName}
        name={inputName}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Field;
