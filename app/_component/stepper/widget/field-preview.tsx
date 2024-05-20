import { ClassNameProps } from '../shared/type';

interface Props extends ClassNameProps {
  title: string;
  fields: { label: string; value?: string }[];
}

const FieldPreview = ({ title, fields, className }: Props) => {
  return (
    <div className={`${className} w-full border-b last:border-0 pb-6 `}>
      <p className='font-semibold mb-4 '>{title}</p>
      {fields.map((field) => (
        <div className='mt-2 w-full flex gap-8 items-center'>
          <label className='text-sm text-grey400'>{field.label}</label>
          <span>{field.value}</span>
        </div>
      ))}
    </div>
  );
};

export default FieldPreview;
