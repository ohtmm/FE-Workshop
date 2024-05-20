import Bar from '../../shared/bar';
import Title from '../../shared/title';

interface Props {
  title: string;
  current: number;
  total: number;
}

const ProgressBar = ({ title, current, total }: Props) => {
  return (
    <div className='flex flex-wrap gap-4'>
      <Title>{title}</Title>
      <Bar current={current} total={total} />
    </div>
  );
};

export default ProgressBar;
