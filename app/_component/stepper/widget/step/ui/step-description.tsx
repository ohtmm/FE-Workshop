import { ClassNameProps } from '../../../../shared/type';

interface Props extends ClassNameProps {
  description: string;
  current: number;
  total: number;
}

const Description = ({ description, current, total, className }: Props) => {
  return (
    <div className={`${className} w-full flex gap-4 items-center`}>
      <p className='text-lg font-bold text-black'>{description}</p>
      <span className='text-grey500 text-sm'>
        {current}/{total}
      </span>
    </div>
  );
};

export default Description;
