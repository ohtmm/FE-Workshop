import Button from '@/app/_component/shared/button';
import PrevButton from './prev-button';

interface Props {
  order: number;
  total: number;
  onNext: () => void;
  onPrev: () => void;
  onDone: () => void;
  isNextDisabled: boolean;
}

const NavigationButtons = ({
  order,
  total,
  onNext,
  onPrev,
  onDone,
  isNextDisabled,
}: Props) => {
  return (
    <div className='flex gap-4 px-4 w-full absolute left-0 bottom-8'>
      {order > 1 && <PrevButton onClick={onPrev} />}
      {order < total && (
        <Button disabled={isNextDisabled} onClick={onNext}>
          다음
        </Button>
      )}
      {order === total && (
        <Button disabled={isNextDisabled} onClick={onDone}>
          작성 완료
        </Button>
      )}
    </div>
  );
};

export default NavigationButtons;
