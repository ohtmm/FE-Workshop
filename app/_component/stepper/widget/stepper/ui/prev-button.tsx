import Button from '../../../../shared/button';
import IconArrowLeft from '../../../../shared/icons/icon-arrow-left';
import { ClassNameProps } from '../../../../shared/type';

interface Props extends ClassNameProps {
  onClick: () => void;
}

const PrevButton = ({ className, onClick }: Props) => (
  <Button onClick={onClick} variant='secondary' className={`w-40 ${className}`}>
    <IconArrowLeft />
  </Button>
);

export default PrevButton;
